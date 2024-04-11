<template>
  <div class="flex items-center justify-end gap-2 sm:justify-center">
    <div
      v-for="(week, index) in contributions.weeks"
      :key="index"
      class="grid-rows-7 grid auto-cols-auto gap-2"
    >
      <div
        v-for="day in week.contributionDays"
        :key="day.date"
        class="h-5 w-5 rounded bg-red-500"
        :style="{
          backgroundColor: day.color,
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gql } from 'nuxt-graphql-request/utils'
const { $graphql } = useNuxtApp()

const variables = computed(() => ({
  // start from thirty days ago
  from: new Date(
    new Date().setDate(new Date().getDate() - (301 + new Date().getDay())),
  ),
  to: new Date(),
}))

const query = gql`
  query contributions($from: DateTime!, $to: DateTime!) {
    user(login: "MLoth") {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              weekday
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`
const { data: contributions } = await useAsyncData('user', async () => {
  const data = await $graphql.default.request(query, variables.value)
  return data.user.contributionsCollection.contributionCalendar
})

// https://docs.github.com/en/graphql/overview/explorer
// https://nuxt.com/modules/graphql-request
// Met useAyncData https://nuxt.com/modules/graphql-request<
</script>
