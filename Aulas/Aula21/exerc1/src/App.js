import './App.css';
import Calculadora from './components/calculadora';
import Contador from './components/contador';
import Counter from './components/counter';
import Form from './components/NameForm';

function App() {
  return (
    <main>
    <div className="Numeros">
      <Counter/>
    </div>
    <div className='Formando'>
      <Form/>
    </div>
    <div className='Calculando'>
    <Calculadora/>
    </div>
    <div className='Contando'>
      <Contador/>
    </div>
    </main>
  );
}

export default App;
