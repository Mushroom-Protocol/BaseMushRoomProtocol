import React from "react";
import {
  Box,
  Text,
  Image,
  Badge,
  Button,
  Center,
  Flex
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const LaunchpadNFT = () => {
  const navigate = useNavigate();
  return (
  <Center>
    <Box
    
      color="#FFFFFF"
      w="1024px"
      h="700px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="16px" textAlign="center" my="20px">
        Mint your own Bio-NFT and accelerate the progress of science. Be part of
        scientific innovation!
      </Text>
      <Box
        
        borderWidth="0.5px"
        borderRadius="15px"
        borderColor="#FFFFFFF"
        backgroundColor="#000000"
        w="100%"
        display="flex"
        alignItems="center"
        p="55px"
      >
        <Box w="300px" h="460px"  borderRadius="25px">
          <Center>
            <Image
              src="https://mushroomprotocol.io/wp-content/uploads/2023/09/Nathera-NFT.png"
              alt="Nathera NFT"
              w="350px"
              h="290px"
              mt="0px"
            />
          </Center>
          <Box mt="5px" ml="58px" display="flex" alignItems="center">
            <Image
              src="https://mushroomprotocol.io/wp-content/uploads/2023/09/Nathera-logo.png"
              alt="Nathera Logo"
              w="40px"
              h="40px"
              mr="10px"
            />
            <Text fontSize="22px">Warrior Cells</Text>
          </Box>
          <Text
            fontSize="14px"
            color="#737373"
            mt="5px"
            mb="10px"
            textAlign="center"
          >
            Minted: 0 / 600
            <br />
            Raised: 0 / 3,000 ICP
          </Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Badge
              ml="50px"
              bg="#000000"
              borderColor="#1FAFC8"
              borderWidth="0.5px"
              color="#FFFFFF"
              fontSize="20px"
              p="5px"
              borderRadius="0.5rem"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
            >
              5
              <Image
                src="https://marketplace.funded.app/icp.svg"
                alt="ICP logo"
                w="25px"
                h="25px"
                ml="5px"
              />
            </Badge>
            <Button
              mr="50px"
              colorScheme="teal"
              backgroundColor="#1FAFC8"
              variant="solid"
              color="#000000"
              fontSize="xl"
              borderRadius="5px"
              _hover={{
                bg: '#01B994',
              }}
              onClick= {() => navigate("/Nathera")}
            >
              Details
            </Button>
          </Flex>
        </Box>
        <Box w="300px" h="460px"  borderRadius="25px">
          <Center>
            <Image
              src="https://mushroomprotocol.io/wp-content/uploads/2023/10/Mushroom-Founders.png"
              alt="Founders NFT"
              w="350px"
              h="290px"
              mt="0px"
            />
          </Center>
          <Box mt="5px" ml="20px" display="flex" alignItems="center">
            <Image
              src="https://mushroomprotocol.io/wp-content/uploads/2023/10/Mp-Favicon-1.png"
              alt="Mushroom Logo"
              w="40px"
              h="40px"
              mr="5px"
            />
            <Text fontSize="22px">Mushroom Founders</Text>
          </Box>
          <Text
            fontSize="14px"
            color="#737373"
            mt="5px"
            mb="10px"
            textAlign="center"
          >
            Minted: 0 / 250
            <br />
            Raised: 0 / 1250 ICP
          </Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Badge
              ml="50px"
              bg="#000000"
              borderColor="#1FAFC8"
              borderWidth="0.5px"
              color="#FFFFFF"
              fontSize="20px"
              p="5px"
              borderRadius="0.5rem"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
            >
              5
              <Image
                src="https://marketplace.funded.app/icp.svg"
                alt="ICP logo"
                w="25px"
                h="25px"
                ml="5px"
              />
            </Badge>
            <Button
              mr="50px"
              colorScheme="teal"
              backgroundColor="#1FAFC8"
              variant="solid"
              color="#000000"
              fontSize="xl"
              borderRadius="5px"
              _hover={{
                bg: '#01B994',
              }}
              onClick= {() => navigate("/Founders")}
            >
              Details
            </Button>
          </Flex>
        </Box>
        <Box w="300px" h="460px"  borderRadius="25px">
          <Center>
            <Image
              src="https://mushroomprotocol.io/wp-content/uploads/2023/09/EON-NFT.png"
              alt="EON NFT"
              w="350px"
              h="290px"
              mt="0px"
            />
          </Center>
          <Box mt="5px" ml="48px" display="flex" alignItems="center">
            <Image
              src="https://mushroomprotocol.io/wp-content/uploads/2023/09/EON-logo-v2.png"
              alt="EON Logo"
              w="40px"
              h="40px"
              mr="10px"
            />
            <Text fontSize="22px">Brocoli Pickers</Text>
          </Box>
          <Text
            fontSize="14px"
            color="#737373"
            mt="5px"
            mb="10px"
            textAlign="center"
          >
            Minted: 0 / 600
            <br />
            Raised: 0 / 3,000 ICP
          </Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Badge
              ml="50px"
              bg="#000000"
              borderColor="#1FAFC8"
              borderWidth="0.5px"
              color="#FFFFFF"
              fontSize="20px"
              p="5px"
              borderRadius="0.5rem"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
            >
              5
              <Image
                src="https://marketplace.funded.app/icp.svg"
                alt="ICP logo"
                w="25px"
                h="25px"
                ml="5px"
              />
            </Badge>
            <Button
              mr="50px"
              colorScheme="teal"
              backgroundColor="#1e1e1e"
              variant="solid"
              color="#000000"
              fontSize="xl"
              borderRadius="5px"
              _hover={{
                bg: '#1e1e1e'
                //bg: '#01B994',
              }}
            >
              Details
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  </Center>
  );
};

export default LaunchpadNFT;
