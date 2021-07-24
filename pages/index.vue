<template>
  <div>
    <div class="min-h-1/2 px-5 py-5">
      <div
        class="
          max-w-7xl
          px-12
          py-12
          mx-auto
          rounded-lg
          bg-gray-900
          text-gray-50
        "
      >
        <div class="w-full flex items-center justify-between">
          <h1
            class="
              block
              text-3xl
              font-geomanist font-bold
              md:text-5xl
              leading-tight
            "
          >
            Fullstack developer<span class="block">regio Gent / Kortrijk</span>
          </h1>

          <img
            src="~/assets/images/profile-test.png"
            class="-mb-12 -mt-12 transform -scale-x-100"
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
      </div>
    </div>

    <div class="px-6 my-12">
      <div class="max-w-7xl mx-auto">
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
export default {};
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
