import logo from './logo.svg';
import './App.css';
import { Carta } from './components/Carta';

function App() {
  return (
    <div className="App">
      <Carta remetente="Matheus" destino="New York"/>
    </div>
  );
}

export default App;
