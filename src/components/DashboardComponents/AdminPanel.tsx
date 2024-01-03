import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { IncommingStartUp } from '../../declarations/backend/backend.did';

export const obtenerStartups = async () => {
  try {
    const response = await fetch('http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos de startups:', error);
    throw error;
  }
};

const AdminPanel: React.FC = () => {
  const [startups, setStartups] = useState<IncommingStartUp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerStartups();
        setStartups(data);
      } catch (error) {
        // Manejar el error, posiblemente mostrar un mensaje al usuario
      }
    };

    fetchData();
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez (equivalente a componentDidMount)

  return (
    <div>
      {startups.map((startup) => (
        <Box key={startup.startUpName} p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            {startup.startUpName}
          </Heading>
          <Text mt={2}>Email: {startup.email}</Text>
          <Text mt={2}>Website: {startup.website}</Text>
          {/* ... Agregar más líneas según sea necesario para mostrar la información */}
        </Box>
      ))}
    </div>
  );
};

export default AdminPanel;