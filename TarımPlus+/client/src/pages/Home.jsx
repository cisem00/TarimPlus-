import { Box,useColorModeValue} from '@chakra-ui/react';
import { useRef } from 'react';

import Hero from '../component/Hero';
import Footer from '../component/Footer';
import Features from '../component/Features';

export default function Home() {
  const ref = useRef(null);
  const scrollToLearn = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      minH={' calc(100vh - 64px)'}
      align={'center'}
      justify={'center'}
      backgroundColor='gray.800'
    >
      <Hero scrollToLearn={scrollToLearn} />
      <Features reference={ref} />
      <Footer />
    </Box>
  );
}
