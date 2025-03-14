<template>
  <div>
    <GenericContainer>
      <HeroText title="Hello, I'm Martijn" subtitle="My passions" />

      <div class="grid grid-cols-6 gap-6 leading-relaxed">
        <BentoCard
          class="@dark:from-neutral-800 col-span-6 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-black p-12 text-white lg:col-span-2"
        >
          <div>
            <h3
              class="mb-6 text-center text-4xl font-bold tracking-wide lg:text-4xl"
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

        <BentoCard class="relative col-span-6 lg:col-span-4">
          <NuxtImg
            src="profile/lvgvfhabohtbjtbpqvx0"
            alt="Me in a nice street in Italy."
            class="block h-full w-full object-cover"
          />
          <div class="absolute inset-x-0 bottom-0 text-white">
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
          class="@dark:bg-neutral-800 col-span-6 flex h-full w-full items-center justify-center bg-neutral-50 p-12 md:col-span-3"
        >
          <div class="text-center">
            <h3 class="mb-3 text-center text-5xl font-bold tracking-wide">
              Faith
            </h3>
            <p class="mb-6 text-lg">
              Everything I do is rooted in a deep faith in Jesus Christ.
            </p>

            <p class="font-italic">
              <a
                class="underline"
                href="https://www.biblegateway.com/passage/?search=2+Peter%203&version=ASV"
              >
                2 Peter 3:18
              </a>
              But grow in the grace and knowledge of our Lord and Saviour Jesus
              Christ. To him be the glory both now and for ever. Amen.
            </p>
          </div>
        </BentoCard>

        <BentoCard
          class="relative col-span-6 h-full text-white shadow md:col-span-3"
        >
          <NuxtImg
            src="profile/usqjm04nesamdgfloxjs"
            alt="A beautiful coockoo in a crazy hot day."
            class="block h-full w-full object-cover"
          />
        </BentoCard>

        <BentoCard
          class="relative col-span-6 flex items-center justify-center overflow-hidden bg-green-50 p-6"
        >
          <!-- bg-gradient bg-gradient-radial -->
          <div
            class="to-transparant @dark:via-neutral-900 @dark:from-neutral-800 absolute flex flex-col items-center justify-center from-white via-white via-50% px-6 py-12 text-neutral-800"
          >
            <h3
              class="mb-3 text-center text-6xl font-bold tracking-wide mix-blend-luminosity"
            >
              Step by step
            </h3>
            <p class="text-center text-lg font-bold mix-blend-luminosity">
              I try to do a least a little work every day to achieve my goals.
            </p>
          </div>

          <ContributionCount />
        </BentoCard>
      </div>
    </GenericContainer>

    <GenericContainer class="relative col-span-2 h-full overflow-hidden">
      <div
        class="@dark:bg-neutral-800 grid items-end rounded-2xl bg-neutral-900 px-6 py-24 text-neutral-100 sm:grid-cols-3 xl:px-24 dark:bg-neutral-100"
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
            <button class="hover:border-b-1 relative" @click="copyEmail">
              <span class="peer">{{ email }}</span>
              <!-- <p
                class="absolute translate-x-1/2 text-sm opacity-0 peer-hover:opacity-100"
              >
                <template v-if="copied">Send that email!</template>
                <template v-else>Click to copy 😉.</template>
              </p> -->
            </button>
            <p class="inline">.</p>
          </div>
        </div>
      </div>
    </GenericContainer>
  </div>
</template>

<script lang="ts" setup>
const email = ref<string>('martijn.loth[@]icloud.com')
const copied = ref<boolean>(false)

useHead({
  title: 'About me',
})

const copyEmail = () => {
  email.value = 'martijn.loth@icloud.com'
  navigator.clipboard.writeText(email.value)
  copied.value = true
}
</script>
