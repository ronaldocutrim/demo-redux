import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment, incrementByAmount, reset } from './counterSlice.js'

export function App() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.counter.value)
  const [customStep, setCustomStep] = useState(5)

  const containerStyle = {
    minHeight: '100vh',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    backgroundColor: '#f1f5f9',
  }

  const cardStyle = {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
    textAlign: 'center',
  }

  const valueStyle = {
    fontSize: '3rem',
    fontWeight: 600,
    margin: '16px 0',
  }

  const buttonRowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 8,
    marginBottom: 16,
  }

  const buttonStyle = {
    border: '1px solid #cbd5f5',
    borderRadius: 8,
    padding: '8px 0',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    backgroundColor: '#e2e8f0',
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }

  const inputStyle = {
    borderRadius: 8,
    border: '1px solid #cbd5f5',
    padding: '8px 12px',
    fontSize: '1rem',
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const parsedStep = Number(customStep) || 0
    if (parsedStep !== 0) {
      dispatch(incrementByAmount(parsedStep))
    }
  }

  return (
    <main style={containerStyle}>
      <section style={cardStyle}>
        <h1>Contador com Redux Toolkit</h1>
        <p style={valueStyle}>{value}</p>

        <div style={buttonRowStyle}>
          <button type="button" onClick={() => dispatch(decrement())} style={buttonStyle}>
            -1
          </button>
          <button type="button" onClick={() => dispatch(reset())} style={buttonStyle}>
            Resetar
          </button>
          <button type="button" onClick={() => dispatch(increment())} style={buttonStyle}>
            +1
          </button>
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <label htmlFor="step">Passo personalizado</label>
          <input
            id="step"
            type="number"
            value={customStep}
            onChange={(event) => setCustomStep(event.target.value)}
            min="-100"
            max="100"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Somar
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
