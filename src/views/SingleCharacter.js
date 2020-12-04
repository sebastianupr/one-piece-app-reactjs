import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import getSingleCharacter from './../services/getSingleCharacter';
import NavBar from './../components/NavBar';
import Loader from '../components/Loader';

export default function SingleCharacter () {
  const [character, setCharacter] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    getSingleCharacter(id).then(setCharacter)
  }, [id])

  return (
    <>
      <NavBar/>
      {!character ? <Loader/>
      : <>
        <div className="container">
          <div className="row">
            <div className="col s12">
            <Link to='/' className="waves-effect blue darken-4 btn ">
              <i className="material-icons left">chevron_left</i>Back
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="center">
                <img
                  src={character.image}
                  alt={character.name}
                  className="img-responsive"
                  style={{margin: '0 auto'}}
                />
              </div>
            </div>
            <div className="col s12 m6">
              <div className="row" style={{paddingLeft: '15px'}}>
                <div className="col s12 l6">
                  <div className="left">
                    <h4 style={{margin: '0'}}><strong>{character.name}</strong></h4>
                    <h5><strong>Occupation: </strong>{character.occupation}</h5>
                    <h5><strong>Reward: </strong>{character.reward}</h5>
                    <h5><strong>Rank: </strong>{character.rank}</h5>
                    <h5><strong>Fruit: </strong>
                      {character.fruit_name === 'None' ? 'It has no fruit' : character.fruit_name}
                    </h5>
                    <h5><strong>Fruit type: </strong>
                      {character.fruit_type === 'None' ? 'It has no fruit' : character.fruit_name}
                    </h5>
                    <h5><strong>Origin: </strong>
                      {character.origin}
                    </h5>
                  </div>
                </div>
                <div className="col s12 l6">
                  <div className="left">
                    <h6><strong>{character.description}</strong></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      }
    </>
  )
}
