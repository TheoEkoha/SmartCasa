import wallpaper from "../../assets/images/tokey_wallpaper.webp";
import { Highlight, Heading, VStack, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px", // Ajoute un padding pour éviter que le contenu touche les bords
      }}
    >
      <Box maxWidth="800px"> {/* Limite la largeur du contenu */}</Box>
    </div>
  );
};

export default Header;
