import React, { useEffect, useState } from 'react';
import {
  GridItem,
  Box,
  Flex,
  Text,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { backend } from "../../declarations/backend";

const AdminPanel: React.FC = () => {
  const [startupInfo, setStartupInfo] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backend.getIncomingStartup();
        const data = response[0][1];
        setStartupInfo(`
          <span style="color: white; font-size: 26px;">${data.startUpName}</span>
          <br>${data.industry}<br>${data.fullNameTl}<br>${data.email}
        `);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener datos de startups:', error);
        // Puedes manejar el error de alguna manera, por ejemplo, mostrando un mensaje al usuario
      }
    };

    fetchData();
  }, []);

  return (
    <GridItem>
      <Tabs color="#737373" size="lg" justifyContent="space-between">
        <TabList>
          <Tab>Incoming Startup</Tab>
          <Tab>Approved Startup</Tab>
          <Tab>News Projects</Tab>
          <Tab>Approved Project</Tab>
          <Tab>News Collections</Tab>
          <Tab>Approved Collections</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {/* Contenido para la pestaña "Incoming Startup" */}
            <Flex alignItems="center" justifyContent='space-between'>
            <Box ml={0} style={{ fontSize: '18px', marginBottom: '8px' }}>
              <div dangerouslySetInnerHTML={{ __html: startupInfo || '' }} style={{ color: '#737373' }} />
            </Box>
            <Button backgroundColor="#1FAFC8" textColor="#000000" variant="solid" borderRadius="10px"_hover={{bg: '#01B994'}}
           // onClick={onOpen} // Abre modal de confirmación de minted
          >
            Approved
          </Button>
            </Flex>
          </TabPanel>
          <TabPanel>
            {/* Contenido para la pestaña "Approved Startup" */}
            <p></p>
          </TabPanel>
          <TabPanel>
            {/* Contenido para la pestaña "News Projects" */}
            <p></p>
          </TabPanel>
          <TabPanel>
            {/* Contenido para la pestaña "Approved Project" */}
            <p></p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </GridItem>
  );
};

export default AdminPanel;
