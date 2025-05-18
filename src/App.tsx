import './App.css'
import Ruleta from './components/Ruleta'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="my-10 text-4xl font-bold">🎯 Ruleta de Premios</h1>
      <Ruleta />
    </div>
  )
}

export default App
