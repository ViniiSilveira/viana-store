import Sidebar from './components/Sidebar';
import { Produtos } from './components/Produtos';
import { products } from './data/produtos';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <header className="topbar">
          <div className="pesquisar-container">
            <input type="text" placeholder="Search" className="pesquisar-input" />
          </div>
          <div className="header-actions">
            <div className="login-container">
              <span className="user-icon">👤</span>
              <div className="login-text">
                <p>Olá, <strong>faça login</strong></p>
                <span>Ou cadastra-se</span>
              </div>
            </div>
            <div className="carrinho-container">
              <span className="cart-icon">🛒</span>
            </div>
          </div>
        </header>

        <div className="h1-home">Em Alta!</div>
        
        <div className="products-container">
          {
            products.map((p, index) => (
              <Produtos key={index} title={p.tittle} preco={p.preco} Image={p.Image} category={p.category} />
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;