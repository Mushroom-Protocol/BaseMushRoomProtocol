import React from "react";
import { Box, Flex, HStack, Text,VStack,Heading } from "@chakra-ui/react";

const badgeStyle = {
  backgroundColor: "#1FAFC8", // Color de fondo celeste
  color: "#FFFFFF", // Color de letras blancas
  fontSize: "18px", // Tamaño de letra 18
  padding: "5px 10px",
  borderRadius: "10px",
  marginLeft: "10px"
};

const Dappfunctions = () => {
  return (
    <Flex
      color="#FFFFFF"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100vw"
        height="70vh"
    >
      
      <Heading>
        Dapp functions
      </Heading>
      <Flex p={6}></Flex>
      <HStack spacing='100px'>
      <VStack maxW='sm' spacing='30px'>
      <Box maxW='sm'>
        <Text fontSize="25px">Launchpad NFT</Text>
        <Text color="#737373" fontSize="22px">
          Mint NFTs based in R&D and finance biotechnology
        </Text>
      </Box>

      <Box maxW='sm'>
        <Text fontSize="25px">Marketplace NFT</Text>
        <Text color="#737373" fontSize="22px">
          Trade your NFTs in a decentralized way
        </Text>
      </Box>

      <Box maxW='sm'>
        <Text fontSize="25px">FungiDAO</Text>
        <Text color="#737373" fontSize="22px">
          Trade your NFTs in a decentralized way
        </Text>
      </Box>
      </VStack>
      <VStack maxW='sm' spacing='30px' alignItems='left'>
      <Box alignItems='left'>
        <Text fontSize="25px">
          Staking <span style={badgeStyle}>Coming Soon</span>
        </Text>
        <Text color="#737373" fontSize="22px">
          Lock your NFTs and earn rewards
        </Text>
      </Box>

      <Box alignItems='left'>
        <Text fontSize="25px">
          Vault <span style={badgeStyle}>Coming Soon</span>
        </Text>
        <Text color="#737373" fontSize="22px">
          Store your NFTs safely and earn profits
        </Text>
      </Box>
      </VStack>
      </HStack>
    </Flex>
  );
};

export default Dappfunctions;
