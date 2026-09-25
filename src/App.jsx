import Card from './components/Cards';
import { jogos } from './data/jogos';
import './App.css'; // Importa os estilos globais da página

export default function App() {
  return (
    <main className="app-container">
      <h1 className="page-title">Meus Jogos</h1>

      <div className="games-grid">
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            title={jogo.title}
            releaseYear={jogo.releaseYear}
            description={jogo.description}
            coverImage={jogo.coverImage}
          />
        ))}
      </div>
    </main>
  );
}