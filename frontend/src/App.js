import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ProduitPage from './components/ProduitPage';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>🛍️ Gestion Boutique</h2>
        <nav>
          <ul>
            <li onClick={() => setActivePage('dashboard')}>📊 Dashboard</li>
            <li onClick={() => setActivePage('produits')}>📦 Produits</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'produits' && <ProduitPage />}
      </main>
    </div>
  );
}

export default App;
