import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Calculadora from './components/calculadora';
import Contador from './components/contador';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calculadora" element={<Calculadora/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
