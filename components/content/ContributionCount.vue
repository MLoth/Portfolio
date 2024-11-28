<template>
  <div
    v-if="data"
    class="flex items-center justify-end gap-2 sm:justify-center"
  >
    <div
      v-for="(week, index) in data.weeks"
      :key="index"
      class="grid auto-cols-auto grid-rows-7 gap-2"
    >
      <div
        v-for="day in week.contributionDays"
        :key="day.date"
        class="h-5 w-5 rounded"
        :style="{
          backgroundColor: day.color,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gql } from 'nuxt-graphql-request/utils'
import type { ContributionsCollection } from '@octokit/graphql-schema'

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
const { data } = await useAsyncData('user', async () => {
  const {
    user: {
      contributionsCollection: { contributionCalendar },
    },
  } = await $graphql.default.request<ContributionsCollection>(
    query,
    variables.value,
  )
  return contributionCalendar
})
</script>
