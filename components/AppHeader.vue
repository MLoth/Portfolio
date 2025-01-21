<template>
  <div class="py-6">
    <div class="px-6">
      <header
        class="@dark:text-white mx-auto max-w-screen-2xl text-neutral-950"
      >
        <!-- @dark:text-white text-white -->
        <div class="flex justify-between">
          <NuxtLink
            to="/"
            :class="`${open && menuAvailable ? '' : '@dark:hover:bg-neutral-800 hover:bg-neutral-50'} logo relative z-40 -ml-3 flex items-center rounded-full p-3 ring-neutral-800 focus-visible:outline-none focus-visible:ring`"
          >
            <h1>
              <LogoIcon class="h-7" />
            </h1>
          </NuxtLink>

          <MenuTrigger
            :menu-available="menuAvailable"
            @toggle-menu="toggleMenu"
          />

          <MenuContent
            v-show="showMenuItems || !menuAvailable"
            class="absolute inset-0 z-40 py-32 md:relative md:top-0 md:py-0"
          >
            <MenuItem link="/" text="Home" />
            <MenuItem
              link="/blog"
              text="Blog"
              :blog-active="blogActive"
              :delay="50"
            />
            <MenuItem link="/projects" text="Projects" :delay="100" />
            <MenuItem link="/about" text="About me" :delay="150" />
          </MenuContent>
        </div>

        <!-- To keep track of the fullscreen, easy to cut the growing circle -->
        <!-- <div
          :class="`${
            showContainer && menuAvailable
              ? 'clip-0 absolute inset-0 z-30 overflow-hidden'
              : ''
          }`"
        /> -->
        <!-- :class="{
              'max-h-0 overflow-hidden opacity-0':
                menuAvailable && !showContainer,
              '@dark:bg-neutral-300 clip-0 absolute h-screen max-h-screen w-screen bg-white pt-24 opacity-100':
                menuAvailable && showContainer,
              'opacity-100': !menuAvailable,
            }" -->
        <!-- <div
            class="absolz-20 flex md:max-h-none md:w-auto md:items-center"
            :style="[
              open && menuAvailable
                ? { transform: `scale(${scale})` }
                : { transform: `scale(0)` },
            ]"
          >
          </div> -->

        <div>
          <div
            :style="[
              open && menuAvailable
                ? { transform: `scale(${scale})` }
                : { transform: `scale(0)` },
            ]"
            :class="`${open && menuAvailable ? `` : 'scale-0'}`"
            class="@dark:bg-black/90 transition-scale pointer-events-none absolute right-3 top-2 z-30 size-24 overflow-hidden rounded-full bg-white/90 backdrop-blur-lg duration-300 ease-in-out"
            @transitionend="circleShrank"
          />
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { width, height } = useWindowSize()
const { open, menuAvailable, toggle } = useHamburgerMenu(width)
const { currentRoute } = useRouter()
const blogActive = ref<boolean>(currentRoute.value.fullPath.includes('/blog'))
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
const showMenuItems = ref<boolean>(false)
const scale = ref<number>(0)

watch([width, height], () => {
  if (!width.value || !height.value) return

  scale.value = Math.max(width.value, height.value) / 40
  // Always close the menu when the screen is resized
  if (open.value) {
    toggle()
    showContainer.value = false
    showMenuItems.value = false
  }
})

const circleShrank = () => {
  if (open.value) {
    showMenuItems.value = true
    return
  }
  showContainer.value = false
  showMenuItems.value = false
}

const toggleMenu = () => {
  showMenuItems.value = false
  toggle()
  showContainer.value = true
}

// Prevent scrolling when the menu is open
watch([open, menuAvailable], () => {
  if (open.value && menuAvailable.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>
