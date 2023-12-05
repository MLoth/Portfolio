const token =
  'pk.eyJ1IjoibWxvdGgiLCJhIjoiY2puaDYxdTJoMGFsOTNrb3NjaHo1ZHRwMiJ9.6eiqy7TyeFTKbYA7B1ef8A'

export interface StaticMaps {
  [theme: string]: string
}

export default () => {
  // const { theme } = usePrefersColorScheme()

  const getImage = async (
    lon: number,
    lat: number,
    zoom: number,
    // showMarker: boolean,
  ): Promise<StaticMaps> => {
    const res = await Promise.all([
      fetch(
        `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/${lon},${lat},${zoom}/320x320?access_token=${token}`,
      ),
      fetch(
        `https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/${lon},${lat},${zoom}/320x320?access_token=${token}`,
      ),
    ])

    return { light: res[0].url, dark: res[1].url }
  }

  return {
    getImage,
  }
}
