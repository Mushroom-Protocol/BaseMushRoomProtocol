import React, { ReactNode } from 'react';
import {
  Avatar,
  Box,
  CloseButton,
  HStack,
  Image,
  Flex,
  Text,
  IconButton,
  Link,
  Drawer,
  DrawerContent,
  VStack,
  Icon,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { BsCollection } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineHowToVote } from "react-icons/md";
import { GiMicroscope } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import LogoNegro from "../assets/LogoNegro.png"
import NatheraTeamAA from "../assets/NatheraTeamAA.jpg"

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Portfolio', icon: BsCollection},
  { name: 'Launchpad', icon: BsFillRocketTakeoffFill },
  { name: 'FungiDAO', icon: MdOutlineHowToVote },
  { name: 'For Researcher', icon: GiMicroscope },
  { name: 'Admin', icon: RiAdminFill },
  { name: 'Settings', icon: FiSettings },
];

export default function DashboardSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="#000000">
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps {
  onClose: () => void;
  display?: { base: string; md: string };
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="#000000"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="10" justifyContent="space-between">
        <Image
            src={LogoNegro}
            alt="Profile"

            />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="8"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#1FAFC8',
          color: '#000000',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="20"
            _groupHover={{
              color: '#000000',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="24"
      alignItems="center"
      bg="#000000"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
        <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'md'}
                  src={NatheraTeamAA}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="md">Justina Clark</Text>
                  <Text fontSize="sm" color="gray.600">
                    Team Leader
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg="#000000"
              borderColor="#000000"
              textColor="#FFFFFF">
              <MenuItem>Profile</MenuItem>
              <MenuItem>Badges</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Disconnect</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
