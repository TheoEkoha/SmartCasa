import React, { useState } from "react";
import { ethers } from "ethers";
import "./ApartmentCreation.css";
import NavBar from "../../components/Navbar/Navbar.component";
import { FloatingNav } from "../../components/Navbar/FloatingNavbar.component";

import SmartCasaData from "../../abis/SmartCasa.json";

const contractABI = SmartCasaData.abi;

const ApartmentCreation: React.FC = () => {
  const [formData, setFormData] = useState({
    apartmentName: "",
    totalParts: 0,
    pricePerPart: 0,
    totalPrice: 0,
    location: "",
    revenuePerMonth: 0,
    surface: 0,
    rooms: 0,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fonction pour gérer les changements de formulaire
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  // Fonction pour soumettre les données et interagir avec la blockchain
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.ethereum) {
      setMessage("Metamask non détecté. Veuillez l'installer pour continuer.");
      return;
    }

    const {
      apartmentName,
      totalParts,
      pricePerPart,
      totalPrice,
      location,
      revenuePerMonth,
      surface,
      rooms,
    } = formData;

    if (
      !apartmentName ||
      totalParts <= 0 ||
      pricePerPart <= 0 ||
      totalPrice <= 0 ||
      !location ||
      revenuePerMonth <= 0 ||
      surface <= 0 ||
      rooms <= 0
    ) {
      setMessage("Veuillez remplir tous les champs correctement.");
      return;
    }

    try {
      setLoading(true);
      setMessage("Connexion à la blockchain...");

      // Connexion à Metamask
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Initialisation du fournisseur et du signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Vérification des comptes disponibles
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        throw new Error("Aucun compte connecté à Metamask.");
      }

      // Adresse et ABI du contrat
      const contractAddress = "0xA5BaB24d3eccF66B43cEcD457E5405e77097Df21";

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      // Appel à la fonction `createAppartement`
      setMessage("Création de l'appartement...");
      const tx = await contract.createAppartement(
        ethers.utils.id(apartmentName), // Identifiant basé sur un hash
        totalParts,
        ethers.utils.parseUnits(pricePerPart.toString(), 18),
        ethers.utils.parseUnits(totalPrice.toString(), 18),
        location,
        ethers.utils.parseUnits(revenuePerMonth.toString(), 18),
        surface,
        rooms
      );
      await tx.wait();

      setMessage("Appartement créé avec succès !");
      console.log("Transaction réussie :", tx);
    } catch (error: any) {
      console.error("Erreur :", error);
      setMessage(`Erreur : ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FloatingNav navItems={undefined}>
        <NavBar />
      </FloatingNav>
      <div className="apartment-form-container" style={{ paddingTop: 150 }}>
        <h2 className="form-title">Créer un Appartement</h2>
        <form className="apartment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="apartmentName" className="form-label">
              Nom de l'Appartement :
            </label>
            <input
              type="text"
              name="apartmentName"
              value={formData.apartmentName}
              onChange={handleInputChange}
              placeholder="Entrez le nom de l'appartement"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="totalParts" className="form-label">
              Nombre Total de Parts :
            </label>
            <input
              type="number"
              name="totalParts"
              value={formData.totalParts}
              onChange={handleInputChange}
              placeholder="Entrez le nombre total de parts"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pricePerPart" className="form-label">
              Prix par Part (en POL) :
            </label>
            <input
              type="number"
              name="pricePerPart"
              value={formData.pricePerPart}
              onChange={handleInputChange}
              placeholder="Entrez le prix par part"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="totalPrice" className="form-label">
              Prix Total du Bien (en POL) :
            </label>
            <input
              type="number"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleInputChange}
              placeholder="Entrez le prix total du bien"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Localisation :
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Entrez la localisation"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="revenuePerMonth" className="form-label">
              Revenus Mensuels (en POL) :
            </label>
            <input
              type="number"
              name="revenuePerMonth"
              value={formData.revenuePerMonth}
              onChange={handleInputChange}
              placeholder="Entrez les revenus mensuels"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="surface" className="form-label">
              Surface (m²) :
            </label>
            <input
              type="number"
              name="surface"
              value={formData.surface}
              onChange={handleInputChange}
              placeholder="Entrez la surface en m²"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rooms" className="form-label">
              Nombre de Pièces :
            </label>
            <input
              type="number"
              name="rooms"
              value={formData.rooms}
              onChange={handleInputChange}
              placeholder="Entrez le nombre de pièces"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Création en cours..." : "Créer l'Appartement"}
            </button>
          </div>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
};

export default ApartmentCreation;
