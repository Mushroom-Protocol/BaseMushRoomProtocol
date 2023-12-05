import React from "react";
import { Center, Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

const Banner = () => {
  return (
  <Center>
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
        left="0px"
        textAlign="left"
        maxWidth="50%"
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
        top="210px"
        left="0px"
      >
        Launchpad
      </Button>
      <Image
        src="https://mushroomprotocol.io/wp-content/uploads/2023/03/24-1024x991.png"
        alt="Imagen"
        boxSize="400px"
        position="absolute"
        top="0px"
        right="0px"
      />
      <Text
        fontSize="18px"
        position="absolute"
        top="300px"
        right="0px"
        maxWidth="50%"
        textAlign="justify"
      >
        Join our mission to advance biotechnology by funding impact research.
        With your valuable support, scientists will be able to develop solutions
        that will improve the lives of millions of people
      </Text>
    </Flex>
    </Center>
  );
};

export default Banner;
