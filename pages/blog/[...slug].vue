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

        <figure :style="`view-transition-name: '${doc.cover}'`">
          <!-- width="1152"
          height="768" -->
          <NuxtPicture
            placeholder
            :alt="`Hero image of ${doc.title}`"
            :src="doc.cover"
            :loading="'lazy'"
            :img-attrs="{
              class: `block w-full rounded-lg hero-image`,
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
