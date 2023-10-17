'use client'

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsCollectionFill } from 'react-icons/bs'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { RiNftFill } from 'react-icons/ri'
import { AiOutlineTransaction } from 'react-icons/ai'



interface StatsCardProps {
  title: string
  stat: string
  icon: ReactNode
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
           <StatNumber fontSize={'5xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
          <StatLabel fontWeight={'medium'} fontSize={'2xl'} isTruncated>
            {title}
          </StatLabel>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
    { /* <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        Lo que esta pasando en la organización.
  </chakra.h1> */}
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Collections'} stat={'2'} icon={<BsCollectionFill size={'3em'} />} />
        <StatsCard title={'ValueLocked'} stat={'40,000'} icon={<MdOutlineAttachMoney size={'3em'} />} />
        <StatsCard title={'NFTMinted'} stat={'7'} icon={<RiNftFill size={'3em'} />} />
        <StatsCard title={'Transacciones'} stat={'7'} icon={<AiOutlineTransaction size={'3em'} />} />
      </SimpleGrid>
    </Box>
  )
}