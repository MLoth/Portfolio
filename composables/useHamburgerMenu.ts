const open = ref<boolean>(false)
const menuAvailable = ref<boolean>(true)
const mobileMenuBreakpoint = 768

export default (width: Ref<number | undefined>) => {
  const route = useRouter()

  const toggle = (to?: boolean) => {
    // Gently scroll to top whenever the menu is toggled
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    if (to !== undefined) {
      open.value = to
      return
    }
    open.value = !open.value
  }

  // Check the width of the window and set the menu to be available or not
  watch(width, () => {
    if (width.value && width.value > mobileMenuBreakpoint) {
      menuAvailable.value = false
      open.value = true
    } else {
      menuAvailable.value = true
      open.value = false
    }
  })

  // Close the menu when the route changes
  watch(route.currentRoute, () => {
    open.value = false
  })

  return {
    menuAvailable,
    open,

    toggle,
  }
}
