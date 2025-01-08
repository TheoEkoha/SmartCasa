import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import SmartCasaData from "../../abis/SmartCasa.json";
import "./ApartmentDetails.css";

const contractABI = SmartCasaData.abi;
const contractAddress = "0xA5BaB24d3eccF66B43cEcD457E5405e77097Df21";

const ApartmentDetails = () => {
  const { id } = useParams(); // Récupère l'ID de l'appartement depuis l'URL
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        setLoading(true);

        if (!window.ethereum) {
          setError("Veuillez installer Metamask pour continuer.");
          return;
        }

        // Connexion à Metamask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider
        );

        // Appel de la fonction `getApartmentDetails`
        const apartmentData = await contract.getApartmentDetails(id);

        setApartment({
          location: apartmentData.location,
          totalPrice: ethers.utils.formatUnits(apartmentData.totalPrice, 18),
          pricePerPart: ethers.utils.formatUnits(
            apartmentData.pricePerPart,
            18
          ),
          revenuePerMonth: ethers.utils.formatUnits(
            apartmentData.revenuePerMonth,
            18
          ),
          surface: apartmentData.surface.toString(),
          rooms: apartmentData.rooms.toString(),
          partsSold: apartmentData.partsSold.toString(),
          totalParts: apartmentData.totalParts.toString(),
        });
      } catch (err) {
        console.error(err);
        setError(
          "Erreur lors de la récupération des détails de l'appartement."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchApartmentDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="apartment-details-loading">Chargement des détails...</div>
    );
  }

  if (error) {
    return <div className="apartment-details-error">{error}</div>;
  }

  return (
    <div className="apartment-details-container">
      <h2>Détails de l'Appartement</h2>
      <p>
        <strong>Localisation :</strong> {apartment.location}
      </p>
      <p>
        <strong>Prix Total :</strong> {apartment.totalPrice} POL
      </p>
      <p>
        <strong>Prix par Part :</strong> {apartment.pricePerPart} POL
      </p>
      <p>
        <strong>Revenus Mensuels :</strong> {apartment.revenuePerMonth} POL
      </p>
      <p>
        <strong>Surface :</strong> {apartment.surface} m²
      </p>
      <p>
        <strong>Nombre de Pièces :</strong> {apartment.rooms}
      </p>
      <p>
        <strong>Parts Vendues :</strong> {apartment.partsSold} /{" "}
        {apartment.totalParts}
      </p>
      <p>
        <strong>Progression :</strong>{" "}
        {((apartment.partsSold / apartment.totalParts) * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default ApartmentDetails;
