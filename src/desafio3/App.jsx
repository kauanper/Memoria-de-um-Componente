import { useState } from 'react';

export default function Desafio3App() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Sending: "${message}"`);
    setIsSent(true);
  }

  if (isSent) {
    return <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Thank you!</h1 >;
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '2rem' }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
