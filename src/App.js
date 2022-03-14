import logo from './logo.svg';
import './App.css';
// import PokemonApi from './components/PokemonApi';
import PokemonApiWithAxois from './components/PokemonApiWithAxois';
function App() {
  return (
    <div className="App">
      {/* <PokemonApi/> */}
      <PokemonApiWithAxois/>
    </div>
  );
}

export default App;
