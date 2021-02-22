import logo from './logo.svg';
import './App.css';
import PersonBar from "./components/PersonBar"
import background from "./img/fondo.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <div className="App-header">
            <PersonBar/>
        </div>
    </div>
  );
}

export default App;
