import React from "react";
import { Box, Flex, Text, Button, Image,Stack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const BannerLaunchpad = () => {


  return (
    <Stack
    align={'center'}
    alignItems="center"
    >
     <Box
      //bg="#242222"
      color="#FFFFFF"
      width="1024px"
      height="400px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="50px"
    >
      <Box>
        <Text fontSize="22px" color="#737373" textAlign="left">
          Finance the Biotechnology companies of the future
        </Text>
        <Text fontSize="38px" textAlign="left" mt="10px">
          Mushroom Protocol Launchpad
        </Text>
        <Button
          colorScheme="blue"
          backgroundColor="#1FAFC8"
          variant="solid"
          mt="20px"
          borderRadius="full"
          _hover={{
            bg: '#01B994',
          }}
        >
          VIEW ALL
        </Button>
      </Box>
      <Image
        src="https://mushroomprotocol.io/wp-content/uploads/2023/03/25.png"
        alt="Mushroom Protocol"
        width="350px"
        height="350px"
      />
    </Box>
    </Stack>
  );
};

export default BannerLaunchpad;
