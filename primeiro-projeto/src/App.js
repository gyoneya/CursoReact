// Este é o arquivo JSX, basicamente o HTML no JavaScript
import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const nome = "Pâmela";

  return (
    // Todo o HTML dentro do JSX deve estar dentro de UMA div ou <>
    // No JSX é necessário usar className ao invés de class
    <div className="App">
      <Frase />
      <Frase />
      <SayMyName nome="Carlos" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome={nome} />

      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
