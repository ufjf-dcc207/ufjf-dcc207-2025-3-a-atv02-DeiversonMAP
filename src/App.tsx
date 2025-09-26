import './App.css'
import Disciplina from './Disciplina'
function App() {
  return (
    <>
      <h1>Salut, monde!</h1>
      <h2>Salut react!</h2>
      <Disciplina codigo='DCC202' nome='Desenvolvimento Web I' />
      <Disciplina codigo='DCC206' nome='Desenvolvimento Web II' />
      <Disciplina codigo='DCC207' nome='Desenvolvimento Web Front-End' />
    </>
  );
}

export default App
