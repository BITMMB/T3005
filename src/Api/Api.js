async function getResourse(url) {
  const res = await fetch(url)
  return res.json()
}

export default getResourse
