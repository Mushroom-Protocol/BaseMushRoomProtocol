import * as React from 'react';
import { WithSubnavigation,CallToActionWithAnnotation,BasicStatistics,ShowTeam,LargeWithNewsletter } from './components'
//data de Colecciones de NFTS de pruebas
import micollection from './data/collections';
// IMPORTACIONES PARA LA CONEXION CON INTERNET IDENTITY Y OTRAS WALLETS
import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { ConnectButton, ConnectDialog, Connect2ICProvider,useConnect  } from "@connect2ic/react";
import "@connect2ic/core/style.css";
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
import { useEffect, useState,useContext } from 'react';
import { Alert,AlertIcon } from '@chakra-ui/react';
import { EstadoProvider, EstadoContext } from './components/utils/estadoContex';

const client = createClient({
  /*  canisters: {
      backend,
   },*/
    providers: [
      new InternetIdentity({ 
        //providerUrl: "http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai"
        providerUrl: "https://identity.ic0.app/"
      })
    ],
    globalProviderConfig: {
      /*
       * Disables dev mode in production
       * Should be enabled when using local canisters
       */
      dev: true,
    },
  })  


function App() {
  //const [estado, setEstado] = useState('');
  //  const [loading, setLoading] = useState(false);
  // @connect2ic
const { isConnected, principal, activeProvider } = useConnect({
  onConnect: () => {
    // Signed in

  },
  onDisconnect: () => {
    // Signed out
  }
});
  // @connect2ic



  

  return ( 
    <>
     <Alert status='info'>
    <AlertIcon />    
    <ConnectButton/>
    <ConnectDialog/>
    <h1 className="h1 text-center border-b border-gray-500 pb-2">Hi {principal ? principal : ", connect your Internet Identity or Wallet to have a better experience in the MushRoom Protocol platform."}!</h1> 
    </Alert>    
    <EstadoProvider>
    <RouterProvider router={router}/>    
     </EstadoProvider>
     </>
  )  
};

export default () => (
  <Connect2ICProvider client={client}> 
  <App />         
  </Connect2ICProvider>
)

// export default App;
