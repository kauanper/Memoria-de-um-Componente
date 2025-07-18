import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Desafio1App from './desafio1/App';
import Desafio2App from './desafio2/App';
import Desafio3App from './desafio3/App';
import Desafio4app from './desafio4/App';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/desafio1" element={<Desafio1App />} />
      <Route path="/desafio2" element={<Desafio2App/>} />
      <Route path="/desafio3" element={<Desafio3App/>} />
      <Route path="/desafio4" element={<Desafio4app/>} />
    </Routes>
  );
}
