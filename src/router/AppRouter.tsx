import {  createBrowserRouter, Navigate } from "react-router-dom";
import { WithSubnavigation,CallToActionWithAnnotation,BasicStatistics,LargeWithNewsletter } from '../components'

import { HomePage } from "../pages/HomePage";
import LaunchPadPage from '../pages/LaunchPadPage';
import ErrorPage from "../pages/error-page";
import { Outlet } from "react-router-dom";
import FungiDAOPage from "../pages/FungiDAOPage";
import MarketPlacePage from "../pages/MarketPlacePage";
import StakingPage from "../pages/StakinPage";
import VaultPage from "../pages/VaultPage";
import NatheraPage from "../pages/NatheraPage";
import { EstadoProvider } from '../components/utils/estadoContex';
function Layout() {
  return (
      <>
      <EstadoProvider>
        <WithSubnavigation />
        <Outlet />
        <LargeWithNewsletter />
        </EstadoProvider>
      </>
  );
}



export const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children: [  
                    {      
                        path:"/",
                        element:<Navigate to="Home" />,
                    },
                    {   
                        path:"Home", 
                        element:<HomePage/>
                    },
                    {
                    path:"LaunchPad", 
                    element:<LaunchPadPage/>
                    },
                    {   
                        path:"FungiDAO", 
                        element:<FungiDAOPage/>
                    },
                    {
                        path:"Nathera", 
                        element:<NatheraPage/>
                    },
                    {
                    path:"MarketPlace", 
                    element:<MarketPlacePage/>
                    },
                    {   
                        path:"Staking", 
                        element:<StakingPage/>
                    },
                    {
                    path:"Vault", 
                    element:<VaultPage/>
                    },
                  ]
    }
  ])