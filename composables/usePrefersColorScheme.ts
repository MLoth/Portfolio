const theme = ref('light')

if (process.client) {
  const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')
  darkModePreference.addEventListener('change', (e) => {
    console.log('e.matches', e.matches)

    e.matches ? (theme.value = 'dark') : (theme.value = 'light')
  })

  if (darkModePreference.matches) {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
}

export default () => {
  return {
    theme,
  }
}
