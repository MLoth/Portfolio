<template>
  <img :src="image" alt="Map" class="rounded-lg" />
</template>

<script lang="ts">
// https://docs.mapbox.com/playground/static/

export default {
  props: {
    theme: {
      type: String as () => string,
      default: 'dark', // or 'dark'
    },
  },

  setup() {
    const image = ref('')
    const { getImage } = useStaticMap()

    getImage(13, 25, 5).then((map) => (image.value = map))

    return {
      image,
    }
  },
}
</script>
