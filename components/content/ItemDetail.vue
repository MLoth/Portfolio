<template>
  <main v-if="doc">
    <GenericContainer>
      <HeroText
        :title="doc.title"
        :subtitle="
          doc.path.includes('blog')
            ? new Date(doc.createdAt).toLocaleDateString('en', {
                year: 'numeric',
                month: 'long',
              })
            : doc.categories.sort().join(', ')
        "
        :view-transition-id="doc.path"
      />
    </GenericContainer>

    <NuxtImg
      :alt="`Hero image of ${doc.title}`"
      :src="doc.cover"
      :style="{ 'view-transition-name': doc.stem.split('/')[1] }"
      placeholder
      class="block aspect-[3/2] w-full bg-neutral-100"
    />

    <GenericContainer>
      <WrapText class="my-12">
        <p class="font-semibold">{{ doc.description }}</p>
      </WrapText>

      <ContentRenderer :value="doc" />
    </GenericContainer>
  </main>
</template>

<script lang="ts" setup>
import type { ProjectsCollectionItem, BlogCollectionItem } from '@nuxt/content'

const { path } = useRoute()
const collection = path.split('/')[1] as 'projects' | 'blog'

const { data: doc } = await useAsyncData<
  ProjectsCollectionItem | BlogCollectionItem
>(path, () => queryCollection(collection).path(path).first())
</script>
