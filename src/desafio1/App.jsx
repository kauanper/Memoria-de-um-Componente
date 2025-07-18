import Gallery from './Gallery';

export default function Desafio1App() {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        padding: '2rem',
        maxWidth: 900,
        color: '#000000ff',
        margin: 'auto',
        textAlign: 'center',

        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Gallery />
    </div>
  );
}
