// Este é o arquivo JSX, basicamente o HTML no JavaScript
import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Gustavo";

  // Utilizando função no JSX
  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    // Todo o HTML dentro do JSX deve estar dentro de UMA div ou <>
    // No JSX é necessário usar className ao invés de class
    <div className="App">
      <h1>Olá Mundo!</h1>
      <p>Meu nome é {name}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"></img>
      {/* Chamando componente HelloWorld */}
      <HelloWorld />
    </div>
  );
}

export default App;
