import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Giris from './pages/Giris';
import UyeOl from './pages/UyeOl';
import Urunilanlari from './pages/Urunilanlari';
import İsilanlari from './pages/İsilanlari';
import İsciilanlari from './pages/İsciilanlari';
import IlanYarat from './pages/ilanYarat';


function App() {
  return (
    <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/giris" element={<Giris />} />
          <Route path="/uyeol" element={<UyeOl />} />
          <Route path="/urunilanlari" element={<Urunilanlari />} />
          <Route path="/isilanlari" element={<İsilanlari />} />
          <Route path="/isciilanlari" element={<İsciilanlari />} />
          <Route path="/ilanyarat" element={<IlanYarat />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
