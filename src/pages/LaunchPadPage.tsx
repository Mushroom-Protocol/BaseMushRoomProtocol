import React from 'react'
import ColorModeToggle from '../components/ColorModeToggle';
import { Box, Text, Button, ButtonGroup, VStack, Image, SimpleGrid } from '@chakra-ui/react';
import { Avatar,Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider } from '@chakra-ui/react'
import { BiLike,BiChat,BiShare } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { NFT1, Collection1, NFT2 } from './../data/typesgen';
import micollection from '../data/collections';

const NFTCollection = ({collection}: {collection: Collection1}) => (
    <>
        <Box mb={8}>
        <Text fontSize="2xl" mb={4}>ID de Colección: {collection.collection.idCollection}</Text>
        <Text fontSize="2xl" mb={4}>Nombre: {collection.collection.nameCollection}</Text>
        <Text fontSize="2xl" mb={4}>Descripción: {collection.collection.shortDescCollect}</Text>
        <SimpleGrid columns={4} spacing={5}>
      {collection.collection.nfts.map((nft) => (
        <NFTCard key={nft.idNFT} nft={nft} />
      ))}
      </SimpleGrid>
      </Box>  
    </>   
  
  );
  
  const handleMint = () => {
  //Lógica para acuñar el NFT
    console.log("minteado");
  };
  const NFTCard = ({nft}: {nft: NFT1}) => (
    <>
  <Card maxW='sm'>
   <CardBody>
    <Image boxSize='400px' src={nft.imageUrlNFT} alt={`NFT ${nft.idNFT}`} borderRadius='lg'/>
     <Stack mt='6' spacing='3'>   
     <Heading size='md'><Text>{nft.nameNFT}</Text></Heading>
     <Text>{nft.shortDescNFT}</Text>
     <Text>ID: {nft.idNFT}</Text>
     <Text>Costo: {nft.costNFT}</Text>
     <Text>Propietario: {nft.ownerNFT.slice(0, 6)}...{nft.ownerNFT.slice(-4)}</Text>     
     </Stack>    
     </CardBody>
     <Divider />
     <CardFooter>
     <ButtonGroup spacing='2'>
     <Button colorScheme="teal" variant="solid" onClick={handleMint}>
      Mint
     </Button>
      <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<FaShare />}>
       Share
      </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  </>  
  );
export const LaunchPadPage = () => {
  return (
    <>
    <h1>LaunchPadPage</h1>
    {micollection.map((item, index) => (
        <NFTCollection key={index} collection={item} />
      ))} 
    </>  
  )
}
