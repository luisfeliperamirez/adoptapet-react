import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { mascotas } from './data/mascotas.js'
import ListaMascotas from './components/ListaMascotas.jsx'
import FiltroEspecie from './components/FiltroEspecie.jsx'

function App() {
  const [count, setCount] = useState(0)
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

  return (
    <>
      {/* Sección de mascotas */}
      <section id="mascotas-container" className="mascotas-section">
        <div className="mascotas-header">
          <h1>🐾 Mascotas en Adopción</h1>
          <p className="subtitle">Encuentra tu compañero perfecto</p>
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

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
