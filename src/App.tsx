import * as React from 'react';
import { WithSubnavigation,CallToActionWithAnnotation,BasicStatistics,ShowTeam,LargeWithNewsletter } from './components'
//data de Colecciones de NFTS de pruebas
import micollection from './data/collections';
// IMPORTACIONES PARA LA CONEXION CON INTERNET IDENTITY Y OTRAS WALLETS
//import { createClient } from "@connect2ic/core";
//import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
//import { ConnectButton, ConnectDialog, Connect2ICProvider,useConnect  } from "@connect2ic/react";
//import "@connect2ic/core/style.css";
// FIN DE IMPORTACION PARA CONNECT2IC
import { Flex } from '@chakra-ui/react';
import { backend } from './declarations/backend';
import { NFT1, Collection1 } from './data/typesgen';
import { Box, Text, Button, ButtonGroup, VStack, Image, SimpleGrid } from '@chakra-ui/react';
import { Avatar,Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider } from '@chakra-ui/react'
import { BiLike,BiChat,BiShare } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';
import { router } from './router/AppRouter';
import { RouterProvider } from "react-router-dom";


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </> 

  )
};

export default () => (
     <App />
 )

