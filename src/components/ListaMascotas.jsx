import PropTypes from 'prop-types'
import MascotaCard from './MascotaCard.jsx'

const ListaMascotas = ({ mascotas }) => {
  return (
    <div className="mascotas-grid">
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
          adopcionUrgente={mascota.adopcionUrgente}
        />
      ))}
    </div>
  )
}

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string,
      edad: PropTypes.number,
      especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
      descripcion: PropTypes.string,
      caracteristicas: PropTypes.arrayOf(PropTypes.string),
      adopcionUrgente: PropTypes.bool
    })
  ).isRequired
}

ListaMascotas.defaultProps = {
  mascotas: []
}

export default ListaMascotas
