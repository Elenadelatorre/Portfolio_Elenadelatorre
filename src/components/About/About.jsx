import React, { useEffect, useState } from 'react';
import { Box, Text, ScaleFade } from '@chakra-ui/react';
import Name from '../Name/Name';
import GrowBoxButton from '../Buttons/Buttons';
import SocialIcons from '../SocialIcons/SocialIcons';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para mostrar la frase después de 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Cambia este valor para ajustar el tiempo de aparición

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  return (
    <Box
      id='about'
      height='100vh'
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      justifyContent='center'
      px={10}
      py={8}
      mb={160}
      backgroundColor="var(--color-background-1)"
    >
      <Name />
      {/* Frase con transición de escalado y desvanecimiento */}
      <ScaleFade initialScale={0.9} in={isVisible}>
        <Text fontSize='2xl' mb={2} mt={8} color='teal.100'>
          ¡Bienvenido a mi Portafolio de Programadora!
        </Text>
      </ScaleFade>
      <Text fontSize='2xl' mb={6}>
        "Segunda frase poderosa"
      </Text>
      <a href='#projects'>
        <GrowBoxButton>Mis Proyectos</GrowBoxButton>
      </a>
      <SocialIcons />
    </Box>
  );
};

export default About;
