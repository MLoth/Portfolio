<template>
  <GenericContainer>
    <HeroText front="I make cool stuff." back="Martijn Loth" />

    <div class="grid md:grid-cols-12 gap-6 md:gap-12 align-baseline">
      <div
        class="md:col-span-12 md:my-10 font-bold text-center text-neutral-200 text-5xl md:text-9xl tracking-widest md:-mb-24 leading-none"
      >
        <RouterLink to="/blog" class="">
          <h2 class="inline-block">Blog</h2>
        </RouterLink>
      </div>

      <RouterLink
        to="/blog/"
        class="md:col-span-6 @dark:bg-neutral-800 bg-white rounded-lg border-2 border-neutral-100 @dark:ring-black"
      >
        <img
          class="w-full rounded-tl-lg rounded-tr-lg"
          src="~/assets/images/blog-2.jpg"
          alt="Blog"
        />

        <div class="p-6">
          <h3 class="tracking-wide font-theme font-bold">Wildlife</h3>
          <p class="font-mono text-neutral-500 @dark:text-neutral-300 text-sm">
            09 / 01 / 2022
          </p>
        </div>
      </RouterLink>

      <RouterLink
        to="/blog/"
        class="md:col-span-6 @dark:bg-neutral-800 bg-white rounded-lg border-2 border-neutral-100 @dark:ring-black translate-y-12"
      >
        <img
          class="w-full rounded-tl-lg rounded-tr-lg"
          src="~/assets/images/blog-2.jpg"
          alt="Blog"
        />

        <div class="p-6">
          <h3 class="tracking-wide font-theme font-bold">
            💪🏽 Stay healthy. Code better.
          </h3>
          <p class="font-mono text-neutral-500 @dark:text-neutral-300 text-sm">
            09 / 01 / 2022
          </p>
        </div>
      </RouterLink>

      <div class="md:col-span-12 text-center my-12 font-bold text-sm">
        <RouterLink to="/blog"> All blog posts > </RouterLink>
      </div>

      <div
        class="md:col-span-12 md:my-10 font-bold text-center text-neutral-200 text-5xl md:text-9xl tracking-widest md:-mb-24 leading-none"
      >
        <RouterLink to="/blog" class="">
          <h2 class="inline-block">&lt;Projects&sol;&gt;</h2>
        </RouterLink>
      </div>

      <RouterLink
        to="/blog/"
        class="md:col-span-6 @dark:bg-neutral-800 bg-white rounded-lg border-2 border-neutral-100 @dark:ring-black"
      >
        <img
          class="w-full rounded-tl-lg rounded-tr-lg"
          src="~/assets/images/blog-2.jpg"
          alt="Blog"
        />

        <div class="p-6">
          <h3 class="tracking-wide font-theme font-bold">Wildlife</h3>
          <p class="font-mono text-neutral-500 @dark:text-neutral-300 text-sm">
            09 / 01 / 2022
          </p>
        </div>
      </RouterLink>

      <RouterLink
        to="/blog/"
        class="md:col-span-6 @dark:bg-neutral-800 bg-white rounded-lg border-2 border-neutral-100 @dark:ring-black translate-y-12"
      >
        <img
          class="w-full rounded-tl-lg rounded-tr-lg"
          src="~/assets/images/blog-2.jpg"
          alt="Blog"
        />

        <div class="p-6">
          <h3 class="tracking-wide font-theme font-bold">Tech</h3>
          <p class="font-mono text-neutral-500 @dark:text-neutral-300 text-sm">
            09 / 01 / 2022
          </p>
        </div>
      </RouterLink>

      <div class="md:col-span-12 text-center my-12 font-bold text-sm">
        <RouterLink to="/blog"> All projects > </RouterLink>
      </div>
    </div>
  </GenericContainer>
</template>

<script lang="ts">
export default {
  components: {},

  setup() {
    useHead({
      title: 'Home',
    })
  },
}
</script>
