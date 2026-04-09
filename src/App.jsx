import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Produtos } from './components/Produtos';
import { products } from './data/produtos';
import './App.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('dash');

  const filteredProducts = products
    .filter((produtos) => activeTab === 'dash' || produtos.category.toLowerCase() === activeTab.toLowerCase())
    .filter((produtos) => produtos.tittle.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        <header className="topbar">
          <div className="pesquisar-container">
            <input 
              type="text" 
              placeholder="Search" 
              className="pesquisar-input" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <div className="login-container">
              <span className="user-icon">👤</span>
              <div className="login-text">
                <p>Olá, <strong>faça login</strong></p>
                <span>Ou cadastre-se</span>
              </div>
            </div>
            <div className="carrinho-container">
              <span className="cart-icon">🛒</span>
            </div>
          </div>
        </header>

        <div className="h1-home">
          {search ? `Resultados para: ${search}` : 'Em Alta!'}
        </div>
        
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, index) => (
              <Produtos 
                key={p.id} 
                title={p.tittle} 
                preco={p.preco} 
                Image={p.Image} 
                category={p.category} 
              />
            ))
          ) : (
            <p style={{ padding: '20px', color: 'white' }}>Nenhum Resultado</p>
          )}
        </div>
      </main>
    </div>
  );
}