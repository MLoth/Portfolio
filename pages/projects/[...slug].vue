<template>
  <main>
    <GenericContainer>
      <ContentDoc v-slot="{ doc }">
        <HeroText :front="doc.title" back="Project" />
        <p class="-mt-20 mb-24 text-center opacity-30">
          {{ doc.categories.join(', ') }}
        </p>

        <figure>
          <nuxt-picture
            :src="`/${doc._path}/${doc.cover}`"
            fit="cover"
            width="100%"
            height="auto"
            class="block w-full rounded-lg bg-gray-100"
            loading="lazy"
            :imgAttrs="{
              class: 'block w-full rounded-lg',
              alt: `Hero image of ${doc.title}`,
            }"
          />
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
