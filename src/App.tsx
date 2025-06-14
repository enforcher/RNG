import { useState } from 'react'
import './App.css'

function App() {
  const [minValue, setMinValue] = useState<number>(1)
  const [maxValue, setMaxValue] = useState<number>(750)
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([])
  const [error, setError] = useState<string>('')

  const generateNumber = () => {
    if (minValue >= maxValue) {
      setError('Minimum value must be less than maximum value')
      return
    }

    if (generatedNumbers.length >= (maxValue - minValue + 1)) {
      setError('All possible numbers have been generated')
      return
    }

    let newNumber: number
    do {
      newNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
    } while (generatedNumbers.includes(newNumber))

    setGeneratedNumbers([...generatedNumbers, newNumber])
    setError('')
  }

  const resetNumbers = () => {
    setGeneratedNumbers([])
    setError('')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Random Number Generator</h1>
            <p className="text-gray-600">Generate unique random numbers within a range</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Min Value</label>
                <input
                  type="number"
                  value={minValue}
                  onChange={(e) => setMinValue(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Max Value</label>
                <input
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div className="flex space-x-4">
              <button
                onClick={generateNumber}
                className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
              >
                Generate Number
              </button>
              <button
                onClick={resetNumbers}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
              >
                Reset
              </button>
            </div>

            {generatedNumbers.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Generated Numbers:</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-2">
                    {generatedNumbers.map((num, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
