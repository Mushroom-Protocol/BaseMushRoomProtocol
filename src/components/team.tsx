'use client'

import {
  Box,
  Center,
  chakra,
  Container,
  Grid,
  SimpleGrid,
  Image,
  Stack,
  Text,
  Flex,
  Avatar,
  Badge
} from '@chakra-ui/react'
import { ReactNode } from 'react';

export default function ShowTeam(){
    return(
        <>

<SimpleGrid columns={[2,null,3]} spacingX='80px' spacingY='40px'>
   <Box height='80px' alignItems='center'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Esteban.jpeg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Esteban Arenillas
    </Text>
    <Text fontSize='md'>BioTech</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Tomás.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Tomas Ortega
    </Text>
    <Text fontSize='md'>BioTech</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Andrés.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Andrés Peña
    </Text>
    <Text fontSize='md'>BioTech</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px' alignItems='center'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Alfonso.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Alfonso Segovia
    </Text>
    <Text fontSize='md'>Developer</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Ariel.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Ariel Robotti
    </Text>
    <Text fontSize='md'>Developer</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Luz_Dary.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Luz Dary López
    </Text>
    <Text fontSize='md'>Web 3</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px' alignItems='center'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Dimitri.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Dimitri Orga
    </Text>
    <Text fontSize='md'>Developer</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Mariano.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Mariano Camere
    </Text>
    <Text fontSize='md'>Developer</Text>
  </Box>
</Flex>
  </Box>
  <Box height='80px'>
  <Flex  alignItems='center'>
  <Avatar src='/assets/Martín.jpg' size='xl' />
  <Box ml='3'>
    <Text fontWeight='bold' fontSize='xl'>
      Martín Sangiacomo
    </Text>
    <Text fontSize='md'>Web 3</Text>
  </Box>
</Flex>
  </Box>
</SimpleGrid>
</>
)
}
