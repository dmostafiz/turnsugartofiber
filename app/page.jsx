import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'

export default function page() {
  return (
    <Box h={'100vh'} w={'full'}>
        <Center h={'full'} w={'full'} px={5}>
           <Image w={'300px'} src='/logo.png' />
        </Center>
    </Box>
  )
}
