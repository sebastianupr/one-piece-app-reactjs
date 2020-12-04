import React from 'react'
import NavBar from '../components/NavBar'
import ListOfCharacters from './../components/ListOfCharacters'

export default function Home () {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <ListOfCharacters/>
      </div>
    </div>
  )
}
