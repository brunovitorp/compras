import React, { useState, useEffect } from "react";
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import "./App.css";

function Carrinho() {
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => { //sempre altera quando o valor de 'quantidade' mudar...
    document.title = `Itens no Carrinho: ${quantidade}`;
  }, [quantidade]);//lista de dependências

  const adicionarItem = () => {
    setQuantidade(quantidade + 1);
  };

  const removerItem = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="carrinho-container">
      <h2>Carrinho de Compras</h2>
      <div className="carrinho-itens">
        <FaCartArrowDown onClick={removerItem} style={{ cursor: "pointer" }} />
        <span className="quantidade">{quantidade}</span>
        <FaCartPlus onClick={adicionarItem} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Carrinho;
