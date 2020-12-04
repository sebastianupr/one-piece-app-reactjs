import React from 'react'
import { Link } from 'react-router-dom'

export default function Character({ character }) {
  const { id, name, image, description, occupation, reward, fruit_name } = character

  return (
    <Link to={`character/${id}`}>
      <div class="card z-depth-3 pointer">
        <div class="card-image" style={{ padding: '5px' }}>
          <img className="img-card" src={image} alt={name} />
        </div>
        <div class="card-content content">
          <div className="row">
            <div className="col s12">
              <h5><strong>{name}</strong></h5>
              <h6><strong>Occupation: </strong>{occupation}</h6>
              <h6><strong>Reward: </strong>{reward}</h6>
              <h6><strong>Fruit: </strong>
                {fruit_name === 'None' ? 'It has no fruit' : fruit_name}
              </h6>
            </div>
            <div className="col s12 margin">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
