import '../stylesheets/User.css'

export const User = ({image, nombre, estado}) => {

  return (

    <div className="character-card">
      <div className="card-image"> 
        <img src={image} alt="" />
        <div className="placeholder-image">
          Imagen del<br />personaje
        </div>
      </div>

      <div className="card-content">
        <h1 className="character-name" > {nombre}</h1>

        <div className="status-tag">
          <span className="status-dot"> {estado}</span>
          <span></span>
        </div>

        <div className="info-section">
          <div className="info-label">Last known location:</div>
          <div className="info-value"></div>
        </div>

        <div className="info-section">
          <div className="info-label">First seen in:</div>
          <div className="info-value"></div>
        </div>
      </div>
    </div>
  )
}
