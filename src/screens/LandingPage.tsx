import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
import NavBar from "../components/Navbar/Navbar.component";
import { FloatingNav } from "../components/Navbar/FloatingNavbar.component";
import wallpaper from "../assets/images/tokey_wallpaper.webp";
import appart from "../assets/images/appart.webp";
import home_offer from "../assets/images/home_offer.webp";
import home_offer_2 from "../assets/images/home_offer_2.webp";
import Offers from "../components/Features/Offers.component";
import CreateApartment from "../components/CreateAppartment";

export const LandingPage = () => {
  const navItems = [
    { name: "Accueil", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Barre de navigation */}
      <FloatingNav navItems={navItems}>
        <NavBar />
      </FloatingNav>

      {/* Section principale */}
      <Box w="100%" bg="gray.50">
        {/* Image de fond principale */}
        <Box
          position="relative"
          w="100%"
          h={{ base: "50vh", md: "60vh" }} // Ajuste la hauteur de la section principale
          overflow="hidden"
        >
          <Box
            as="img"
            src={wallpaper}
            alt="Background Wallpaper"
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        {/* Contenu des offres */}
        <Box position="relative" zIndex={1} maxW="1200px" mx="auto" px={4}>
          <Offers />
        </Box>
        {/* Contenu principal */}
        <Box textAlign="center" py={8} px={4} backgroundColor={"#F2F4F9"}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} color="black">
            Nos nouvelles propriétés
          </Heading>
          <Text mt={2} fontSize={{ base: "sm", md: "lg" }} color="gray.600">
            Nos propriétés actuellement en vente
          </Text>
        </Box>
        <CreateApartment />

        {/* Section des offres */}

        <Box w="100%" bg="gray.50">
          {/* Image de fond principale */}
          <Box
            position="relative"
            w="100%"
            h={{ base: "30vh", md: "60vh" }} // Ajuste la hauteur de la section principale
            overflow="hidden"
          >
            <Box
              as="img"
              src={appart}
              alignContent={"center"}
              display={"flex"}
              flex={1}
              alignItems={"center"}
              alt="Background Wallpaper"
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box w="100%" h="150px" bg="#1E293B">
          <Box paddingLeft={"50px"} paddingTop={"20px"}>
            <Text mt={2} fontWeight={"bold"} fontSize={"22px"} color="white">
              Ne perdez pas de temps,
            </Text>
            <Text mt={2} fontWeight={"bold"} fontSize={"22px"} color="white">
              investissez dès maintenant !
            </Text>
          </Box>
        </Box>
        <div
          className="flex justify-center items-center gap-8 "
          style={{ marginTop: "30px" }}
        >
          {/* Box 1 */}
          <Box
            className="p-6 bg-white rounded-lg shadow-md text-center"
            width={"70%"}
            height={"340px"}
            borderWidth="1px"
            borderRadius={"20px"}
            borderColor={"gray.200"}
          >
            <HStack>
              <Box
                as="img"
                src={home_offer}
                alt="Background Wallpaper"
                w="340px"
                h="300px"
              />
              <div>
                <Text fontWeight="bold" fontSize="xl" color="black">
                  L'avenir est au fractionnement de biens
                </Text>
                <Text mt={2} fontSize="sm" color="gray.600">
                  Dans les années à venir, il sera toujours plus difficile de de
                  venir propriétaire. Encore plus pour des gens qui ne sont pas
                  dans l'engrenage et qui ne possèdent pas déjà des premiers
                  biens pour obtenir un effet de levier pour les suivants.
                </Text>
                <Text mt={2} fontSize="sm" color="black">
                  La solution de la propriété fractionnée démocratise l'accès à
                  l'investissement Immobilier, minimise les risques et les
                  efforts qu'implique la détetention de viens Immobiliers et
                  permet une diversification. Grâce à l'achat de fraction d'un
                  bien Immobilier, vous pouvez investir en fonction de vos
                  moyens tout en profitant des rendements et des avantage
                  qu'offrent ce marché.
                </Text>
                <Link color="orange.300">En savoir plus</Link>
              </div>
            </HStack>
          </Box>
        </div>
        <div
          className="flex justify-center items-center gap-8 "
          style={{ marginTop: "55px" }}
        >
          {/* Box 2 */}
          <Box
            className="p-6 bg-white rounded-lg shadow-md text-center"
            width={"70%"}
            height={"340px"}
            borderWidth="1px"
            borderRadius={"20px"}
            borderColor={"gray.200"}
          >
            <HStack>
              <div>
                <Text fontWeight="bold" fontSize="xl" color="black">
                  Protégez votre argent
                </Text>
                <Text mt={2} fontSize="sm" color="gray.600">
                  L'inflation atteint des sommets historiques et tout le monde
                  est convaincu que le marché immobilier reste un placement sûr
                  qui garantit un revenu à moyen et long terme. Les
                  inconvénients de ce marché restent l'apport important de
                  capital et le fait qu'il soit difficile de récupérer de la
                  liquidité lorsque vous en avez besoin.
                </Text>
                <Text mt={2} fontSize="sm" color="black">
                  Aujourd'hui, grâce à Tokey, vous pouvez vous diversifier dans
                  plusieurs biens immobiliers très facilement, et ce, en
                  fonction de votre budget. Tokey vous offre le meilleur de
                  l'investissement immobilier en supprimant tous les
                  inconvénients de ce marché. Alors, qu'attendez-vous ?
                </Text>
                <Link color="orange.300">En savoir plus</Link>
              </div>
              <Box
                as="img"
                src={home_offer_2}
                alt="Background Wallpaper"
                w="340px"
                h="300px"
              />
            </HStack>
          </Box>
        </div>
        <div
          className="flex justify-center items-center gap-8 "
          style={{
            marginTop: "55px",
            marginBottom: "55px",
            backgroundColor: "#CBD5E1",
          }}
        >
          {/* Box 3 */}
          <Box
            className="p-6 bg-white rounded-lg shadow-md text-center"
            width={"70%"}
            height={"240px"}
            borderWidth="1px"
            borderRadius={"20px"}
            borderColor={"gray.200"}
            marginTop={"90px"}
            marginBottom={"90px"}
          >
            <HStack>
              <div>
                <Text fontWeight="bold" fontSize="xl" color="black">
                  La blockchain pour la confiance
                </Text>
                <Text mt={2} fontSize="sm" color="black">
                  Tokey s'appuie sur la technologie blockchain pour apporter la
                  confiance à ses utilisateurs investisseurs. En effet, ce
                  système peut-être vu comme une base de données indépendante et
                  externe à la plateforme Tokey qui assure que toutes les
                  informations, liées à la création des tokens du projet
                  (appelés tokeys) propre à un bien immobilier et à la
                  distribution ou au transfert de ses tokens soient des données
                  immuables, infalsifiables et sécurisées.
                </Text>
                <Text mt={2} fontSize="sm" color="black">
                  Nos investisseurs peuvent également tirer parti de cette
                  technologie pour utiliser leurs propres portefeuilles
                  crypto-monnaies pour y stocker leurs tokens car nous
                  travaillons avec les standards actuels (le réseau polygone et
                  la blockchain Ethereum).
                </Text>
                <Link color="orange.300">En savoir plus</Link>
              </div>
            </HStack>
          </Box>
        </div>
      </Box>
    </>
  );
};
