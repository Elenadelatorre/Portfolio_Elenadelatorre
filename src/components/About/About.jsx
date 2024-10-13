import React, { useEffect, useState } from 'react';
import { Box, Text, ScaleFade } from '@chakra-ui/react';
import Name from '../Name/Name';
import GrowBoxButton from '../Buttons/Buttons';
import SocialIcons from '../SocialIcons/SocialIcons';
import '../../style.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      id='about'
      minHeight='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      ml={{ base: 0, lg: '25%' }}
      px={{ base: 4, md: 10 }}
      py={8}
      background='linear-gradient(135deg, #4a0080, #9e00ff)'
      overflow='hidden'
      textAlign='center'
    >
      <Name />
      {/* Frase con transición de escalado y desvanecimiento */}
      <ScaleFade initialScale={0.9} in={isVisible}>
        <Text
          fontSize={{ base: 'xl', md: '3xl' }}
          mb={2}
          mt={8}
          color='teal.100'
        >
          ¡Bienvenidos a mi Portfolio de FullStack Developer!
        </Text>
      </ScaleFade>
      <Text
        w='full'
        maxW='850px'
        fontSize={{ base: 'md', md: 'xl' }} // Tamaño de fuente responsivo
        mb={10}
        mt={10}
        color='yellow.100'
        px={{ base: 4, md: 0 }} // Padding responsivo
      >
        "Soy una desarrolladora web apasionada, en constante aprendizaje.
        Después de mi carrera como técnica deportiva, me enfoqué en crear
        experiencias digitales que mejoren la vida de los usuarios."
      </Text>
      <a href='#projects'>
        <GrowBoxButton>Mis Proyectos</GrowBoxButton>
      </a>
      <SocialIcons />
    </Box>
  );
};

export default About;
