import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import SmartCasaData from "../../abis/SmartCasa.json";
import ApartmentCard from "./ApartmentCard";

const contractABI = SmartCasaData.abi;

const ApartmentList = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const contractAddress = "0xA5BaB24d3eccF66B43cEcD457E5405e77097Df21";

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        if (!window.ethereum) {
          setError(
            "Metamask non détecté. Veuillez l'installer pour continuer."
          );
          return;
        }

        // Connexion à Metamask
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contractAddress = "0xA5BaB24d3eccF66B43cEcD457E5405e77097Df21";

        // Initialiser le contrat
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        // Appel à la fonction `getAllApartments`
        const apartmentsData = await contract.getAllApartments();
        const formattedApartments = apartmentsData.map((apartment) => ({
          id: apartment.appartementId.toString(),
          totalParts: apartment.totalParts.toString(),
          pricePerPart: ethers.utils.formatUnits(apartment.pricePerPart, 18),
          location: apartment.location,
        }));

        setApartments(formattedApartments);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Erreur lors de la récupération des appartements.");
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  if (loading) {
    return <p>Chargement des appartements...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <div className="apartment-card-container">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default ApartmentList;
