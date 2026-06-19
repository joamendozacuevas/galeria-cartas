import { useState } from "react";
import "./App.css";

const cartas = [
  { id: 1, nombre: "Dragón", tipo: "Fuego", poder: 95, emoji: "🐉" },
  { id: 2, nombre: "Mago", tipo: "Magia", poder: 70, emoji: "🧙" },
  { id: 3, nombre: "Gato", tipo: "Normal", poder: 30, emoji: "🐱" },
  { id: 4, nombre: "Golem", tipo: "Tierra", poder: 88, emoji: "🗿" },
  { id: 5, nombre: "Sirena", tipo: "Agua", poder: 60, emoji: "🧜" },
  { id: 6, nombre: "Fénix", tipo: "Fuego", poder: 99, emoji: "🔥" },
];

function Carta({ nombre, tipo, poder, emoji }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="carta">
      <h3>{emoji} {nombre}</h3>
      <p>Tipo: {tipo}</p>
      <p>Poder: {poder}</p>
      
      {/* Condición de carta legendaria */}
      {poder > 80 && <span className="legendaria">⚡ LEGENDARIA</span>}
      
      {/* Contenedor de botones */}
      <div className="botones">
        <button onClick={() => alert("Elegiste: " + nombre)}>
          Ver carta
        </button>

        <button onClick={() => setLikes(likes + 1)}>
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="app">
      <h1 className="titulo">🃏 Mi galería de cartas</h1>
      
      <div className="galeria">
        {cartas.map((carta) => (
          <Carta
            key={carta.id}
            nombre={carta.nombre}
            tipo={carta.tipo}
            poder={carta.poder}
            emoji={carta.emoji}
          />
        ))}
      </div>
      
    </main>
  );
}

export default App;
