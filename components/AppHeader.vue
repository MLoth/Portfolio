<template>
  <div class="px-6 py-8 sm:py-12">
    <header
      class="
        max-w-7xl
        mx-auto
        flex flex-col
        justify-start
        align-start
        md:flex-row md:items-center md:justify-between
        bg-white
        rounded-lg
        py-6
        sm:px-6
      "
    >
      <div class="flex justify-between">
        <NuxtLink
          class="rounded-lg focus:outline-none focus:ring ring-gray-800"
          to="/"
        >
          <h1 class="p-6">
            <svg
              class="h-8 fill-current text-gray-900"
              viewBox="0 0 255.12 59.72"
            >
              <path
                d="M67.8,18.82c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c3.08,2.98,6.27,6.06,9.43,9.13l0,0 c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c8.66,8.38,19.22,18.6,25.56,24.74c4.45,4.31,11.67,4.31,16.12,0 c0,0,0,0,0,0c4.45-4.31,4.45-11.29,0-15.6l0,0c-4.45-4.31-4.45-11.29,0-15.6v0c4.45-4.31,11.67-4.31,16.12,0l0,0 c13.35,12.92,13.35,33.87,0,46.79l0,0c-6.41,6.21-15.11,9.69-24.18,9.69c-9.07,0-17.76-3.49-24.18-9.69 c-8.66-8.38-19.22-18.6-25.56-24.74c-4.45-4.31-11.67-4.31-16.12,0c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6c0,0,0,0,0,0 c4.45,4.31,4.45,11.29,0,15.6l0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23l0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0c2.14,2.07,3.34,4.87,3.34,7.8 c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0 c2.14,2.07,3.34,4.87,3.34,7.8c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c0,0,0,0,0,0 c-13.35-12.92-13.35-33.87,0-46.79l0,0c13.35-12.92,35-12.92,48.35,0C61.45,12.67,64.63,15.76,67.8,18.82"
              />
            </svg>
          </h1>
        </NuxtLink>

        <button
          v-if="menuAvailable"
          class="p-4 rounded-lg focus:outline-none focus:ring ring-gray-800"
          @click="menuOpen = !menuOpen"
        >
          <svg
            class="fill-current text-gray-900 h-10 w-10 stroke-current stroke-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </div>

      <div
        :class="`${menuOpen ? 'max-h-32' : 'max-h-0'}`"
        class="
          flex
          items-center
          overflow-hidden
          transition-maxHeight
          ease-in-out
          sm:h-20
        "
      >
        <nav class="w-full">
          <ul class="flex justify-between">
            <!-- <li>
            <NuxtLink
              class="
                p-6
                font-geomanist
                text-xl
                font-semibold
                tracking-wide
                hover:opacity-50
              "
              to="/"
              >Blog</NuxtLink
            >
          </li> -->
            <li>
              <NuxtLink
                class="
                  p-3
                  sm:p-6
                  font-geomanist
                  text-lg
                  sm:text-xl
                  font-semibold
                  tracking-wide
                  rounded-lg
                  hover:opacity-20
                  focus:outline-none focus:ring
                  ring-gray-800
                "
                to="/"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="
                  p-3
                  sm:p-6
                  font-geomanist
                  text-lg
                  sm:text-xl
                  font-semibold
                  tracking-wide
                  rounded-lg
                  hover:opacity-20
                  focus:outline-none focus:ring
                  ring-gray-800
                "
                to="/projects"
                >Projects</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="
                  p-3
                  sm:p-6
                  font-geomanist
                  text-lg
                  sm:text-xl
                  font-semibold
                  tracking-wide
                  rounded-lg
                  hover:opacity-20
                  focus:outline-none focus:ring
                  ring-gray-800
                "
                to="/about"
                >About me</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api';
import { TailwindConfig } from 'tailwindcss/tailwind-config';

import useWindowResize from '../use/windowResize';
import useTheme from '../use/tailwindConfig';

export default defineComponent({
  setup() {
    const menuOpen = ref<boolean>(false);
    const menuAvailable = ref<boolean>(false);

    const { width } = useWindowResize();
    const theme: TailwindConfig = useTheme;

    watch(width, () => {
      if (
        width.value &&
        theme.theme.screens &&
        width.value >
          +theme.theme.screens?.md.substring(
            0,
            theme.theme.screens?.md.length - 2,
          )
      ) {
        menuAvailable.value = false;
        menuOpen.value = true;
      } else {
        menuAvailable.value = true;
        menuOpen.value = false;
      }
    });

    return {
      menuOpen,
      menuAvailable,
    };
  },
});
</script>
