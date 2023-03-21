<template>
  <GenericContainer>
    <HeroText front="Call me Martijn" back="About" />
    <h2 class="-mt-20 mb-24 text-center opacity-30">My passions</h2>

    <div
      class="grid items-baseline gap-12 text-lg leading-relaxed md:grid-cols-2"
    >
      <div class="mb-12">
        <nuxt-picture
          src="about/laptop.jpeg"
          alt="Just a picture of a laptop."
          :img-attrs="{ class: 'block w-full rounded-lg' }"
        />
        <h3 class="my-6 text-2xl font-bold tracking-wide">
          Design & development
        </h3>
        <p>
          When your hobby is your job, you are one lucky boy or girl. Creating
          websites and web apps is my favorit thing. I find it especially
          rewarding when I can create something that looks clean and works
          flawlessly. To make something that works everytime, without bugs, fast
          is extremely hard.
        </p>
      </div>

      <div class="mb-12">
        <nuxt-picture
          src="about/IMG_6301.jpeg"
          alt="Me in a nice street in Italy."
          :imgAttrs="{ class: 'block w-full rounded-lg' }"
        />
        <h3 class="my-6 text-2xl font-bold tracking-wide">Photography</h3>
        <p>
          This is a wonderful outlet to process the things you see around you.
          Also to capture a moment with such ease nowadays is such a privilage.
        </p>
        <p>
          A wonderful hobby that sometimes comes in handy when working for
          clients.
        </p>
      </div>

      <div class="mb-12">
        <nuxt-picture
          src="about/IMG_5784.jpeg"
          alt="A beautiful coockoo in a crazy hot day."
          :img-attrs="{ class: 'block w-full rounded-lg' }"
        />
        <h3 class="my-6 text-2xl font-bold tracking-wide">Nature</h3>
        <p>
          I love it when it's sunny. I love to feel the rain in my face on a
          chilly day. It's wonderful to feel the snow under your feet. It's
          always beautiful outside, I love to jump in my boots and enjoy some
          outdoor time whenever I can.
        </p>
      </div>

      <div class="mb-12">
        <nuxt-picture
          src="about/IMG_4419.jpeg"
          alt="My lord. A beautiful picture of a sunrise in the alps in Swiss."
          :img-attrs="{ class: 'block w-full rounded-lg' }"
        />
        <h3 class="my-6 text-2xl font-bold tracking-wide">Faith</h3>
        <p>Everything I do is rooted in a deep faith in Jesus Christ.</p>

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
    </div>
  </GenericContainer>

  <GenericContainer class="">
    <div
      class="@dark:bg-neutral-800 grid items-end rounded-lg bg-neutral-900 p-12 text-neutral-100 dark:bg-neutral-100 sm:grid-cols-3"
    >
      <div class="col-span-2 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold tracking-wide">Work together?</h2>
        <p class="mb-6 opacity-30">Web development, training, speaking</p>
        <p>Do you need a hand? Stuck on a web project?</p>
        <p class="mb-6">
          I love to work with JS-frameworks and to deep dive in frontend
          development. Also fullstack development is something I love doing.
        </p>
        <p class="mb-12">
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
</template>

<script lang="ts" setup>
const email = ref<string>('martijn.loth[@]icloud.com')
const copied = ref<boolean>(false)

const copyEmail = () => {
  email.value = 'martijn.loth@icloud.com'
  navigator.clipboard.writeText(email.value)
  copied.value = true
}
</script>
