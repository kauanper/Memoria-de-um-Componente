import { useNavigate } from 'react-router-dom';

const apps = [
  { name: "Challenge 01", url: "/desafio1" },
  { name: "Challenge 02", url: "/desafio2" },
  { name: "Challenge 03", url: "/desafio3" },
  { name: "Challenge 04", url: "/desafio4" },
];

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#D3D3D3',// cinza claro
        color: '#121212',// texto escuro para contraste
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        maxWidth: 400,
        margin: '4rem auto', // centraliza horizontal e dá espaço em cima e em baixo
        borderRadius: '12px', // para um visual mais suave
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // sombra leve para destaque
      }}
    >
      <h1>State: A Memória de um Componente</h1>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '2rem',
          width: '100%',
        }}
      >
        {apps.map((app) => (
          <li key={app.url} style={{ margin: '1rem 0' }}>
            <button
              onClick={() => navigate(app.url)}
              style={{
                fontSize: '1.2rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                color: '#7F00FF',
                textDecoration: 'underline',
                padding: 0,
                fontFamily: 'inherit',
                width: '100%',
                textAlign: 'center',
              }}
            >
              {app.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
