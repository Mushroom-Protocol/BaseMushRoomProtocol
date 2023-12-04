'use client'
import ColorModeToggle from './ColorModeToggle';
//import { ConnectButton, ConnectDialog, Connect2ICProvider,useConnect  } from "@connect2ic/react";
//import "@connect2ic/core/style.css";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import Logo  from './../assets/Logo.png' 
import { useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { EstadoContext } from './utils/estadoContex'; 
import { backend } from '../declarations/backend';
interface Props {
  children: React.ReactNode
}
const Links = ['Home', 'Launchpad', 'Apply']
//const { estado, setEstado } = useContext(EstadoContext);

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href='/Home'>
      {children}
    </Box>
  )
}

export default function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false);
  const estadoContext = useContext(EstadoContext);
if (!estadoContext) {
  throw new Error('El componente debe estar dentro de un estadoContext');
}

const { estado, setEstado } = estadoContext;

const fetchMessage = async () => {
  try {
    setLoading(true);
    const estado1 = await backend.getMessage1();
    setEstado(estado1); 
  } catch (err) {
    console.error(err);
  } finally {
   console.log("El mensaje del backend es" + estado);     
    setLoading(false);
  }
};

// Fetch the message on page load
useEffect(() => {
fetchMessage();
}, [estado]);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image 
              boxSize='140px'
              height='30%'
              src={Logo} 
              alt='Logo Mushhroom'
              />
              </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                //<Text key={link}>{link}</Text>
                 <Box
                 px={2}
                 py={5}
                 rounded={'md'}
                 _hover={{
                   textDecoration: 'none',
                   bg: useColorModeValue('gray.200', 'gray.700'),
                 }} key={link}>
            <ChakraLink as={ReactRouterLink} to={`/${link}`}>
                <Text fontSize='2xl' as='b'>
                  {link}
                </Text>                  
              </ChakraLink>
              </Box>
                //<NavLink key={link}><Text fontSize='2xl' as='b'>{link}</Text></NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          
          <ColorModeToggle/>
            <div id="botonConexion"></div>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={40} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box shadow='md' borderWidth='1px' bg='blue.500' w='100%' p={4} color='white'>
      { "This message comes from backend: " + estado }
      </Box>
    </>
  )
}