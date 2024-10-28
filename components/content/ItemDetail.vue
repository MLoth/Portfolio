<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <GenericContainer>
        <HeroText
          :title="doc.title ?? ''"
          :subtitle="
            doc._dir === 'blog'
              ? new Date(doc.createdAt).toLocaleDateString('en', {
                  year: 'numeric',
                  month: 'long',
                })
              : doc.categories.sort().join(', ')
          "
        />
      </GenericContainer>

      <figure>
        <NuxtPicture
          :alt="`Hero image of ${doc.title}`"
          :src="doc.cover"
          :img-attrs="{
            placeholder: true,
            class: `block w-full bg-neutral-100`,
          }"
          :style="`view-transition-name: ${path};`"
        />
      </figure>

      <GenericContainer>
        <WrapText class="my-12">
          <p class="font-semibold">{{ doc.description }}</p>
        </WrapText>

        <ContentRenderer :value="doc" />
      </GenericContainer>
    </ContentDoc>
  </main>
</template>

<script lang="ts" setup>
const { path } = useRoute()
</script>
