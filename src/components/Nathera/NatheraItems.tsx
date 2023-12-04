import React, { useState } from "react";
import { Grid, GridItem, Box, Text, Tag, Button } from "@chakra-ui/react";

const NatheraItems = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"120px 1fr 30px"}
      gridTemplateColumns={"450px 1fr"}
      h="530px"
      w="1024px"
      gap="0"
      color="#000"
      fontWeight="bold"
    >
      <GridItem
        pl="20"
        bg="#242222"
        area="header"
        display="flex"
        alignItems="center"
      >
        <Box
          bgImage="url(https://mushroomprotocol.io/wp-content/uploads/2023/09/Nathera-logo.png)"
          bgSize="60px 60px"
          bgRepeat="no-repeat"
          w="60px"
          h="60px"
        />
        <Box
          ml="4"
          marginBottom="3"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontSize="30px" color="#FFFFFF">
            Warrior Cells
          </Text>
          <Tag
            variant="subtle"
            colorScheme="teal"
            backgroundColor="#242222"
            color="#FFFFFF"
            borderColor="#1FAFC8"
            borderWidth="1px"
            fontSize="12px"
            mr="20"
          >
            Total Items: 1000
          </Tag>
        </Box>
      </GridItem>
      <GridItem
        pl="2"
        bg="#242222"
        area="nav"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bgImage="url(https://mushroomprotocol.io/wp-content/uploads/2023/10/Nathera-NFT.png)"
          bgSize="300px 400px"
          bgRepeat="no-repeat"
          w="300px"
          h="400px"
        />
      </GridItem>
      <GridItem
        pl="2"
        bg="#242222"
        area="main"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="20px"
      >
        <Box display="flex" alignItems="flex-start">
          <Box
            backgroundColor="#1E1E1E"
            color="#FFFFFF"
            fontSize="18px"
            display="flex"
            alignItems="center"
            p="5px"
            borderRadius="10px"
            border="1px solid #1FAFC8"
          >
            Price: 5
            <img
              src="https://marketplace.funded.app/icp.svg"
              alt="Icon"
              width="22"
              height="22"
              style={{ marginLeft: "5px" }}
            />
          </Box>
        </Box>
        <Box
          backgroundColor="#1E1E1E"
          height="40px"
          width="500px"
          borderRadius="5px"
          marginTop="30px"
          position="relative"
        >
          <Box
            backgroundColor="#1FAFC8"
            height="100%"
            width="10%" // Ajusta el ancho según el progreso real
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Text fontSize="18px" color="#FFFFFF" marginLeft="5px">
              0%
            </Text>
          </Box>
        </Box>
        <Text fontSize="18px" color="#FFFFFF" marginTop="10px">
          Minted: 0 / 600
        </Text>
        <Box display="flex" alignItems="center" marginTop="20px">
          <Button size="sm" marginRight="10px" onClick={handleDecrease}>
            -
          </Button>
          <Text fontSize="15px" color="#FFFFFF">
            {quantity}
          </Text>
          <Button size="sm" marginLeft="10px" onClick={handleIncrease}>
            +
          </Button>
          <Button
            colorScheme="teal"
            backgroundColor="#1FAFC8"
            variant="solid"
            ml="10px"
            borderRadius="10px"
          >
            Coming Soon
          </Button>
        </Box>
        <Text
          fontSize="14px"
          color="#737373"
          fontStyle="italic"
          mr="20"
          marginTop="40px"
        >
          * At the time of minted you are exchanging your crypto assets for a
          random NFT within the NFTs pool.
        </Text>
      </GridItem>
      <GridItem
        pl="2"
        bg="#242222"
        area="footer"
        display="flex"
        alignItems="center"
      ></GridItem>
    </Grid>
  );
};

export default NatheraItems;
