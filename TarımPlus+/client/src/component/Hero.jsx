import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  
  import anaResim from '../images/foto2.png';
  import { Link } from 'react-router-dom';
  
  export default function Hero({ scrollToLearn }) {  
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 20, md: 28 }}
          // pb={{ base: 10, md: 14 }}
        >
          <Heading
            fontWeight={750}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            as={'span'}
            bgGradient={'linear(to-r, orange.300, orange.600)'}
            bgClip="text"
          >
            TarımPlus+
          </Heading>
          <Text fontSize="large" color={'blue.50'} maxW={'3xl'}>
          Sürdürülebilir tarımın öncüsü olarak, 
          doğaya saygıyla beslenen bir gelecek inşa ediyoruz. 
          Toprak sevgisiyle büyüyen ürünlerimiz, sağlıklı yaşamın temel taşıdır. 
          Birlikte, tarımın zengin mirasını koruyarak, gelecek nesillere daha yeşil bir dünya bırakıyoruz.
          </Text>
          <Stack spacing={6} direction={'row'} mb="10px">
            <Link to={'/register'}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'green'}
                bgGradient="linear(to-r, orange.300, orange.600)"
                _hover={{ bgGradient: 'linear(to-r, orange.200, orange.500)' }}
              >
                Başla
              </Button>
            </Link>
            <Button 
            onClick={scrollToLearn} 
            rounded={'full'} 
            px={6}
            colorScheme={'green'}
            bgGradient="linear(to-r, orange.600, orange.300)"
            _hover={{ bgGradient: 'linear(to-r, orange.200, orange.500)' }}
            >
               Keşfet
            </Button>
          </Stack>
          <Flex maxWidth={'550px'} pt={'50px'} justify="center" align="center">
            <img src={anaResim}></img>
          </Flex>
        </Stack>
      </Container>
    );
  }