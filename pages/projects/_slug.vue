<template>
  <div>
    <div v-if="project.data" class="max-w-7xl mx-auto">
      <HeroText>
        {{ project.data[0].title }}
      </HeroText>
      <p class="max-w-3xl mb-12 text-xl my-6 sm:px-12 -mt-6">
        {{ project.data[0].description }}
      </p>

      <div>
        <NuxtContent :document="project.data[0]" />
      </div>

      <Cloud
        v-if="project.data[0]['show-cloud']"
        :tags="project.data[0]['tags']"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  useContext,
  useRoute,
} from '@nuxtjs/composition-api';

import Cloud from '~/components/Cloud.vue';

export default defineComponent({
  components: { Cloud },

  setup() {
    const { $content } = useContext();
    const project = reactive<any>({ data: null });
    const route = useRoute();
    const slugParam = computed(() => route.value.params.slug);
    const getProject = async () => {
      project.data = await $content('projects')
        .where({ slug: slugParam.value })
        .fetch();
    };
    getProject();
    return {
      project,
    };
  },

  head: {},
});
</script>
