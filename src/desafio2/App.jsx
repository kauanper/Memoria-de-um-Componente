import { useState } from 'react';

export default function Desafio2App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()} style={{ textAlign: 'center', marginTop: '2rem' }}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
        style={{ marginRight: '1rem' }}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset} type="button" style={{ marginTop: '1rem' }}>
        Reset
      </button>
    </form>
  );
}
