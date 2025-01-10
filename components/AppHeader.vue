<template>
  <div class="py-6">
    <div class="px-6">
      <header
        class="align-start relative z-50 mx-auto flex max-w-screen-2xl flex-col justify-start text-white mix-blend-difference md:flex-row md:items-center md:justify-between"
      >
        <div class="flex justify-between">
          <NuxtLink
            to="/"
            class="logo @dark:hover:bg-neutral-800 z-30 -ml-3 flex items-center rounded-full p-3 ring-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring"
          >
            <h1>
              <LogoIcon class="h-7" />
            </h1>
          </NuxtLink>

          <MenuTrigger
            :menu-available="menuAvailable"
            @toggle-menu="toggleMenu"
          />
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
            <MenuContent>
              <MenuItem link="/" text="Home" />
              <MenuItem link="/blog" text="Blog" :blog-active="blogActive" />
              <MenuItem link="/projects" text="Projects" />
              <MenuItem link="/about" text="About me" />
            </MenuContent>
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
          />
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
export default {
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
    const showContainer = ref<boolean>(false)
    const scale = ref<number>(0)

    watch([width, height], () => {
      if (!width.value || !height.value) return

      scale.value = Math.max(width.value, height.value) / 40
    })

    const circleShrank = () => {
      if (open.value) return
      showContainer.value = false
    }

    const toggleMenu = () => {
      toggle()
      showContainer.value = true
    }

    return {
      menuAvailable,
      open,
      scale,
      showContainer,

      blogActive,
      projectActive,

      toggle,
      toggleMenu,
      circleShrank,
    }
  },
}
</script>
