import React, { useEffect, useState } from 'react'
import Character from '../components/Character'
import getCharacters from '../services/getCharacters'
import Loader from '../components/Loader'

export default function ListOfCharacters () {
  const [characters, setCharacters] = useState(null)
  const [pag, setPag] = useState(1)

  useEffect(() => {
    getCharacters(pag).then(setCharacters)
  },[pag])

  const handleClick = pag => {
    setPag(pag)
  }

  const classByPag = num => {
    return pag === num ? "active blue darken-4" : "waves-effect"
  }

  if(!characters) return <Loader/>

  return (
    <>
      <div className="row" style={{marginBottom: '20px'}}>
        {characters.map(character => <div class="col s12 m6 l4 xl3"
          key={character.id}
        >
          <Character character={character} />
        </div>
        )}
      </div>
      <div className="paginator center">
        <ul className="pagination">
          <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
          <li className={classByPag(1)} onClick={() => handleClick(1)}><a href="#!">1</a></li>
          <li className={classByPag(2)} onClick={() => handleClick(2)}><a href="#!">2</a></li>
          <li className={classByPag(3)} onClick={() => handleClick(3)}><a href="#!">3</a></li>
          <li className="disabled"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
      </div>
    </>
  )
}
