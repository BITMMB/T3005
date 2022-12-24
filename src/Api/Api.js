// https://aviasales-test-api.kata.academy/

async function getResourse(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Bad connection ${url}`)
  }
  //   console.log(res.json())
  return res.json()
}

async function getId() {
  const res = await getResourse('https://aviasales-test-api.kata.academy/search')

  console.log(res.searchId)
}

export default getResourse
