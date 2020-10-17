// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js
import React, {useEffect, useState} from 'react'

function useLocalStorageState(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key)
    try {
      return JSON.parse(item) || initialValue
    } catch (error) {
      return item || initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Deverle" />
}

export default App
