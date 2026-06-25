import PropTypes from 'prop-types'
import '../styles/FiltroEspecie.css'

const FiltroEspecie = ({ especieSeleccionada, onEspecieChange }) => {
  const especies = ['Todas', 'Perro', 'Gato', 'Otro']

  return (
    <div className="filtro-especie-container">
      <label className="filtro-label">Filtrar por especie:</label>
      <div className="filtro-botones">
        {especies.map((especie) => (
          <button
            key={especie}
            className={`filtro-btn ${especieSeleccionada === especie ? 'activo' : ''}`}
            onClick={() => onEspecieChange(especie)}
            aria-pressed={especieSeleccionada === especie}
          >
            {especie === 'Todas' && '🐾'}
            {especie === 'Perro' && '🐕'}
            {especie === 'Gato' && '🐱'}
            {especie === 'Otro' && '🦎'}
            <span className="especie-text">{especie}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

FiltroEspecie.propTypes = {
  especieSeleccionada: PropTypes.oneOf(['Todas', 'Perro', 'Gato', 'Otro']),
  onEspecieChange: PropTypes.func.isRequired
}

FiltroEspecie.defaultProps = {
  especieSeleccionada: 'Todas'
}

export default FiltroEspecie
