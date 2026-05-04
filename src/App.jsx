import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Produtos } from './components/Produtos';
import { products } from './data/produtos';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Carrinho } from "./components/Carrinho";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './App.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('dash');
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho(prev => [...prev, produto]);
  }

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  const filteredProducts = products
    .filter(p => activeTab === 'dash' || p.category.toLowerCase() === activeTab.toLowerCase())
    .filter(p => p.tittle.toLowerCase().includes(search.toLowerCase()));


  function Home() {
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

              <Link to="/carrinho" className="carrinho-container">
                🛒 ({carrinho.length})
              </Link>
            </div>
          </header>

          <div className="h1-home" data-aos="fade-up">
            {search ? `Resultados para: ${search}` : 'Em Alta!'}
          </div>

          <div className="products-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p, index) => (
                <div key={p.id} data-aos="fade-up" data-aos-delay={index * 50}>
                  <Produtos 
                    title={p.tittle}
                    preco={p.preco}
                    Image={p.Image}
                    category={p.category}
                    adicionarAoCarrinho={adicionarAoCarrinho}
                  />
                </div>
              ))
            ) : (
              <p style={{ padding: '20px', color: 'white' }}>Nenhum Resultado</p>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/carrinho" 
          element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}