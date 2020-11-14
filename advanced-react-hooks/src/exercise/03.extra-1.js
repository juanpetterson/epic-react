// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const useCount = () => {
  const context = React.useContext(CountContext)

  if (!context) {
    throw new Error('useCount must be used within a CountProvider.')
  }

  return context
}

function CountProvider(props) {
  const state = React.useState(0)

  return <CountContext.Provider value={state} {...props} />
}

function CountDisplay() {
  const [count] = useCount()
  // const [count] = React.useContext(CountContext)

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [_, setCount] = React.useContext(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
