import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./ApartmentCardList.css"; // Assurez-vous de styliser les cartes avec ce fichier

const ApartmentCardList = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const contractAddress = "0xYourSmartCasaContractAddress";
  const contractABI = [
    {
      inputs: [],
      name: "getAllApartments",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "appartementId", type: "uint256" },
            { internalType: "uint256", name: "totalParts", type: "uint256" },
            { internalType: "uint256", name: "pricePerPart", type: "uint256" },
            { internalType: "uint256", name: "partsSold", type: "uint256" },
            { internalType: "string", name: "location", type: "string" },
          ],
          internalType: "struct Appartement[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

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
          partsSold: apartment.partsSold.toString(),
          pricePerPart: ethers.utils.formatUnits(apartment.pricePerPart, 18),
          location: apartment.location,
          progress: (apartment.partsSold / apartment.totalParts) * 100,
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
    <div className="apartment-card-container">
      {apartments.map((apartment) => (
        <div className="apartment-card" key={apartment.id}>
          <div className="card-header">
            <span className="badge">Apartment</span>
            <span className="badge sale">On Sale</span>
          </div>
          <div className="card-content">
            <h3>{apartment.location}</h3>
            <p>{`Apartment ID: ${apartment.id}`}</p>
            <p>{`Price per Part: ${apartment.pricePerPart} POL`}</p>
            <p>{`Parts Sold: ${apartment.partsSold} / ${apartment.totalParts}`}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${apartment.progress}%` }}
              ></div>
            </div>
          </div>
          <div className="card-footer">
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApartmentCardList;
