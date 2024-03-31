<template>
  <div>
    <GenericContainer>
      <HeroText text="Call me Martijn" />
      <h2 class="-mt-20 mb-24 text-center opacity-30 text-lg">My passions</h2>

      <div class="grid gap-3 leading-relaxed grid-cols-6">
        <BentoCard
          class="col-span-6 lg:col-span-2 flex items-center justify-center p-12 bg-gradient-to-br @dark:from-neutral-800 from-neutral-700 to-black text-white"
        >
          <!-- <NuxtImg
            src="profile/oylys1q22znhyuwhg6zc"
            alt="Just a picture of a laptop."
            class="block object-cover w-full h-full"
          /> -->
          <div class="">
            <h3
              class="text-4xl lg:text-4xl font-bold tracking-wide text-center mb-6"
            >
              Development <span class="block">&</span> Design
            </h3>
            <p class="text-center text-lg">
              Creating websites and (web) apps is my favorite thing. I find it
              especially rewarding when I can create something that looks clean
              and works flawlessly. To make something that works everytime,
              without bugs, fast is extremely hard.
            </p>
          </div>
        </BentoCard>

        <BentoCard class="col-span-6 lg:col-span-4 relative">
          <NuxtImg
            src="profile/lvgvfhabohtbjtbpqvx0"
            alt="Me in a nice street in Italy."
            class="block object-cover w-full h-full"
          />
          <!-- bg-gradient-to-t from-white via-white via-10% -->
          <div class="absolute bottom-0 inset-x-0 text-white">
            <!-- <h3 class="text-5xl font-bold tracking-wide mb-12 text-center">
              Photography
            </h3> -->
            <!-- <p>
              This is a wonderful outlet to process the things you see around
              you. Also to capture a moment with such ease nowadays is such a
              privilage.
            </p>
            <p>
              A wonderful hobby that sometimes comes in handy when working for
              clients.
            </p> -->
          </div>
        </BentoCard>

        <BentoCard
          class="col-span-3 flex items-center justify-center w-full h-full p-12"
        >
          <div class="text-center">
            <h3 class="text-5xl font-bold tracking-wide mb-3 text-center">
              Faith
            </h3>
            <p class="text-lg mb-6">
              Everything I do is rooted in a deep faith in Jesus Christ.
            </p>

            <p class="font-italic">
              <a
                class="underline"
                href="https://www.biblegateway.com/passage/?search=2+Peter%203&version=ASV"
                >2 Peter 3:18</a
              >
              But grow in the grace and knowledge of our Lord and Saviour Jesus
              Christ. To him be the glory both now and for ever. Amen.
            </p>
          </div>
        </BentoCard>

        <BentoCard class="col-span-3 relative h-full text-white shadow">
          <NuxtImg
            src="profile/usqjm04nesamdgfloxjs"
            alt="A beautiful coockoo in a crazy hot day."
            class="block object-cover w-full h-full"
          />
          <div class="absolute bottom-0 inset-x-0">
            <!-- <h3 class="text-5xl font-bold tracking-wide mb-12 text-center">
              Nature
            </h3> -->
            <!-- <p>
            I love it when it's sunny. I love to feel the rain in my face on a
            chilly day. It's wonderful to feel the snow under your feet. It's
            always beautiful outside, I love to jump in my boots and enjoy some
            outdoor time whenever I can.
          </p> -->
          </div>
        </BentoCard>

        <!-- <BentoCard class="col-span-3 p-6">
          <div class="absolute bottom-0 inset-x-0">
            <h3 class="text-5xl font-bold tracking-wide mb-3 text-center">
              A little every day
            </h3>
          </div>

          <div>
            <h4 class="text-2xl font-bold">A little every day</h4>
            <div v-for="(week, index) in contributions.weeks" :key="index">
              <h5 class="text-xl font-bold">{{ week.title }}</h5>
              <div v-for="day in week" class="" :key="day.date">
                {{ day }}
              </div>
            </div>
          </div>
        </BentoCard> -->
      </div>
    </GenericContainer>

    <GenericContainer class="col-span-2 relative h-full">
      <div
        class="@dark:bg-neutral-800 grid items-end xl:rounded-3xl bg-neutral-900 px-24 py-24 text-neutral-100 dark:bg-neutral-100 sm:grid-cols-3 -mx-6 xl:-mx-12"
      >
        <div class="col-span-2 text-lg leading-relaxed">
          <h2 class="text-3xl font-bold tracking-wide">Work together?</h2>
          <p class="mb-6 opacity-30">Web development, training, speaking</p>
          <p>Do you need a hand? Stuck on a web project?</p>
          <p class="mb-6">
            I love to work with JS-frameworks and to deep dive in frontend
            development. Also fullstack development is something I love doing.
          </p>
          <p>
            I'm always looking for new challenges and to learn new things. So if
            you have a project that needs a hand, feel free to contact me.
          </p>

          <div class="text-lg leading-relaxed">
            <p class="inline">Mail me at{{ ' ' }}</p>
            <button class="border-b-1 relative" @click="copyEmail">
              <span class="peer">{{ email }}</span>
              <p
                class="absolute translate-x-1/2 text-sm opacity-0 peer-hover:opacity-100"
              >
                <template v-if="copied">Send that email!</template>
                <template v-else>Click to copy 😉.</template>
              </p>
            </button>
            <p class="inline">.</p>
          </div>
        </div>
      </div>
    </GenericContainer>
  </div>
</template>

<script lang="ts" setup>
import { gql } from 'nuxt-graphql-request/utils'

const { $graphql } = useNuxtApp()

const email = ref<string>('martijn.loth[@]icloud.com')
const copied = ref<boolean>(false)
const variables = computed(() => ({
  // start from thirty days ago
  from: new Date(new Date().setDate(new Date().getDate() - 30)),
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
          months {
            name
            year
            firstDay
            totalWeeks
          }
        }
      }
    }
  }
`

useHead({
  title: 'About me',
})

const copyEmail = () => {
  email.value = 'martijn.loth@icloud.com'
  navigator.clipboard.writeText(email.value)
  copied.value = true
}

const { data: contributions } = await useAsyncData('user', async () => {
  const data = await $graphql.default
    .request(query, variables.value)
    .catch((error) => {
      console.error(error)
    })
  console.log(data)
  return data.user.contributionsCollection.contributionCalendar
})

// https://docs.github.com/en/graphql/overview/explorer
// https://nuxt.com/modules/graphql-request
// Met useAyncData https://nuxt.com/modules/graphql-request

// }
</script>
