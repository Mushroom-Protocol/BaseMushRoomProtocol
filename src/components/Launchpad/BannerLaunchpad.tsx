import React from "react";
import { Box, Flex, Text, Button, Image,Stack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const BannerLaunchpad = () => {
  const GitbookLink = "https://mushroomprotocol.gitbook.io/docs/";

  const handleLearnMore = () => {
    window.open(GitbookLink, "_blank");
  };
  return (
    <Stack
    align={'center'}
    alignItems="center"
    >
     <Box
      //bg="#242222"
      color="#FFFFFF"
      width="1024px"
      height="300px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="30px"
    >
      <Box>
        <Text fontSize="22px" color="#737373" textAlign="left">
          Finance the Biotechnology companies of the future
        </Text>
        <Text fontSize="38px" textAlign="left" mt="0px">
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
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
      </Box>
      <Image
        src="https://mushroomprotocol.io/wp-content/uploads/2023/03/25.png"
        alt="Mushroom Protocol"
        width="250px"
        height="250px"
      />
    </Box>
    </Stack>
  );
};

export default BannerLaunchpad;
