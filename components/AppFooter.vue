<template>
  <div class="mt-auto px-6 py-12 sm:pb-12 sm:pt-24">
    <footer class="mx-auto max-w-screen-2xl text-xs sm:flex sm:justify-between">
      <div class="">
        <div class="mb-4 flex font-semibold">
          <p class="">Martijn Loth</p>
          <p class="ml-6">&copy;&nbsp;{{ new Date().getFullYear() }}</p>
        </div>
        <p class="opacity-40">BE0730.723.962</p>
      </div>

      <LogoIcon
        class="my-6 h-4 fill-current text-neutral-300 md:absolute md:left-1/2 md:my-0 md:-translate-x-1/2 md:transform"
      />

      <aside class="mb-4 flex space-x-12 tracking-wide">
        <a
          href="https://www.linkedin.com/in/martijn-loth-83915b100/"
          class="block rounded-lg opacity-50 ring-neutral-800 hover:opacity-100 focus-visible:outline-none focus-visible:ring"
        >
          LinkedIn
        </a>
        <a
          href="https://dribbble.com/mloth"
          class="block rounded-lg opacity-50 ring-neutral-800 hover:opacity-100 focus-visible:outline-none focus-visible:ring"
        >
          Dribbble
        </a>
        <a
          href="https://github.com/MLoth"
          class="block rounded-lg opacity-50 ring-neutral-800 hover:opacity-100 focus-visible:outline-none focus-visible:ring"
        >
          Github
        </a>
      </aside>
    </footer>
  </div>
</template>
