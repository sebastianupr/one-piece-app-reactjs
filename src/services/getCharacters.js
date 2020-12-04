import { API_URL } from './config'

export default function getCharacters (page = 1) {
  let URL

  if(page !== 1){
    URL = `${API_URL}/characters/?page=${page}`
  }
  else URL = `${API_URL}/characters`

  return fetch(URL)
    .then(data => data.json())
    .then(characters => characters.results)
    .catch(err => err)
}