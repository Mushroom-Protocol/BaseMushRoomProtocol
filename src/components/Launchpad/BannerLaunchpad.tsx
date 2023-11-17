import React from "react";
import { Box, Flex, Text, Button, Image,Stack } from "@chakra-ui/react";

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
      height="500px"
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
          colorScheme="teal"
          backgroundColor="#1FAFC8"
          variant="solid"
          mt="20px"
          borderRadius="full"
        >
          View All
        </Button>
      </Box>
      <Image
        src="https://mushroomprotocol.io/wp-content/uploads/2023/03/25.png"
        alt="Mushroom Protocol"
        width="450px"
        height="450px"
      />
    </Box>
    </Stack>
  );
};

export default BannerLaunchpad;
