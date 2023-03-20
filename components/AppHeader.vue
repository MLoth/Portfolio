<template>
  <div class="mx-6 py-6 sm:mr-6 sm:ml-6 sm:py-12">
    <header
      class="align-start mx-auto flex max-w-6xl flex-col justify-start md:flex-row md:items-center md:justify-between"
    >
      <div class="flex justify-between">
        <NuxtLink
          to="/"
          class="logo @dark:text-white z-30 rounded-lg text-neutral-900 ring-neutral-800 focus-visible:outline-none focus-visible:ring"
        >
          <h1 class="py-6">
            <svg class="h-6 fill-current md:h-8" viewBox="0 0 255.12 59.72">
              <path
                d="M67.8,18.82c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c3.08,2.98,6.27,6.06,9.43,9.13l0,0 c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c8.66,8.38,19.22,18.6,25.56,24.74c4.45,4.31,11.67,4.31,16.12,0 c0,0,0,0,0,0c4.45-4.31,4.45-11.29,0-15.6l0,0c-4.45-4.31-4.45-11.29,0-15.6v0c4.45-4.31,11.67-4.31,16.12,0l0,0 c13.35,12.92,13.35,33.87,0,46.79l0,0c-6.41,6.21-15.11,9.69-24.18,9.69c-9.07,0-17.76-3.49-24.18-9.69 c-8.66-8.38-19.22-18.6-25.56-24.74c-4.45-4.31-11.67-4.31-16.12,0c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6c0,0,0,0,0,0 c4.45,4.31,4.45,11.29,0,15.6l0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23l0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0c2.14,2.07,3.34,4.87,3.34,7.8 c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0 c2.14,2.07,3.34,4.87,3.34,7.8c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c0,0,0,0,0,0 c-13.35-12.92-13.35-33.87,0-46.79l0,0c13.35-12.92,35-12.92,48.35,0C61.45,12.67,64.63,15.76,67.8,18.82"
              />
            </svg>
          </h1>
        </NuxtLink>

        <button
          v-if="menuAvailable"
          class="z-30 rounded-full p-4 ring-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring"
          @click="
            () => {
              toggle()
              showContainer = true
            }
          "
        >
          <Menu
            class="@dark:text-neutral-50 @dark:text-white h-10 w-10 fill-current stroke-current stroke-2 text-neutral-900"
          />
        </button>
      </div>

      <!-- To keep track of the fullscreen, easy to cut the growing circle -->
      <div
        :class="`${
          showContainer && menuAvailable
            ? 'clip-0 absolute -ml-6 -mt-12 h-screen w-screen overflow-hidden'
            : ''
        }`"
      >
        <div
          :class="{
            'max-h-0 overflow-hidden opacity-0':
              menuAvailable && !showContainer,
            '@dark:bg-neutral-300 clip-0 pt-42 absolute h-screen max-h-screen w-screen bg-white opacity-100':
              menuAvailable && showContainer,
            'opacity-100': !menuAvailable,
          }"
          class="md:max-h-none z-10 flex md:w-auto md:items-center"
        >
          <nav class="flex w-full md:items-center">
            <ul
              class="items-between font-theme @dark:text-white -mr-6 flex w-full flex-col text-4xl font-bold tracking-wide text-neutral-900 md:flex-row md:justify-between md:gap-6 md:text-sm"
            >
              <li>
                <NuxtLink
                  class="block w-full rounded-lg py-3 px-6 ring-neutral-800 hover:bg-neutral-100 hover:opacity-60 focus-visible:outline-none focus-visible:ring"
                  to="/"
                >
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="block w-full rounded-lg py-3 px-6 ring-neutral-800 hover:bg-neutral-100 hover:opacity-60 focus-visible:outline-none focus-visible:ring"
                  to="/blog"
                >
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="block w-full rounded-lg py-3 px-6 ring-neutral-800 hover:bg-neutral-100 hover:opacity-60 focus-visible:outline-none focus-visible:ring"
                  to="/projects"
                >
                  Projects
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="block w-full whitespace-nowrap rounded-lg py-3 px-6 ring-neutral-800 hover:bg-neutral-100 hover:opacity-60 focus-visible:outline-none focus-visible:ring"
                  to="/about"
                >
                  About me
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div
          :style="[
            open && menuAvailable
              ? { transform: `scale(${scale})` }
              : { transform: `scale(0)` },
          ]"
          :class="`${open && menuAvailable ? `` : 'scale-0'}`"
          class="@dark:bg-black transition-scale duration-250 pointer-events-none absolute top-9 right-3 z-50 h-24 w-24 overflow-hidden rounded-full bg-white mix-blend-difference ease-in-out"
          @transitionend="
            (payload) => {
              circleShrank(payload)
            }
          "
        ></div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Ref } from 'vue'
import { Menu } from 'lucide-vue-next'

export default {
  components: {
    Menu,
  },

  setup() {
    const { width, height } = useWindowSize()
    const { open, menuAvailable, toggle } = useHamburgerMenu(width)
    // This property only has a visual effect, it would be better to use 'open' instead
    const showContainer: Ref<boolean> = ref(false)
    const scale: Ref<number> = ref(0)

    watch([width, height], () => {
      if (!width.value || !height.value) return

      scale.value = Math.max(width.value, height.value) / 40
    })

    const circleShrank = (p: any) => {
      if (open.value) return
      showContainer.value = false
    }

    return {
      menuAvailable,
      open,
      scale,
      showContainer,

      toggle,
      circleShrank,
    }
  },
}
</script>

<style scoped>
a.router-link-active:not(.logo) {
  opacity: 0.2;
}
</style>
