import './Sidebar.css';
import logo from '../assets/logo.png';
import { Home, LogOut, Phone, Shirt } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Viana Store Logo" className="logo" />
      </div>

      <nav className="menu">
        <div className="menu-item active">
          <Home size={20} /> <span>Início</span>
        </div>
        <div className="menu-item">
          <Shirt size={20} /> <span>Feminino</span>
        </div>
        <div className="menu-item">
          <Shirt size={20} /> <span>Masculino</span>
        </div>
        <div className="menu-item">
          <Phone size={20} /> <span>Contato</span>
        </div>
      </nav>

      <button className="logout-btn">
        <LogOut size={20} /> <span>Sair</span>
      </button>
    </aside>
  );
};