<template>
  <div>
    <div class="max-w-7xl mx-auto mt-6 mb-12">
      <HeroText>"Make cool shit!"</HeroText>
    </div>

    <NuxtLink
      class="
        block
        max-w-7xl
        px-12
        py-24
        mx-auto
        bg-gray-900
        text-white
        rounded-lg
        focus:outline-none focus:ring
        ring-gray-800
        overflow-hidden
      "
      to="/about"
    >
      <div class="w-full flex items-center justify-between">
        <h1
          class="
            block
            relative
            text-3xl
            font-geomanist font-bold
            md:text-5xl
            leading-tight
          "
        >
          <span
            class="
              absolute
              opacity-10
              text-9xl
              w-full
              transform
              -translate-y-20
            "
            >Martijn&nbsp;Loth</span
          ><span class="block">Fullstack developer</span
          ><span class="block">regio Gent & Kortrijk</span>
        </h1>

        <img
          src="~/assets/images/profile-test.png"
          class="-mb-24 -mt-12 transform -scale-x-100"
          alt=""
        />
        <!-- <div class="my-8 js-rotate-holder">
          <h2
            class="absolute w-full font-geomanist bg-gray-900 text-3xl js-rotate-front"
          >
            <span class="mr-2" aria-label="Les" role="img"> 👨🏼‍🎓 </span>
            Teacher
          </h2>
          <h2
            class="absolute w-full font-geomanist bg-gray-900 text-3xl js-rotate-top"
          >
            <span class="mr-2" aria-label="Freelance" role="img"> 🤝 </span>
            Freelancer
          </h2>
          <h2
            class="absolute w-full font-geomanist bg-gray-900 text-3xl js-rotate-back"
          >
            <span class="mr-2" aria-label="Laptop work" role="img"> 👨🏻‍💻 </span>
            Fullstack Developer
          </h2>
          <h2
            class="absolute w-full font-geomanist bg-gray-900 text-3xl js-rotate-bottom"
          >
            <span class="mr-2" aria-label="Boom" role="img"> 🌳 </span>
            Nature lover
          </h2>
        </div> -->
      </div>
    </NuxtLink>

    <div class="mx-auto max-w-7xl my-24">
      <div class="rounded-lg p-12 bg-white">
        <NuxtLink
          class="
            font-geomanist font-bold
            text-4xl
            hover:opacity-50
            rounded-lg
            focus:outline-none focus:ring
            ring-gray-800
          "
          to="/projects"
          >Projects</NuxtLink
        >
        <!-- <p class="opacity-50 mb-3">
          A selection from some stuff I loved working on.
        </p> -->

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
          <NuxtLink
            v-for="project of projects.data"
            :key="project.slug"
            class="
              flex flex-col
              bg-gray-100
              p-6
              overflow-hidden
              rounded-lg
              focus:outline-none focus:ring
              ring-gray-800
            "
            :to="`/projects/${project.slug}`"
          >
            <div class="flex text-sm text-gray-400 my-1">
              <span
                v-for="(category, index) of project.categories"
                :key="category"
                :class="`${index > 0 ? 'ml-2' : ''}`"
                >{{ category }}</span
              >
            </div>
            <h3 class="font-geomanist font-bold text-xl">
              {{ project.title }}
            </h3>

            <img
              class="-mb-6 transform translate-x-6"
              :src="`/images/${project.logo}`"
              :alt="`Logo for ${project.title}`"
            />
          </NuxtLink>

          <!-- <NuxtLink
            class="flex flex-col rounded-lg bg-gray-50 p-6 overflow-hidden ml-3"
            to="/"
          >
            <div class="flex text-sm text-gray-400 my-1">
              <span class="">dev</span>
              <span class="ml-2">design</span>
            </div>
            <h3 class="font-geomanist font-bold text-xl">Dimitra Esthetica</h3>

            <img
              class="transform translate-y-6 translate-x-6 mt-auto min-w-full"
              src="~/assets/images/dimitra-project.png"
              alt=""
            />
          </NuxtLink>

          <NuxtLink
            class="flex flex-col rounded-lg bg-gray-50 p-6 overflow-hidden ml-3"
            to="/"
          >
            <div class="flex text-sm text-gray-400 my-1">
              <span class="">dev</span>
              <span class="ml-2">design</span>
            </div>
            <h3 class="font-geomanist font-bold text-xl">Cardsly</h3>

            <img
              class="transform translate-y-6 translate-x-6"
              src="~/assets/images/cardsly-project.png"
              alt=""
            />
          </NuxtLink> -->

          <!-- <NuxtLink
            class="flex flex-col rounded-lg bg-gray-50 p-6 overflow-hidden ml-3"
            to="/"
          >
            <div class="flex text-sm text-gray-400 my-1">
              <span class="">dev</span>
              <span class="ml-2">design</span>
            </div>
            <h3 class="font-geomanist font-bold text-xl">UGent</h3>
          </NuxtLink> -->
        </div>

        <!-- <NuxtLink
          class="
            inline-block
            font-geomanist font-semibold
            bg-gray-200
            text-gray-700
            p-3
            rounded-lg
            hover:bg-gray-300
          "
          to="/projects"
        >
          Check all 8 projects
        </NuxtLink> -->
      </div>
    </div>

    <div class="my-24">
      <div class="max-w-7xl mx-auto lg:pl-12">
        <h1 class="font-geomanist font-bold text-4xl mb-4">
          Freelance webdeveloper
        </h1>
        <div class="max-w-3xl mb-12 text-xl">
          <p class="">
            Als <strong>freelance web consultant</strong> kan ik helpen bij
            diverse projecten. Na een verleden in een design en marketing
            achtergrond, werk ik de laatste jaren met een eindeloze passie
            webprojecten uit.
          </p>
          <p class="mt-4">
            De sleutel om elk project tot een goed einde te brengen is een goede
            visie op de noden van de klant enerzijds en anderzijds een
            <strong>heldere communicatie</strong> met de opdrachtgever.
            Daarnaast neem ik bij elk project ook mijn persoonlijk netwerk van
            professionals mee. Als er specifieke onderdelen zijn die niet mijn
            vakgebied zijn, kunnen we steeds beroep doen op meer
            gespecialiseerde mensen.
          </p>
          <p class="mt-4">
            Heeft u <strong>nood aan zo'n samenwerking</strong>? We bekijken
            samen of we het kunnen vinden met elkaar en wat er nodig is.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const projects = reactive<any>({ data: null });

    const getProjects = async () => {
      projects.data = await $content('projects')
        .sortBy('createdAt')
        .limit(4)
        .fetch();

      console.log(projects.data);
    };

    getProjects();

    return {
      projects,
    };
  },
});
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotateX(0deg);
  }

  12.5% {
    transform: rotateX(0deg);
  }

  25% {
    transform: rotateX(90deg);
  }

  37.5% {
    transform: rotateX(90deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  62.5% {
    transform: rotateX(180deg);
  }

  75% {
    transform: rotateX(270deg);
  }

  87.5% {
    transform: rotateX(270deg);
  }

  100% {
    transform: rotateX(360deg);
  }
}

.js-rotate-holder {
  position: relative;
  min-height: 40px;
  transform-style: preserve-3d;
  transform: rotateX(0deg);
  transition: transform;
  animation: rotate 7s ease-in-out infinite;
  animation-fill-mode: forwards;
}

.js-rotate-front {
  transform: translateZ(14px) rotateY(0deg);
}

.js-rotate-top {
  transform: rotateX(90deg) translateZ(-14px) rotateX(180deg);
}

.js-rotate-back {
  transform: translateZ(-14px) rotateX(180deg);
}

.js-rotate-bottom {
  transform: rotateX(-90deg) translateZ(-14px) rotateX(180deg);
}
</style>
