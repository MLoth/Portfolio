<template>
  <!-- ${getHeightOffset()} -->
  <RouterLink
    :key="item._path"
    :to="item._path"
    :class="`@dark:bg-neutral-800 @dark:border-neutral-800 @dark:ring-black relative block overflow-hidden rounded-2xl border-2 border-neutral-100 bg-white `"
  >
    <NuxtPicture
      v-if="item.cover"
      :alt="item.title"
      :src="item.cover"
      :modifiers="{
        g: 'object',
        c: 'fill',
        ar: '4:3',
      }"
      :loading="lazy ? 'lazy' : 'eager'"
      placeholder
      :img-attrs="{
        class: `block w-full`,
      }"
      :style="`view-transition-name: '${item._path}'`"
    />

    <div class="pointer-events-none absolute bottom-0 p-3 lg:p-6">
      <div class="flex flex-col">
        <div class="flex items-end">
          <h3
            ref="title"
            :class="`font-theme @dark:bg-neutral-900 inline w-fit rounded-tl-md rounded-tr-md bg-white bg-opacity-60 px-2 py-1 text-3xl font-bold tracking-wide tracking-wide backdrop-blur-sm ${
              titleLonger() > 0 ? 'rounded-br-md' : ''
            }`"
          >
            {{ item.title }}
          </h3>
          <div
            v-if="titleLonger() <= -6"
            :class="`clip @dark:bg-neutral-900 h-1.5 w-1.5 -scale-y-100 bg-white bg-opacity-60 backdrop-blur-sm`"
          ></div>
        </div>

        <div class="flex items-start">
          <span
            ref="subtitle"
            :class="`@dark:text-neutral-300 @dark:bg-neutral-900 font-lg inline w-fit rounded-bl-md rounded-br-md bg-white bg-opacity-60 px-2 py-1 text-xs font-bold tracking-wide text-neutral-700 backdrop-blur-sm ${
              titleLonger() > 0 ? '' : 'rounded-tr-md'
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

          <div
            v-if="titleLonger() >= 6"
            :class="`clip @dark:bg-neutral-900 h-1.5 w-1.5 bg-white bg-opacity-60 backdrop-blur-sm`"
          ></div>
        </div>
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

    lazy: {
      type: Boolean as PropType<boolean>,
      default: true,
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

    const titleLonger = (): number => {
      if (title.value && subtitle.value) {
        console.log(title.value.offsetWidth - subtitle.value.offsetWidth)
        return title.value.offsetWidth - subtitle.value.offsetWidth
      }
      return -1
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

<style>
.clip {
  clip-path: path('m6,0H0v6h0C0,2.69,2.69,0,6,0Z');
}
</style>
