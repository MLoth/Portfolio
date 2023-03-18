<template>
  <main>
    <GenericContainer>
      <ContentDoc v-slot="{ doc }">
        <HeroText :front="doc.title" back="Blog" />
        <p class="-mt-20 mb-24 text-center opacity-30">
          {{
            new Date(doc.createdAt).toLocaleDateString('en', {
              year: 'numeric',
              month: 'long',
            })
          }}
        </p>

        <figure>
          <nuxt-img
            :alt="`Hero image of ${doc.title}`"
            :src="`${doc._path}/${doc.cover}`"
            width="1152"
            height="768"
            loading="lazy"
            placeholder
            class="block w-full rounded-lg bg-gray-100"
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
