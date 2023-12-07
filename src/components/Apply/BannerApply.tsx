import React from 'react';
import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { useNavigate } from 'react-router-dom';

const BannerApply = () => {
    const GitbookApplyLink = "https://mushroomprotocol.gitbook.io/docs/get-started/apply";

    const handleViewGuide = () => {
        window.open(GitbookApplyLink, '_blank', 'noopener noreferrer');
      };
      
  return (
    <Container maxW={'6xl'}>
      <Stack as={Box} textAlign={'center'} py={{ base: 20, md: 20 }}>
        <Heading
          fontWeight={650}
          fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
          lineHeight={'100%'}
          color={'#1FAFC8'}
          noOfLines={1}>
          NEED FUNDS TO DEVELOP YOUR SCIENCE?
        </Heading>
        <Text fontSize={{ base: '2xl', sm: '3xl', md: '3xl' }} color={'white'}>
        We connect your science with investors from all over the world
        </Text>
        <Stack
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
          spacing={4}
          direction='row'>
          {/* Utiliza el componente Link para la navegación */}
            <Button
              colorScheme={'blue'}
              borderRadius={'full'}
              bg={'#1FAFC8'}
              px={30}
              size='lg'
              _hover={{
                bg: '#01B994',
              }}
              onClick={handleViewGuide}
              >
              View Guide
            </Button>
        </Stack>
        <Text fontSize="20px" textColor="#737373">
        Equity-Free  ●  Decentralized Financing  ●  Fast Apply
        </Text>
      </Stack>
    </Container>
  );
};

export default BannerApply;
