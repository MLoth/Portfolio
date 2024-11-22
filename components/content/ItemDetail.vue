<template>
  <main>
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

    <div :style="viewTransitionName">
      <NuxtPicture
        v-if="path"
        :alt="`Hero image of ${doc.title}`"
        :src="doc.cover"
        :img-attrs="{
          placeholder: true,
          class: `block w-full bg-neutral-100`,
        }"
      />
    </div>

    <GenericContainer>
      <WrapText class="my-12">
        <p class="font-semibold">{{ doc.description }}</p>
      </WrapText>

      <ContentRenderer :value="doc" />
    </GenericContainer>
  </main>
</template>

<script lang="ts" setup>
const { path } = useRoute()

const { data: doc } = await useAsyncData(path, () => {
  // @ts-expect-error - the path is just a string, should be cast to the correct type TODO
  return queryCollection(path.split('/')[1]).path(path).first()
})

console.log(doc)

const viewTransitionName = computed(
  () => `view-transition-name: '${doc.value.path}'`,
)
</script>
