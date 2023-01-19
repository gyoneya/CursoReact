import PropTypes from "prop-types";

function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

// Definir type da prop e se ela é necessária (isRequired)
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number.isRequired,
};

// defaultProps coloca um valor padrão caso algo não seja preenchido
// PORÉM a propriedade isRequired fica inútil
Item.defaultProps = {
  marca: "Faltou a marca",
  ano_lancamento: 0,
};

export default Item;
