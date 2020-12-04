import { API_URL } from './config'

export default function getSingleCharacter (id) {
  return fetch(`${API_URL}/character/${id}`)
    .then(data => data.json())
    .then(character => character)
    .catch(err => err)
}