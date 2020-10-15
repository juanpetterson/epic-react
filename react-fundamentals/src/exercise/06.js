// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.

  const inputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.userNameInput.value; 
    alert(inputRef.current.value)
  }

  const handleInputChange = event => {
    const value = event.target.value;
    // const isValid = value === value.toLowerCase()

    // setErrorMessage( isValid ? null : 'Username must be lower case');

    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <label>Username:</label>
        <input id="userNameInput" type="text" ref={inputRef} value={username} onChange={handleInputChange} />
        {errorMessage && <span style={{color: 'red'}}>{errorMessage}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
