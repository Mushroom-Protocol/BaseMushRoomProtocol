import { Box, Text, Button, Image, Flex } from "@chakra-ui/react";
import imgHome7 from "/home/udo/Front/BaseMushRoomProtocol/src/assets/7.png"
const JoinDiscord = () => {
  return (
    <Flex
      width="1024px"
      height="380px"
      color="#FFFFFF"
      paddingX="100px"
      paddingY="20px"
    >
      <Image
        src={imgHome7}
        alt="Discord Image"
        width="300px"
        height="300px"
      />
      <Box flex="1" textAlign="right">
        <Text fontSize="36px" marginTop="10px">
          Join our community
        </Text>
        <Text fontSize="18px" color="#737373" marginTop="10px">
        Driving a financial revolution in science & technology 
        </Text>
        <Button
          fontSize="18px"
          color="#FFFFFF"
          backgroundColor="#1FAFC8"
          borderRadius="20px"
          marginTop="20px"
        >
          Join Discord
        </Button>
      </Box>
    </Flex>
  );
};

export default JoinDiscord;
