<template>
  <div>
    <div v-if="blogPost.data" class="mx-auto max-w-7xl">
      <HeroText>
        {{ blogPost.data[0].title }}
      </HeroText>
      <p class="my-6 mb-12 -mt-6 max-w-3xl px-12 text-xl">
        {{ blogPost.data[0].description }}
      </p>

      <div>
        <NuxtContent :document="blogPost.data[0]" />
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
  useRoute,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const blogPost = reactive<any>({ data: null });

    const route = useRoute();
    const dateParam = computed(() => route.value.params.date);

    const getBlogPost = async () => {
      console.log((blogPost.data = await $content('blog').fetch()));

      blogPost.data = await $content('blog')
        .where({ slug: dateParam.value })
        .fetch();

      console.log(blogPost.data);
    };

    getBlogPost();

    return {
      blogPost,
    };
  },

  head: {},
});
</script>
