import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  import foto5 from '../images/foto5.png';
  import foto4 from '../images/foto4.png';
  //import isci from '../images/işçi2.png';
  import { Link } from 'react-router-dom';
  
  export default function Features({ reference }) {
    return (
      <Container ref={reference} maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 30, md: 40 }}
          pb={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                bgGradient="linear(to-r, orange.300, orange.600)"
                bgClip="text"
              >
                Bereket toprakta,
              </Text>
              <br />
  
              <Text
                as={'span'}
                position={'relative'}
                zIndex={'1'}
                color="white"
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bgGradient:'linear(to-r, orange.600, orange.800)',
                  zIndex: -1,
                }}
              >
                 yaşam tarlada
              </Text>
              <br />
            </Heading>
            <Text color={'blue.50'}>
            Toprağın sıcaklığıyla yeşeren ürünlerimiz, 
            hem sofralarınızı hem de iş hayatınızı zenginleştiriyor.
             Müşteriyle buluştuğumuzda sadece ürün değil, bir dostluk da büyüyor. 
             Birlikte çıktığımız bu yolculukta, müşterilerimize lezzet sunarken işçilerimize de sevgiyle dokunuyoruz.
            </Text>
            <Stack
              align={'center'}
              justify={'center'}
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Link to={'/urunilanlari'}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme="blue"
                  bgGradient="linear(to-r, orange.300, orange.600)"
                  _hover={{ bgGradient: 'linear(to-r, orange.200, orange.500)' }}
                >
                  Ürünlere Göz At
                </Button>
              </Link>
              <Link to={'/ilanyarat'}>
                <Button 
                rounded={'full'} 
                size={'lg'} fontWeight={'normal'} 
                px={6}
                colorScheme="green"
                bgGradient="linear(to-r, orange.600, orange.300)"
                _hover={{ bgGradient: 'linear(to-r, orange.200, orange.500)' }}
                >
                  İlan Oluştur
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'100%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={0}
              color={useColorModeValue('orange.400', 'orange.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={foto5}
              />
            </Box>
          </Flex>
        </Stack>
  
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'100%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={0}
              color={useColorModeValue('orange.500', 'orange.500')}
            />
            <Box
              position={'relative'}
              height={'350px'}
              rounded={'2xl'}
              // boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                //   fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={foto4}
              />
            </Box>
          </Flex>
  
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                bgGradient="linear(to-r, orange.300, orange.600)"
                bgClip={'text'}
              >
                "Toprak, lezzet, 
              </Text>
              <br />
  
              <Text
                as={'span'}
                position={'relative'}
                zIndex={'1'}
                color="white"
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bgGradient:'linear(to-r, orange.600, orange.800)',
                  zIndex: -1,
                }}
              >
                emek sofrada buluşuyor
              </Text>
              <br />
            </Heading>
            <Text color={'gray.500'}>
            Toprağın derinliklerinde doğan lezzet, 
            çiftçi ve işçilerimizin özverisiyle sofranıza ulaşıyor. 
            Siz değerli müşterilerimizle buluşan her ürün, 
            birbirinden özel emeklerin birleşiminden doğan bir lezzet şöleni sunuyor. 
            Tarladan sofraya uzanan bu öyküde, sizinle paylaştığımız her an, kalite ve güvenin bir izdüşümüdür.
            </Text>
            <Stack
              align={'center'}
              justify={'center'}
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Link to={'/isilanlari'}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  bgGradient="linear(to-r, orange.300, orange.600)"
                  _hover={{ bgGradient: 'linear(to-r, orange.200, orange.500)' }}
                >
                 İş İlanlarına Göz At
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    );
  }
  
  export const Blob = props => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };
  