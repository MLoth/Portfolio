<template>
  <div class="mx-6 py-6 sm:ml-6 sm:mr-6 sm:py-12">
    <header
      class="align-start mx-auto flex max-w-7xl flex-col justify-start md:flex-row md:items-center md:justify-between"
    >
      <div class="flex justify-between">
        <NuxtLink
          to="/"
          class="logo @dark:text-white @dark:hover:bg-neutral-800 z-30 -ml-3 flex items-center rounded-full p-3 text-neutral-900 ring-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring"
        >
          <h1>
            <LogoIcon class="h-8" />
          </h1>
        </NuxtLink>

        <button
          v-show="menuAvailable"
          class="z-30 rounded-full p-4 ring-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring"
          @click="
            () => {
              toggle()
              showContainer = true
            }
          "
        >
          <MenuIcon
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
          class="z-20 flex md:max-h-none md:w-auto md:items-center"
        >
          <nav class="flex w-full md:items-center">
            <ul
              class="items-between font-theme @dark:text-white flex w-full flex-col text-4xl font-semibold tracking-wide text-neutral-900 md:flex-row md:justify-between md:gap-6 md:text-sm"
            >
              <li>
                <NuxtLink
                  class="@dark:hover:text-white block w-full rounded-full px-6 py-3 ring-neutral-800 focus-visible:outline-none focus-visible:ring"
                  to="/"
                >
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :class="`@dark:hover:text-white block w-full rounded-full px-6 py-3 ring-neutral-800 focus-visible:outline-none focus-visible:ring ${
                    blogActive ? 'opacity-20' : ''
                  }`"
                  to="/blog"
                >
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :class="`@dark:hover:text-white block w-full rounded-full px-6 py-3 ring-neutral-800 focus-visible:outline-none focus-visible:ring ${
                    projectActive ? 'opacity-20' : ''
                  }`"
                  to="/projects"
                >
                  Projects
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="@dark:hover:text-white block w-full whitespace-nowrap rounded-full px-6 py-3 ring-neutral-800 focus-visible:outline-none focus-visible:ring"
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
          class="@dark:bg-white transition-scale duration-400 pointer-events-none absolute right-3 top-9 z-50 h-24 w-24 overflow-hidden rounded-full bg-white mix-blend-difference ease-in-out"
          @transitionend="circleShrank"
        ></div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import type { Ref } from 'vue'
import { MenuIcon } from 'lucide-vue-next'

export default {
  components: {
    MenuIcon,
  },

  setup() {
    const { width, height } = useWindowSize()
    const { open, menuAvailable, toggle } = useHamburgerMenu(width)
    const { currentRoute } = useRouter()
    const blogActive = ref<boolean>(
      currentRoute.value.fullPath.includes('/blog'),
    )
    const projectActive = ref<boolean>(
      currentRoute.value.fullPath.includes('/projects'),
    )

    watch(currentRoute, () => {
      // Custom since Nuxt & content don't play well together
      blogActive.value = currentRoute.value.fullPath.includes('blog')
      projectActive.value = currentRoute.value.fullPath.includes('project')
    })

    // This property only has a visual effect, it would be better to use 'open' instead
    const showContainer: Ref<boolean> = ref(false)
    const scale: Ref<number> = ref(0)

    watch([width, height], () => {
      if (!width.value || !height.value) return

      scale.value = Math.max(width.value, height.value) / 40
    })

    const circleShrank = () => {
      if (open.value) return
      showContainer.value = false
    }

    return {
      menuAvailable,
      open,
      scale,
      showContainer,

      blogActive,
      projectActive,

      toggle,
      circleShrank,
    }
  },
}
</script>

<style scoped>
a.router-link-active:not(.logo) {
  opacity: 0.3;
}
</style>
