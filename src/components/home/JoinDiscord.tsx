import { Box, Text, Button, Image, Flex } from "@chakra-ui/react";

const JoinDiscord = () => {
  return (
    <Flex
      width="1024px"
      height="380px"
      backgroundColor="#242222"
      color="#FFFFFF"
      paddingX="100px"
      paddingY="20px"
    >
      <Image
        src="https://mushroomprotocol.io/wp-content/uploads/2023/03/26.png"
        alt="Discord Image"
        width="300px"
        height="300px"
      />
      <Box flex="1" textAlign="right">
        <Text fontSize="36px" marginTop="10px">
          Join our community
        </Text>
        <Text fontSize="18px" color="#737373" marginTop="10px">
          Finances the biotechnology companies of tomorrow, contributes to their
          growth and promotes the advancement of science in Latin America.
        </Text>
        <Button
          fontSize="18px"
          color="#FFFFFF"
          backgroundColor="#1FAFC8"
          borderRadius="20px"
          marginTop="20px"
        >
          Discord
        </Button>
      </Box>
    </Flex>
  );
};

export default JoinDiscord;
