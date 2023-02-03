<template>
  <main>
    <GenericContainer>
      <ContentDoc v-slot="{ doc }">
        <HeroText :front="doc.title" back="Blog" />

        <figure>
          <nuxt-picture
            :src="`/${doc._path}/${doc.cover}`"
            fit="cover"
            width="100%"
            height="auto"
            class="w-full bg-gray-100 rounded-lg block"
            loading="lazy"
            :imgAttrs="{
              class: 'block w-full rounded-lg',
              alt: `Hero image of ${doc.title}`,
            }"
          />
          <!-- <figcaption class="text-xs text-neutral-400 pt-2 pb-4 text-right">
            Canon R6 - 400mm
          </figcaption> -->
        </figure>

        <WrapText class="my-12">
          <p class="font-semibold">{{ doc.description }}</p>
        </WrapText>

        <ContentRenderer :value="doc" />
      </ContentDoc>
    </GenericContainer>
  </main>
</template>

<script lang="ts"></script>

<!-- <style>
h1 {
  @apply text-4xl font-bold;
}

p {
  background: red;
}
</style> -->
