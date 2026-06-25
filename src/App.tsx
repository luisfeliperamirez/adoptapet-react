import { useState } from 'react'
import './App.css'
import { mascotas } from './data/mascotas.js'
import ListaMascotas from './components/ListaMascotas.jsx'
import FiltroEspecie from './components/FiltroEspecie.jsx'

function App() {
  const [especieSeleccionada, setEspecieSeleccionada] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')
  
  console.log('Mascotas cargadas:', mascotas)

  // Validar y normalizar texto de búsqueda
  const normalizarBusqueda = (texto) => {
    return texto
      .trim() // Recorta espacios al inicio y final
      .substring(0, 50) // Limita a 50 caracteres
      .toLowerCase() // Convierte a minúsculas para búsqueda
  }

  const textoBusquedaNormalizado = normalizarBusqueda(busqueda)

  // Filtrar mascotas
  const mascotasFiltradas = mascotas.filter((mascota) => {
    // Filtro por especie
    const coincideEspecie =
      especieSeleccionada === 'Todas' || mascota.especie === especieSeleccionada

    // Filtro por nombre
    const coincideBusqueda =
      textoBusquedaNormalizado === '' ||
      mascota.nombre.toLowerCase().includes(textoBusquedaNormalizado)

    return coincideEspecie && coincideBusqueda
  })

  // Contar mascotas con adopción urgente
  const mascotasUrgentes = mascotas.filter((m) => m.adopcionUrgente)
  const contadorUrgentes = mascotasUrgentes.length

  return (
    <>
      {/* Sección de mascotas */}
      <section id="mascotas-container" className="mascotas-section">
        <div className="mascotas-header">
          <h1>🐾 Mascotas en Adopción</h1>
          <p className="subtitle">Encuentra tu compañero perfecto</p>
          {contadorUrgentes > 0 && (
            <div className="urgentes-info">
              <span className="urgentes-icono">⚡</span>
              <strong>{contadorUrgentes}</strong> en adopción urgente
            </div>
          )}
        </div>

        {/* Filtros */}
        <div className="filtros-container">
          <FiltroEspecie
            especieSeleccionada={especieSeleccionada}
            onEspecieChange={setEspecieSeleccionada}
          />

          {/* Campo de búsqueda */}
          <div className="busqueda-container">
            <input
              type="text"
              className="busqueda-input"
              placeholder="Buscar mascota por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              maxLength="50"
              aria-label="Buscar mascota por nombre"
            />
            {busqueda && (
              <button
                className="busqueda-limpiar"
                onClick={() => setBusqueda('')}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Lista de mascotas o mensaje vacío */}
        {mascotasFiltradas.length > 0 ? (
          <>
            <p className="resultados-contador">
              {mascotasFiltradas.length} mascota{mascotasFiltradas.length !== 1 ? 's' : ''} encontrada{mascotasFiltradas.length !== 1 ? 's' : ''}
            </p>
            <ListaMascotas mascotas={mascotasFiltradas} />
          </>
        ) : (
          <div className="no-resultados">
            <p className="no-resultados-emoji">🔍</p>
            <h3>No hay mascotas que coincidan</h3>
            <p>Intenta ajustando tus filtros de búsqueda</p>
          </div>
        )}
      </section>
    </>
  )
}

export default App
