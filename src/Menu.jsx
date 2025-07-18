import { useNavigate } from 'react-router-dom';

const apps = [
  { name: "Challenge 01", url: "/desafio1" },
  { name: "Challenge 02", url: "/app2" },
  { name: "Challenge 03", url: "/app3" },
  { name: "Challenge 04", url: "/app4" },
];

export default function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <h1>State: A Memória de um Componente</h1>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
        {apps.map((app) => (
          <li key={app.url} style={{ margin: "1rem 0" }}>
            <button
              onClick={() => navigate(app.url)}
              style={{
                fontSize: "1.2rem",
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "#ff00ff",
                textDecoration: "underline",
                padding: 0,
                fontFamily: "inherit",
              }}
            >
              {app.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
