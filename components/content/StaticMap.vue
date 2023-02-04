<template>
  <img :src="image" alt="Map" class="w-xs h-xs float-right rounded-lg p-6" />
</template>

<script lang="ts">
// https://docs.mapbox.com/playground/static/

export default {
  props: {
    lon: {
      type: Number as () => number,
      required: true,
    },

    lat: {
      type: Number as () => number,
      required: true,
    },

    zoom: {
      type: Number as () => number,
      default: 10,
    },

    theme: {
      type: String as () => string,
      default: 'dark', // or 'dark'
    },

    marker: {
      type: Boolean as () => boolean,
      default: true,
    },
  },

  setup(props) {
    const image = ref('')
    const { theme } = usePrefersColorScheme()
    const { getImage } = useStaticMap()

    onMounted(() => {
      getImage(props.lat, props.lon, props.zoom, props.marker).then(
        (map) => (image.value = map[theme.value]),
      )

      watch(theme, (value) => {
        getImage(props.lat, props.lon, props.zoom, props.marker).then(
          (map) => (image.value = map[value]),
        )
      })
    })

    return {
      image,
    }
  },
}
</script>
