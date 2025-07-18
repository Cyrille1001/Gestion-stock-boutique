import React, { useState } from 'react';
import './ProduitPage.css';

const ProduitPage = () => {
  const [produits, setProduits] = useState([
    { id: 1, nom: 'Chaussures', prix: 25000, stock: 12, actif: true },
    { id: 2, nom: 'T-shirt', prix: 10000, stock: 30, actif: true },
    { id: 3, nom: 'Sac à dos', prix: 18000, stock: 8, actif: false },
  ]);

  const [formData, setFormData] = useState({
    nom: '',
    prix: '',
    stock: '',
    actif: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddProduit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.prix || !formData.stock) return;

    const newProduit = {
      id: produits.length + 1,
      nom: formData.nom,
      prix: parseInt(formData.prix),
      stock: parseInt(formData.stock),
      actif: formData.actif,
    };

    setProduits([...produits, newProduit]);
    setFormData({ nom: '', prix: '', stock: '', actif: true });
  };

  const toggleStatut = (id) => {
    const updated = produits.map((produit) =>
      produit.id === id ? { ...produit, actif: !produit.actif } : produit
    );
    setProduits(updated);
  };

  return (
    <div className="produit-container">
      <h1>📦 Produits en stock</h1>

      <form className="produit-form" onSubmit={handleAddProduit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom du produit"
          value={formData.nom}
          onChange={handleChange}
        />
        <input
          type="number"
          name="prix"
          placeholder="Prix (FCFA)"
          value={formData.prix}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="actif"
            checked={formData.actif}
            onChange={handleChange}
          />
          Actif
        </label>
        <button type="submit" className="btn">➕ Ajouter</button>
      </form>

      <table className="produit-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix (FCFA)</th>
            <th>Stock</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit) => (
            <tr key={produit.id} className={!produit.actif ? 'desactive' : ''}>
              <td>{produit.id}</td>
              <td>{produit.nom}</td>
              <td>{produit.prix}</td>
              <td>{produit.stock}</td>
              <td>
                <span className={produit.actif ? 'statut-actif' : 'statut-desactive'}>
                  {produit.actif ? 'Actif' : 'Désactivé'}
                </span>
              </td>
              <td>
                <button className="btn" onClick={() => toggleStatut(produit.id)}>
                  {produit.actif ? 'Désactiver' : 'Activer'}
                </button>
                <button className="btn btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProduitPage;
