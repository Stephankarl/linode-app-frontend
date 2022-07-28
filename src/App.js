import logo from './logo.svg';
import './App.css';
import Contracts from './components/Contracts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contracts />
      </header>
    </div>
  );
}

export default App;
