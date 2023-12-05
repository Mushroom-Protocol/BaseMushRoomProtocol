import { Center, Box, Text, Button, Image, Flex } from "@chakra-ui/react";
import imgHome7 from "/home/udo/Front/BaseMushRoomProtocol/src/assets/7.png";

const JoinDiscord = () => {
  const discordLink = "https://discord.gg/wxe4aMwZWT";

  const handleJoinDiscord = () => {
    window.open(discordLink, "_blank");
  };

  return (
  <Center>
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
        Finances the biotechnology companies of tomorrow, contributes to their growth and promotes the advancement of science in Latin America.
        </Text>
        <Button
          fontSize="18px"
          color="#FFFFFF"
          backgroundColor="#1FAFC8"
          borderRadius="20px"
          marginTop="20px"
          onClick={handleJoinDiscord}
        >
          Join Discord
        </Button>
      </Box>
    </Flex>
    </Center>
  );
};

export default JoinDiscord;
