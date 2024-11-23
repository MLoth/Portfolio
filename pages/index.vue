<template>
  <GenericContainer>
    <HeroText
      title="Hello, I'm Martijn"
      subtitle="Design-driven web developer and university teacher, with a love for photography."
    >
      <template #before>
        <NuxtImg
          src="profile/p2fxahtlhkxcwhmeelll"
          alt="Profile picture of Martijn Loth"
          class="mb-8 aspect-[1/1]"
          placeholder
          width="100"
          :modifiers="{
            c: 'auto',
            r: 'max',
          }"
        />
      </template>

      <template #default>
        <RouterLink
          to="/about"
          class="mt-6 inline-flex items-center gap-1 font-bold opacity-20 hover:opacity-100"
        >
          More about me <ChevronRight />
        </RouterLink>
      </template>
    </HeroText>

    <div class="max-w-screen mx-auto grid gap-6 align-baseline md:grid-cols-12">
      <HomeItems
        title="Blog"
        query="blog"
        more-text="All blog posts >"
        more-link="/blog"
      />

      <HomeItems
        title="&lt;Projects&sol;&gt;"
        query="projects"
        more-text="All projects >"
        more-link="/projects"
      />
    </div>
  </GenericContainer>
</template>

<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next'

useHead({
  title: 'Home',
})

// const blog: QueryBuilderParams = {
//   path: '/blog',
//   limit: 2,
//   sort: [{ createdAt: -1 }],
// }

// const projects: QueryBuilderParams = {
//   path: '/project',
//   limit: 2,
//   sort: [{ createdAt: -1 }],
// }
</script>
