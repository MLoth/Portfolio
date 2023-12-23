<template>
  <main>
    <GenericContainer>
      <ContentDoc v-slot="{ doc }">
        <HeroText :front="doc.title" back="Project" />

        <p class="-mt-20 mb-24 text-center opacity-30">
          {{ doc.categories.sort().join(', ') }}
        </p>

        <figure>
          <NuxtPicture
            :alt="`Hero image of ${doc.title}`"
            :src="doc.cover"
            width="1152"
            height="768"
            :img-attrs="{
              placeholder: true,
              class: `block w-full rounded-lg`,
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
