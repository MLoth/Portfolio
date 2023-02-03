const token =
  'pk.eyJ1IjoibWxvdGgiLCJhIjoiY2puaDYxdTJoMGFsOTNrb3NjaHo1ZHRwMiJ9.6eiqy7TyeFTKbYA7B1ef8A'

export default () => {
  const getImage = async (
    lon: number,
    lat: number,
    zoom: number,
  ): Promise<string> => {
    const res = await fetch(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lon},${lat},${zoom}/600x600?access_token=${token}`,
    )

    return res.url
  }

  return {
    getImage,
  }
}
