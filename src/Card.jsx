import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Card = ({id, title, image, precio, profesor}) => (
    
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
        </Link>
      </div>
      <div className="card__data  s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
         <div classname="s-main-center">
           {`prof.: ${profesor}`}
          <a classname="button--ghost-alert button--tiny" href="#">${precio}</a>
        </div>
      </div>
    </article>
    
)

Card.propTypes = {
  title : PropTypes.string,
  image : PropTypes.string,
  precio : PropTypes.string,
  profesor : PropTypes.string
}

Card.defaultProps = {
  title : "No hay titulo",
  image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJmmwwVrOF1SI-S6vshalEahC-ECom6tzHVPYol1GaQjs90cjn",
  precio : "--",
  profesor : ""
}

export default Card;