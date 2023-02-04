<template>
  <GenericContainer>
    <HeroText front="Call me Martijn" back="About" />
    <h2 class="-mt-20 mb-24 text-center opacity-30">My passions</h2>

    <div class="grid grid-cols-2 items-baseline gap-12 text-lg leading-relaxed">
      <div class="mb-12">
        <nuxt-img src="about/IMG_6301.jpeg" alt="" class="rounded-lg" />
        <h3 class="my-6 text-2xl font-bold tracking-wide">
          Design & development
        </h3>
        <p>
          I find it especially rewarding when I can create something that looks
          clean and works flawlessly. To make something that works everytime,
          without bugs, fast is extremely hard.
        </p>
      </div>

      <div class="mb-12">
        <nuxt-img src="about/IMG_6301.jpeg" alt="" class="rounded-lg" />
        <h3 class="my-6 text-2xl font-bold tracking-wide">Photography</h3>
        <p>
          This is a wonderful outlet to process the things you see around you.
          Also to capture a moment with such ease nowadays is such a privilage.
        </p>
      </div>

      <div class="mb-12">
        <nuxt-img src="about/IMG_6301.jpeg" alt="" class="rounded-lg" />
        <h3 class="my-6 text-2xl font-bold tracking-wide">Nature</h3>
        <p>
          I love it when it's sunny. I love to feel the rain in my face on a
          chilly day. It's wonderful to feel the snow under your feet. It's
          always beautiful outside, I love to jump in my boots and enjoy some
          outdoor time whenever I can.
        </p>
      </div>

      <div class="mb-12">
        <nuxt-img src="about/IMG_4419.jpeg" alt="" class="rounded-lg" />
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
    <div class="rounded-lg bg-neutral-900 p-12 text-neutral-100">
      <h2 class="mb-3 text-3xl font-bold tracking-wide">Work together?</h2>
      <p class="">Do you need a hand? Stuck on a web project?</p>

      <button>Contact</button>
    </div>
  </GenericContainer>
</template>
