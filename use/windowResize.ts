import { onMounted, onUnmounted, ref } from '@nuxtjs/composition-api';

export default function useWindowResize() {
  const height = ref<number>();
  const width = ref<number>();

  const resize = () => {
    height.value = window.innerHeight;
    width.value = window.innerWidth;
  };

  onMounted(() => {
    resize();
    window.addEventListener('resize', resize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resize);
  });

  return { height, width };
}
