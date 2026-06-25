import PropTypes from 'prop-types'
import '../styles/MascotaCard.css'

const MascotaCard = ({
  nombre,
  raza,
  edad,
  especie,
  descripcion,
  caracteristicas,
  adopcionUrgente
}) => {
  // Determinar clase CSS según especie
  const getSpecieClass = () => {
    switch (especie) {
      case 'Perro':
        return 'card-perro'
      case 'Gato':
        return 'card-gato'
      case 'Otro':
        return 'card-otro'
      default:
        return 'card-default'
    }
  }

  // Determinar etiqueta de especie
  const getSpecieLabel = () => {
    switch (especie) {
      case 'Perro':
        return '🐕'
      case 'Gato':
        return '🐱'
      case 'Otro':
        return '🐾'
      default:
        return '❓'
    }
  }

  return (
    <div className={`mascota-card ${getSpecieClass()}`}>
      {/* Encabezado con nombre y etiqueta de especie */}
      <div className="card-header">
        <h2 className="mascota-nombre">{nombre}</h2>
        <span className="especie-badge">
          {getSpecieLabel()} {especie}
        </span>
        {adopcionUrgente && (
          <span className="urgente-badge">¡Urgente!</span>
        )}
      </div>

      {/* Información básica */}
      <div className="card-info">
        <p className="info-item">
          <strong>Raza:</strong> <span>{raza}</span>
        </p>
        <p className="info-item">
          <strong>Edad:</strong> <span>{edad} año{edad !== 1 ? 's' : ''}</span>
        </p>
      </div>

      {/* Descripción */}
      <div className="card-description">
        <p>{descripcion}</p>
      </div>

      {/* Características */}
      {caracteristicas && caracteristicas.length > 0 && (
        <div className="card-characteristics">
          <strong>Características:</strong>
          <div className="tags">
            {caracteristicas.map((caracteristica, index) => (
              <span key={index} className="tag">
                {caracteristica}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

MascotaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  raza: PropTypes.string,
  edad: PropTypes.number,
  especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
  adopcionUrgente: PropTypes.bool
}

MascotaCard.defaultProps = {
  nombre: 'Mascota sin nombre',
  raza: 'Raza desconocida',
  edad: 0,
  especie: 'Otro',
  descripcion: 'Sin descripción disponible',
  caracteristicas: [],
  adopcionUrgente: false
}

export default MascotaCard
