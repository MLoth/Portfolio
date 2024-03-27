<template>
  <main>
    <GenericContainer>
      <ContentDoc v-slot="{ doc }">
        <HeroText :text="doc.title ?? ''" />

        <p class="-mt-20 mb-24 text-center opacity-30">
          {{
            doc._dir === 'blog'
              ? new Date(doc.createdAt).toLocaleDateString('en', {
                  year: 'numeric',
                  month: 'long',
                })
              : doc.categories.sort().join(', ')
          }}
        </p>

        <figure>
          <NuxtPicture
            :alt="`Hero image of ${doc.title}`"
            :src="doc.cover"
            :img-attrs="{
              placeholder: true,
              class: `block w-full rounded-lg bg-neutral-100`,
            }"
            :style="`view-transition-name: ${path};`"
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

<script lang="ts" setup>
const { path } = useRoute()
</script>
