import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

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

  const handleSpinClick = () => {
    setMessage(null) // Limpia el mensaje anterior
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  const handleStopSpinning = () => {
    setMustSpin(false)
    setMessage(`¡Felicidades! Ganaste: ${data[prizeNumber].option}`)
  }

  return (
    <div className="flex flex-col items-center">
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
        innerRadius={0}
        radiusLineColor="#ffffff"
        radiusLineWidth={1}
      />

      <button
        onClick={handleSpinClick}
        className="px-6 py-2 mt-10 text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700"
      >
        ¡Girar Ruleta!
      </button>

      {message && (
        <div className="mt-6 text-2xl font-bold text-green-700">{message}</div>
      )}
    </div>
  )
}

export default Ruleta
