export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={handleClick}>
        Greet
      </button>
    </div>
  );
}
