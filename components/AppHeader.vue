<template>
  <div class="mx-6 py-6 sm:py-12 sm:mr-6 sm:ml-6">
    <header
      class="align-start mx-auto flex max-w-6xl flex-col justify-start md:flex-row md:items-center md:justify-between"
    >
      <div class="flex justify-between">
        <NuxtLink
          class="logo focus-visible:outline-none rounded-lg ring-neutral-800 focus-visible:ring z-30 text-neutral-900 @dark:text-white"
          to="/"
        >
          <h1 class="py-6">
            <svg class="h-6 md:h-8 fill-current" viewBox="0 0 255.12 59.72">
              <path
                d="M67.8,18.82c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c3.08,2.98,6.27,6.06,9.43,9.13l0,0 c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c8.66,8.38,19.22,18.6,25.56,24.74c4.45,4.31,11.67,4.31,16.12,0 c0,0,0,0,0,0c4.45-4.31,4.45-11.29,0-15.6l0,0c-4.45-4.31-4.45-11.29,0-15.6v0c4.45-4.31,11.67-4.31,16.12,0l0,0 c13.35,12.92,13.35,33.87,0,46.79l0,0c-6.41,6.21-15.11,9.69-24.18,9.69c-9.07,0-17.76-3.49-24.18-9.69 c-8.66-8.38-19.22-18.6-25.56-24.74c-4.45-4.31-11.67-4.31-16.12,0c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6c0,0,0,0,0,0 c4.45,4.31,4.45,11.29,0,15.6l0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23l0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0c2.14,2.07,3.34,4.87,3.34,7.8 c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0 c2.14,2.07,3.34,4.87,3.34,7.8c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c0,0,0,0,0,0 c-13.35-12.92-13.35-33.87,0-46.79l0,0c13.35-12.92,35-12.92,48.35,0C61.45,12.67,64.63,15.76,67.8,18.82"
              />
            </svg>
          </h1>
        </NuxtLink>

        <button
          v-if="menuAvailable"
          class="focus-visible:outline-none p-4 ring-neutral-800 focus-visible:ring z-30 hover:bg-neutral-50 rounded-full"
          @click="
            () => {
              toggle()
              showContainer = true
            }
          "
        >
          <Menu
            class="h-10 w-10 fill-current stroke-current stroke-2 @dark:text-neutral-50 text-neutral-900 @dark:text-white"
          />
        </button>
      </div>

      <!-- To keep track of the fullscreen, easy to cut the growing circle -->
      <div
        :class="`${
          showContainer && menuAvailable
            ? 'overflow-hidden absolute clip-0 w-screen h-screen -ml-6 -mt-12'
            : ''
        }`"
      >
        <div
          :class="{
            'opacity-0 max-h-0 overflow-hidden':
              menuAvailable && !showContainer,
            'max-h-screen bg-white w-screen @dark:bg-neutral-300 h-screen absolute clip-0 pt-42 opacity-100':
              menuAvailable && showContainer,
            'opacity-100': !menuAvailable,
          }"
          class="flex md:items-center md:w-auto z-10 md:max-h-none"
        >
          <nav class="w-full flex md:items-center">
            <ul
              class="w-full flex flex-col items-between md:flex-row md:gap-6 md:justify-between font-theme font-semibold tracking-wide md:text-sm text-4xl text-neutral-900 @dark:text-white"
            >
              <li>
                <NuxtLink
                  class="focus-visible:outline-none block w-full rounded-lg py-6 ring-neutral-800 hover:opacity-20 focus-visible:ring px-6"
                  to="/"
                >
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="focus-visible:outline-none block w-full rounded-lg py-6 ring-neutral-800 hover:opacity-20 focus-visible:ring px-6"
                  to="/blog"
                >
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="focus-visible:outline-none block w-full rounded-lg py-6 ring-neutral-800 hover:opacity-20 focus-visible:ring px-6"
                  to="/projects"
                >
                  Projects
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="focus-visible:outline-none block w-full rounded-lg py-6 ring-neutral-800 hover:opacity-20 focus-visible:ring pl-6"
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
          class="absolute top-9 right-3 bg-white @dark:bg-black overflow-hidden w-24 h-24 rounded-full ease-in-out z-50 pointer-events-none mix-blend-difference transition-scale duration-250"
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
import { Menu } from 'lucide-vue-next'
import { Ref } from 'vue'

export default {
  components: {
    Menu,
  },

  setup() {
    const { width, height } = useWindowSize()
    const { open, menuAvailable, toggle } = useHamburgerMenu(width)
    // This property only has a visual effect, it would be better to use 'open' instead
    const showContainer: Ref<boolean> = ref(false)
    const scale: Ref<number> = ref()

    watch([width, height], () => {
      if (!width.value || !height.value) return

      scale.value = Math.max(width.value, height.value) / 40
    })

    const circleShrank = (p) => {
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
  opacity: 0.1;
}
</style>
