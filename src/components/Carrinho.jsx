import "./Carrinho.css";
export function Carrinho({ carrinho, setCarrinho }) {

  function removerItem(index) {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
  }

  function calcularTotal() {
    return carrinho.reduce((total, item) => {
      const preco = parseFloat(item.preco.toString().replace(',', '.'));
      return total + preco;
    }, 0);
  }

  const total = calcularTotal();

  return (
    <div className="carrinho-container-page">
      <h1>Seu Carrinho</h1>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {carrinho.map((item, index) => (
            <div className="carrinho-item" key={index}>
              <img src={item.Image} alt={item.title} />

              <div className="info">
                <h3>{item.title}</h3>
                <p>R$ {item.preco}</p>
              </div>

              <button onClick={() => removerItem(index)}>
                Remover
              </button>
            </div>
          ))}

          <h2 className="total">
            Total: R$ {total.toFixed(2).replace('.', ',')}
          </h2>
        </>
      )}
    </div>
  );
}