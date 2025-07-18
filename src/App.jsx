import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Desafio1App from './desafio1/App';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/desafio1" element={<Desafio1App />} />
    </Routes>
  );
}
