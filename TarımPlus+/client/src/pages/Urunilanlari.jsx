import React, { useState, useEffect } from 'react';
import { Container, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Heading, Text } from '@chakra-ui/react';
import baseUrl from '../data/baseUrl';

const Urunilanlari = () => {
  const [ilanlar, setIlanlar] = useState([]);

  useEffect(() => {
    fetch(baseUrl + '/auth/ilanlar')
      .then(response => response.json())
      .then(data => {
        const musteriIlanlari = data.filter(ilan => ilan.ilan_type === 'Müşteri');
        setIlanlar(musteriIlanlari);
      })
      .catch(error => console.error('Error fetching ilanlar:', error));
  }, []);
  
  return (
    <Container maxW='container.md' mt={8}> 
      <SimpleGrid spacing={4} templateColumns='repeat(4, minmax(200px, 1fr))'>
        {ilanlar.map((ilan) => (
          <Card key={ilan.ilan_id}>
            <CardHeader>
              <Heading size='md'>{ilan.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{ilan.description || 'Açıklama Yok' }</Text>
              <Text fontSize="lg" fontWeight="bold" mt={2}>
                Fiyat: {ilan.fiyat}₺
              </Text>
            </CardBody>
            <CardFooter>
              <Button> İncele </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Urunilanlari;
