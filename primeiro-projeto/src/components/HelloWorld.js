import Frase from "./Frase";

function HelloWorld() {
  return (
    <div>
      <Frase />
      <h1>Meu primeiro componente</h1>
      <Frase />
    </div>
  );
}

// é necessário exportar aqui e importar no app.js ou em outro js
export default HelloWorld;
