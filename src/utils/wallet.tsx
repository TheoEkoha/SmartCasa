import { defineChain } from "thirdweb";
import { createWallet, inAppWallet, walletConnect } from "thirdweb/wallets";

// Définir les informations pour le réseau Amoy
export const AMOY_CHAIN_ID = 80002; // ID de la chaîne pour le réseau Amoy
export const AMOY_RPC_URL = "https://rpc-amoy.polygon.technology/"; // URL RPC pour Amoy

// Définir le réseau Amoy
export const chain = defineChain({
  id: AMOY_CHAIN_ID,
  name: "Amoy Testnet",
  rpc: [AMOY_RPC_URL],
  nativeCurrency: {
    name: "Polygon",
    symbol: "POL",
    decimals: 18,
  },
  blockExplorerUrls: ["https://amoy.polygonscan.com"], // Explorateur de blocs pour Amoy
});

// Configurer les portefeuilles
export const wallets = [
  createWallet("io.metamask"), // Metamask
  createWallet("com.coinbase.wallet"), // Coinbase Wallet
  walletConnect(), // Wallet Connect
  inAppWallet({
    auth: {
      options: ["email", "google", "apple", "facebook", "phone"], // Authentification intégrée
    },
  }),
  createWallet("me.rainbow"), // Rainbow Wallet
];
