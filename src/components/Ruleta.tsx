import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import Confetti from 'react-confetti'

const baseOptions = [
  {
    option: 'Premio 1',
    weight: 3,
    style: { backgroundColor: '#f94144', textColor: '#ffffff' }
  },
  {
    option: 'Premio 2',
    weight: 2,
    style: { backgroundColor: '#f3722c', textColor: '#ffffff' }
  },
  {
    option: 'Premio 3',
    weight: 1,
    style: { backgroundColor: '#f8961e', textColor: '#ffffff' }
  },
  {
    option: 'Premio 4',
    weight: 1,
    style: { backgroundColor: '#f9844a', textColor: '#ffffff' }
  },
  {
    option: 'Premio 5',
    weight: 1,
    style: { backgroundColor: '#f9c74f', textColor: '#ffffff' }
  },
  {
    option: 'Premio 6',
    weight: 1,
    style: { backgroundColor: '#90be6d', textColor: '#ffffff' }
  },
  {
    option: 'Premio 7',
    weight: 1,
    style: { backgroundColor: '#43aa8b', textColor: '#ffffff' }
  },
  {
    option: 'Premio 8',
    weight: 1,
    style: { backgroundColor: '#577590', textColor: '#ffffff' }
  },
  {
    option: 'Premio 9',
    weight: 1,
    style: { backgroundColor: '#277da1', textColor: '#ffffff' }
  },
  {
    option: 'Premio 10',
    weight: 1,
    style: { backgroundColor: '#7209b7', textColor: '#ffffff' }
  }
]

const data = baseOptions.map((option) => ({
  option: option.option,
  style: option.style,
  optionSize: option.weight
}))

const Ruleta: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [message, setMessage] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSpinClick = () => {
    setMessage(null) // Limpia el mensaje anterior
    setShowConfetti(false) // Limpia el confetti anterior
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  const handleStopSpinning = () => {
    setMustSpin(false)
    setMessage(`¡Felicidades! Ganaste: ${data[prizeNumber].option}`)
    setShowConfetti(true)

    // Detiene el confetti después de unos segundos
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <div className="relative flex flex-col w-full">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={1500} // Aumenta la cantidad de confetti
          gravity={0.5} // Cae más lento
          tweenDuration={4000} // Dura más tiempo
          recycle={false} // Evita que el confetti se reinicie automáticamente
          wind={0.01} // Añade un ligero viento hacia la derecha
          colors={[
            '#FF0000',
            '#FFFF00',
            '#00FF00',
            '#0000FF',
            '#FF00FF',
            '#00FFFF'
          ]}
          opacity={0.9} // Hace el confetti un poco más transparente
        />
      )}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-2xl ">
          <h1 className="my-10 text-4xl font-bold text-center">
            🎯 Ruleta de Premios
          </h1>

          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleStopSpinning}
            backgroundColors={[
              '#FF0000',
              '#FFA500',
              '#FFFF00',
              '#00FF00',
              '#0000FF',
              '#4B0082',
              '#EE82EE'
            ]}
            textColors={['#ffffff']}
            outerBorderColor="#000000"
            outerBorderWidth={2}
            innerRadius={2}
            radiusLineColor="#ffffff"
            radiusLineWidth={1}
          />
          <div className="flex justify-end w-full">
            <button
              onClick={handleSpinClick}
              className="px-6 py-2 mt-10 text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700"
            >
              ¡Girar Ruleta!
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-10">
        {message && (
          <div className="mt-6 text-2xl font-bold text-green-700">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}

export default Ruleta
