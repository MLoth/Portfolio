import { onMounted, onUnmounted, ref } from 'vue'

const height = ref<number>()
const width = ref<number>()

export default function useWindowSize() {
  const resize = () => {
    height.value = window.innerHeight
    width.value = window.innerWidth
  }

  onMounted(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })

  return { height, width }
}
