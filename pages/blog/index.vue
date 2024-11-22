<template>
  <ItemsOverview title="Wildlife & Tech" :query="blog" type="blog" />
</template>

<script lang="ts" setup>
useHead({
  title: 'Blog',
})

const blog = {
  path: '/blog',
  sort: [{ createdAt: -1 }],
  order: 'desc',
}
</script>
