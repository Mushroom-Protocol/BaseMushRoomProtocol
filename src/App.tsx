import * as React from 'react';
import WithSubnavigation from './components/WithSubnavigation';
import CallToActionWithAnnotation from './components/CallToActionWithAnnotation';
import SplitWithImage from './components/SplitWithImage';
import ShowTeam from './components/team';
import LargeWithNewsletter from './components/LargeWithNewsletter';
// IMPORTACIONES PARA LA CONEXION CON INTERNET IDENTITY Y OTRAS WALLETS
import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { ConnectButton, ConnectDialog, Connect2ICProvider,useConnect  } from "@connect2ic/react";
import "@connect2ic/core/style.css";
// FIN DE IMPORTACION PARA CONNECT2IC
import { Flex } from '@chakra-ui/react';
import { backend } from './declarations/backend';

//// SE CREA PARA INICIALIZAR LA CONFIGURACION DEL CONNECT2IC
const client = createClient({
  //    canisters: {
  //      backend,
  //    }
      providers: [
        new InternetIdentity({ providerUrl: "http://127.0.0.1:4943/?canisterId=asrmz-lmaaa-aaaaa-qaaeq-cai" })
      // se debe cambiar a esta linea  cuando este en mainnet:
    //new InternetIdentity({ providerUrl: "https://identity.ic0.app/" })
    // o probar: providers={defaultProviders}
      ],
      globalProviderConfig: {
        /*
         * Disables dev mode in production
         * Should be enabled when using local canisters
         */
        dev: true,
      },
    })
 /////   

function App() {
  const { isConnected, principal, activeProvider } = useConnect({
    onConnect: () => {
      // Signed in

    },
    onDisconnect: () => {
      // Signed out
    }
  })

  return (
    <>   
     <WithSubnavigation/>
      <ConnectDialog dark={true}/>
      <h1 className="h1 text-center border-b border-gray-500 pb-2">Hi {principal ? principal : ", connect with Internet Identity to continue"}!</h1>
      <CallToActionWithAnnotation/>
      <SplitWithImage/>     
      <Flex p={8}></Flex>
      <ShowTeam/>
      <Flex p={8}></Flex>
      <LargeWithNewsletter/>
      </>
  )
}

export default () => (
  <Connect2ICProvider client={client}>
     <App />
  </Connect2ICProvider>
 )

