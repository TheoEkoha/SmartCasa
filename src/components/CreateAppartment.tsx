import React, { useState } from "react";
import { ethers } from "ethers";

import SmartCasaData from "../abis/SmartCasa.json";

const SmartCasaABI = SmartCasaData.abi; // Extraire uniquement l'ABI

const CreateApartment = () => {
  const [appartementId, setAppartementId] = useState("");
  const [totalParts, setTotalParts] = useState("");
  const [pricePerPart, setPricePerPart] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCreateApartment = async (e) => {
    e.preventDefault();

    if (!appartementId || !totalParts || !pricePerPart) {
      setMessage("Tous les champs sont requis.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // Vérifier si Metamask est disponible
      if (!window.ethereum) {
        throw new Error("Metamask non détecté.");
      }

      // Connexion à Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum); // Utilisation pour Ethers.js v5
      const signer = provider.getSigner();

      // Adresse du contrat déployé
      const contractAddress = "0x07B87AFf405c1a18F9b6De28b1Db739BE232cfD1";

      const contract = new ethers.Contract(
        contractAddress,
        SmartCasaABI,
        signer
      );

      // Conversion des valeurs en Wei
      const parts = parseInt(totalParts);
      const price = ethers.utils.parseUnits(pricePerPart, 18); // Fonction correcte pour v5

      // Appeler la fonction createAppartement
      const tx = await contract.createAppartement(appartementId, parts, price);
      await tx.wait();

      setMessage(`Appartement créé avec succès (ID: ${appartementId}).`);
    } catch (error) {
      console.error(error);
      setMessage(`Erreur : ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "black" }}>
      <h1>Créer un Appartement</h1>
      <form onSubmit={handleCreateApartment}>
        <div>
          <label>ID de l'Appartement</label>
          <input
            type="number"
            value={appartementId}
            onChange={(e) => setAppartementId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre Total de Parts</label>
          <input
            type="number"
            value={totalParts}
            onChange={(e) => setTotalParts(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Prix par Part (en POL)</label>
          <input
            type="number"
            step="0.0001"
            value={pricePerPart}
            onChange={(e) => setPricePerPart(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Création en cours..." : "Créer"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateApartment;
