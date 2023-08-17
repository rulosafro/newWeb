exports.fetchData = (url) => {
  // return fetch(url, { cache: 'no-store', next: { revalidate: 600 } })
  console.log('Fetchind data 📸 ')
  return fetch(url, { next: { revalidate: 600 } })
    .then(res => res.json())
}
