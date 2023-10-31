import React from "react";
import { Heading, HStack, VStack, Box, Flex, Text, Image } from "@chakra-ui/react";
import mainImg1 from "./../../assets/patch768x768.jpg"
import logoNathera from "./../../assets/Nathera-logo.png"
import nanoCouting from "./../../assets/nanocouting.jpg"
import logoEon from "./../../assets/EON-logo-v2.png"
const FundedProjects = () => {
  return (
    <>
<Flex
      color="#FFFFFF"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100vw"
        height="130vh"
    >
      
      <Heading>
      Funded Projects
      </Heading>
      <Flex p={6}></Flex>
      <HStack spacing='100px'>
                  <VStack maxW='sm'>
                    {/* Caja 1 - Izquierda */}
                  <Box
                  overflow='hidden'        
                    border="1px solid #1FAFC8"
                    borderRadius="lg"
                    maxW='sm'
                    position="relative"       
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Image
                      src={mainImg1}
                      alt="Main Image 1"
                    />
                    <Box display="flex" alignItems="center" mt="20px">
                      <Image
                        src={logoNathera}
                        alt="Secondary Image 1"
                        w="50px"
                        h="50px"
                        mr="10px"
                      />

                      <Text fontSize="25px">NATHERA</Text>
                    </Box>
                    <Box  p={4}>  
                    <Heading size='md'>
                      Nanotherapy to improve well-being
                    </Heading>

                    <Text fontSize="16px" color="#737373" textAlign="justify" my="10px">
                      The project is developing a treatment for musculoskeletal diseases
                      such as arthrosis, low back pain, and rheumatoid arthritis using
                      nanotechnology.
                    </Text>
                    </Box>
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
                    <Flex p={3}></Flex>
                  </Box>
              </VStack>
              <VStack>
                {/* Caja 2 - Derecha */}
              <Box
                overflow='hidden'        
                border="1px solid #1FAFC8"
                borderRadius="lg"
                maxW='sm'
                position="relative"       
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
                <Image
                  src={nanoCouting}
                  alt="Main Image 2"
                />

                <Box display="flex" alignItems="center" mt="20px">
                  <Image
                    src={logoEon}
                    alt="Secondary Image 2"
                    w="50px"
                    h="50px"
                    mr="10px"
                  />
                  <Text fontSize="25px">EON</Text>
                </Box>
                <Box  p={4}>  
                <Heading size='md'>
                  Extends the shelf life of food
                </Heading>
                <Text fontSize="16px" color="#737373" textAlign="justify" my="10px">
                  Every year, tons of food are wasted during export and transportation.
                  EON develops a coating to extend the shelf life of food.
                </Text>
                </Box>

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
                <Flex p={3}></Flex>
              </Box>
              </VStack>
              </HStack>
</Flex>
<Flex p={10}></Flex>
 </>
  );
};

export default FundedProjects;
