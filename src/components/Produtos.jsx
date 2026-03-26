import './Produtos.css';
import { ShoppingBag } from 'lucide-react';

export function Produtos({ title, preco, Image, category }) {
  return (
    <div className="viana-card-container">
      <div className="card-img-container">
        <img src={Image} alt={title} className='produto-img' />
      </div>

      <div className="card-info">
        <div className="card-header">
          <h4>{title}</h4>
        </div>

        <div className="category">
            <span className='Categoria'>{category}</span>
        </div>

        <div className="card-footer">
          <span className="price">R$ {preco}</span>
          
          <button className="buy-btn">
            <ShoppingBag size={16} fill='white' />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}