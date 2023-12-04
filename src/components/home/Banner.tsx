import React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex
      
      color="#FFFFFF"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="1024px"
      height="400px"
      position="relative"
    >
      <Box
        p={4}
        position="absolute"
        top="50px"
        left="50px"
        textAlign="left"
        maxWidth="40%"
      >
        <Heading fontSize="35px">
          Supports the science and technology development in LATAM
        </Heading>
      </Box>
      <Button
        colorScheme="teal"
        backgroundColor="#1FAFC8"
        variant="solid"
        color="#FFFFFF"
        fontSize="xl"
        borderRadius="full"
        ml="16px"
        position="absolute"
        top="300px"
        left="50px"
      >
        Launchpad
      </Button>
      <Image
        src="https://mushroomprotocol.io/wp-content/uploads/2023/03/24-1024x991.png"
        alt="Imagen"
        boxSize="300px"
        position="absolute"
        top="50px"
        right="50px"
      />
      <Text
        fontSize="18px"
        position="absolute"
        top="260px"
        right="50px"
        maxWidth="40%"
        textAlign="justify"
      >
        Join our mission to advance biotechnology by funding impact research.
        With your valuable support, scientists will be able to develop solutions
        that will improve the lives of millions of people
      </Text>
    </Flex>
  );
};

export default Banner;
