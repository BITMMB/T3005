async function getResourse(url) {
  let res
  await fetch(url)
    .then((r) => {
      res = r.json()
    })

    .catch((e) => {
      console.log(e)
    })
  return res
}

export default getResourse
