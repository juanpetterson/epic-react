// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.step}
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// const countReducer = (state, action) => ({...state, ...action})

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  // const increment = () => setState({count: count + step})
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

const initialCount = 0
const step = 1

function App() {
  return <Counter initialCount={initialCount} step={step} />
}

export default App
