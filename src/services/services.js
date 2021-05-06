const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: data,
  })

  return await res.json()
}

const getContent = async (url) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  }

  return await res.json()
}

export {postData, getContent}
