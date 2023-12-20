<template>
  <RouterLink
    :key="item._path"
    :to="item._path"
    :class="`@dark:bg-neutral-800 @dark:border-neutral-500 @dark:ring-black relative block overflow-hidden rounded-lg border-2 border-neutral-100 bg-white ${getHeightOffset()}`"
    :style="`view-transition-name: '${item.cover.split('.')[0]}'`"
  >
    <NuxtPicture
      v-if="item.cover"
      :alt="item.title"
      :src="item.cover"
      :width="548"
      :height="365"
      :fit="`contain`"
      :img-attrs="{
        loading: `lazy`,
        placeholder: true,
        class: `block w-full scale-100 transform transition-transform duration-200 ease-in-out hover:scale-105`,
      }"
    />

    <div class="pointer-events-none absolute bottom-0 p-3 lg:p-6">
      <div class="flex flex-col">
        <h3
          ref="title"
          :class="`font-theme text-md @dark:bg-neutral-900 inline w-fit rounded-tl-md rounded-tr-md bg-white py-1 px-2 font-bold tracking-wide tracking-wide ${
            titleLonger() ? 'rounded-br-md' : ''
          }`"
        >
          {{ item.title }}
        </h3>

        <span
          ref="subtitle"
          :class="`@dark:text-neutral-300 @dark:bg-neutral-900 inline w-fit rounded-bl-md rounded-br-md bg-white py-1 px-2 text-xs tracking-wide text-neutral-400 ${
            titleLonger() ? '' : 'rounded-tr-md'
          }`"
        >
          <template v-if="item._dir === 'blog'">
            {{
              new Date(item.createdAt).toLocaleDateString('en', {
                year: 'numeric',
                month: 'long',
              })
            }}
          </template>
          <template v-else>
            {{ item.categories.join(', ') }}
          </template>
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

    cols: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const title = ref<HTMLElement>()
    const subtitle = ref<HTMLElement>()

    const getHeightOffset = () => {
      const offset = props.index % 3

      if (offset === 0) {
        return 'md:translate-y-0'
      }

      if (offset === 1) {
        return 'md:translate-y-12'
      }

      return 'md:translate-y-24'
    }

    const titleLonger = (): boolean => {
      if (title.value && subtitle.value) {
        return title.value?.offsetWidth > subtitle.value?.offsetWidth
      }
      return false
    }

    return {
      title,
      subtitle,

      getHeightOffset,
      titleLonger,
    }
  },
}
</script>
