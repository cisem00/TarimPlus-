import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function FooterSmall() {
    return (
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        backgroundColor='gray.900'
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'} color='white'>Home</Link>
            <Link href={'#'} color='white'>About</Link>
            <Link href={'#'} color='white'>Blog</Link>
            <Link href={'#'} color='white'>Contact</Link>
          </Stack>
          <Text color='white'>© 2023 TarımPlus+. All rights reserved</Text>
        </Container>
      </Box>
    );
  }
  