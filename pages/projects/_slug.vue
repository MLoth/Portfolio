<template>
  <div>
    <div v-if="project.data" class="max-w-7xl mx-auto mt-6 mb-12">
      <HeroText>
        {{ project.data[0].title }}
      </HeroText>
      <p class="max-w-3xl mb-12 text-xl my-6 px-12">
        {{ project.data[0].description }}
      </p>

      <div>
        <NuxtContent :document="project.data[0]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  useContext,
  useMeta,
  useRoute,
} from '@nuxtjs/composition-api';

export default defineComponent({
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

    useMeta({ title: project.data?.title });

    return {
      project,
    };
  },

  head: {},
});
</script>
