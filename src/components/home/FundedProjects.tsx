import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const FundedProjects = () => {
  return (
    <Flex
      
      color="#FFFFFF"
      flexDirection="column"
      alignItems="center"
      width="1024px"
      height="700px"
      position="relative"
      marginLeft="10px"
    >
      <Text fontSize="36px" mt="20px" alignItems="center">
        Funded Projects
      </Text>

      {/* Caja 1 - Izquierda */}
      <Box
        backgroundColor="#242222"
        border="1px solid #1FAFC8"
        borderRadius="8px"
        width="320px" // Cambiar el tamaño a 300px
        position="absolute"
        top="100px"
        left="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="20px"
        textAlign="center"
      >
        <Image
          src="https://mushroomprotocol.io/wp-content/uploads/2023/09/patch-768x768.jpg"
          alt="Main Image 1"
          w="200px"
          h="200px"
        />

        <Box display="flex" alignItems="center" mt="20px">
          <Image
            src="https://mushroomprotocol.io/wp-content/uploads/2023/09/Nathera-logo.png"
            alt="Secondary Image 1"
            w="50px"
            h="50px"
            mr="10px"
          />

          <Text fontSize="25px">Nathera</Text>
        </Box>

        <Text fontSize="22px" my="10px">
          Nanotherapy to improve well-being
        </Text>

        <Text fontSize="16px" color="#737373" textAlign="justify" my="10px">
          The project is developing a treatment for musculoskeletal diseases
          such as arthrosis, low back pain, and rheumatoid arthritis using
          nanotechnology.
        </Text>

        <Text
          fontSize="16px"
          backgroundColor="#1FAFC8"
          color="#FFFFFF"
          p="8px"
          borderRadius="8px"
          mt="20px"
        >
          Health Tech
        </Text>
      </Box>

      {/* Caja 2 - Centro (Nueva) */}
      <Box
        backgroundColor="#242222"
        border="1px solid #1FAFC8"
        borderRadius="8px"
        width="320px" // Tamaño igual al de la Caja 1
        position="absolute"
        top="100px"
        left="352px" // Espacio adicional para acomodar la tercera caja
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="20px"
        textAlign="center"
      >
        <Image
          src="https://mushroomprotocol.io/wp-content/uploads/2023/11/biopolimero.jpg"
          alt="Main Image 2"
          w="200px"
          h="200px"
        />

        <Box display="flex" alignItems="center" mt="20px">
          <Image
            src="https://mushroomprotocol.io/wp-content/uploads/2023/11/Landopp_icon.png"
            alt="Secondary Image 2"
            w="50px"
            h="50px"
            mr="10px"
          />

          <Text fontSize="25px">Landopp</Text>
        </Box>

        <Text fontSize="22px" my="10px">
          Biopolymer developed with biomass
        </Text>

        <Text fontSize="16px" color="#737373" textAlign="justify" my="10px">
          We develop alternative raw materials to plastic that come from the
          earth and return to it, respecting the environment, without toxics and
          100% organic.
        </Text>

        <Text
          fontSize="16px"
          backgroundColor="#64B344"
          color="#FFFFFF"
          p="8px"
          borderRadius="8px"
          mt="20px"
        >
          Green Tech
        </Text>
      </Box>

      <Box
        backgroundColor="#242222"
        border="1px solid #1FAFC8"
        borderRadius="8px"
        width="320px" // Cambiar el tamaño a 300px
        position="absolute"
        top="100px"
        right="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="20px"
        textAlign="center"
      >
        <Image
          src="https://mushroomprotocol.io/wp-content/uploads/2023/10/nanocouting.jpg"
          alt="Main Image 2"
          w="200px"
          h="200px"
        />

        <Box display="flex" alignItems="center" mt="20px">
          <Image
            src="https://mushroomprotocol.io/wp-content/uploads/2023/09/EON-logo-v2.png"
            alt="Secondary Image 2"
            w="50px"
            h="50px"
            mr="10px"
          />

          <Text fontSize="25px">EON</Text>
        </Box>

        <Text fontSize="22px" my="10px">
          Extends the shelf life of <br />
          food
        </Text>

        <Text fontSize="16px" color="#737373" textAlign="justify" my="10px">
          Every year, tons of food are wasted during export and transportation.
          EON develops a coating to extend the shelf life of food. <br /> <br />
        </Text>

        <Text
          fontSize="16px"
          backgroundColor="#EA332B"
          color="#FFFFFF"
          p="8px"
          borderRadius="8px"
          mt="20px"
        >
          Agro Tech
        </Text>
      </Box>
    </Flex>
  );
};

export default FundedProjects;
