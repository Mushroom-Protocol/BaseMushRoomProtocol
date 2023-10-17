import React from 'react';

import { WithSubnavigation,CallToActionWithAnnotation,BasicStatistics,LargeWithNewsletter } from '../components'
import TableTopUser4iIndustria from '../components/TableTopUser4iIndustria';
import {
  Flex
} from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <> 
    <Flex p={8}></Flex>
      <CallToActionWithAnnotation/>
      <BasicStatistics/>  
      <TableTopUser4iIndustria/>   
    </>
  )
}
