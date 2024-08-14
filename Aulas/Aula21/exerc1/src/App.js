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
    <div>
      <Form/>
    </div>
    <div>
    <Calculadora/>
    </div>
    </main>
  );
}

export default App;
