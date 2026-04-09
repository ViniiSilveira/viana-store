import './Sidebar.css';
import logo from '../assets/logo.png';
import { Home, LogOut, Phone, Shirt } from 'lucide-react';

export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Viana Store Logo" className="logo" />
      </div>

      <nav className="menu">
        <div className={`menu-item ${activeTab === 'dash' ? 'active' : ''}`} onClick={() => setActiveTab('dash')}>
          <Home size={20} /> <span>Início</span>
        </div>
        <div className={`menu-item ${activeTab === 'feminino' ? 'active' : ''}`} onClick={() => setActiveTab('feminino')}>
          <Shirt size={20} /> <span>Feminino</span>
        </div>
        <div className={`menu-item ${activeTab === 'masculino' ? 'active' : ''}`} onClick={() => setActiveTab('masculino')}>
          <Shirt size={20} /> <span>Masculino</span>
        </div>
        <div className={`menu-item ${activeTab === 'contato' ? 'active' : ''}`} onClick={() => setActiveTab('contato')}>
          <Phone size={20} /> <span>Contato</span>
        </div>
      </nav>

      <button className="logout-btn">
        <LogOut size={20} /> <span>Sair</span>
      </button>
    </aside>
  );
};