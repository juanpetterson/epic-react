// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React, {useEffect} from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  const getStoredName = () => {
    const storedName = localStorage.getItem('name') || initialName
    return storedName
  }
  const [name, setName] = React.useState(() => getStoredName())

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
