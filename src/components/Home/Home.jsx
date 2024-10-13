import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../NavBar/NavBar';

const Home = () => {
  return (
    <Flex height='100vh' width='100%' overflow='hidden' position='relative'>
      <Navbar />

      {/* Contenedor derecho: Secciones */}
      <Flex
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        width='75%'
        background='linear-gradient(135deg, #4a0080, #9e00ff)'
        ml='25%'
        sx={{
          '@media (max-width: 1024px)': {
            width: '70%',
            ml: '30%'
          },
          '@media (max-width: 768px)': {
            width: '100%',
            ml: 0,
            mt: 4
          }
        }}
      ></Flex>
    </Flex>
  );
};

export default Home;
