import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
//      <div className="flex justify-center items-center gap-8 bg-gradient-to-b from-pink-500 via-orange-500 to-purple-500 p-10">

function Offers() {
  return (
    <ChakraProvider>
      <div
        className="flex justify-center items-center gap-8 "
        style={{ marginTop: "-90px" }}
      >
        {/* Box 1 */}
        <Box
          className="p-6 bg-white rounded-lg shadow-md w-60 text-center"
          borderColor="pink.500"
          borderWidth="2px"
        >
          <Text fontWeight="bold" fontSize="xl" color="pink.500">
            ACHAT
          </Text>
          <Text mt={2} fontSize="sm" color="gray.600">
            Sélectionnez un bien et achetez le nombre de tokeys souhaité
          </Text>
        </Box>

        {/* Box 2 */}
        <Box
          className="p-6 bg-white rounded-lg shadow-md w-60 text-center"
          borderColor="orange.400"
          borderWidth="2px"
        >
          <Text fontWeight="bold" fontSize="xl" color="orange.400">
            REVENU
          </Text>
          <Text mt={2} fontSize="sm" color="gray.600">
            Chaque mois, vous recevez un revenu locatif proportionnel aux tokeys
            que vous possédez
          </Text>
        </Box>

        {/* Box 3 */}
        <Box
          className="p-6 bg-white rounded-lg shadow-md w-60 text-center"
          borderColor="blackAlpha.800"
          borderWidth="2px"
        >
          <Text fontWeight="bold" fontSize="xl" color="blackAlpha.800">
            VENTE
          </Text>
          <Text mt={2} fontSize="sm" color="gray.600">
            Vendez vos tokeys sur le marketplace dès que vous voulez vous en
            séparer
          </Text>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default Offers;
