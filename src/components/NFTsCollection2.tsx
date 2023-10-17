import React from 'react';
import { Box, Text, Button, ButtonGroup, VStack, Image, SimpleGrid } from '@chakra-ui/react';
import { Avatar,Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider } from '@chakra-ui/react'
import { BiLike,BiChat,BiShare } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { NFT1, Collection1, NFT2 } from './../data/typesgen';

const NFTCollection = ({collection}: {collection: Collection1}) => (
  <div>
    <h2>{collection.collection.nameCollection}</h2>
    <img src={collection.collection.imgCollection} alt={collection.collection.nameCollection} />
    <p>{collection.collection.shortDescCollect}</p>
    {collection.collection.nfts.map((nft) => (
      <NFTCard key={nft.idNFT} nft={nft} />
    ))}
  </div>
);

const NFTCard = ({nft}: {nft: NFT1}) => (
  <div>
    <h3>{nft.nameNFT}</h3>
    <img src={nft.imageUrlNFT} alt={nft.nameNFT} />
    <p>{nft.shortDescNFT}</p>
    <p>Costo: {nft.costNFT}</p>
    <p>Propietario: {nft.ownerNFT}</p>
  </div>
);


export default function App() {
  return (
    <div className="App">
      {micollection.map((item, index) => (
        <NFTCollection key={index} collection={item} />
      ))}
    </div>
  );
}