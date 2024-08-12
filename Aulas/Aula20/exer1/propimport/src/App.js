import './App.css';
import Botao from './components/button';
import Input from './components/input';
import Welcome from './components/showText';
function App() {
  return (
    <div className="container">
      <Welcome name="Senhor Veríssimo" className="vindo"/>
      <Input className="enpute"/> <br/>
      <Botao className="bota"/>
    </div>
  );
}

export default App;
