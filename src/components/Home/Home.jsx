import React, { useEffect, useState } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import About from '../About/About';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Maneja el desplazamiento
  const handleScroll = () => {
    const sections = ['home', 'projects', 'skills', 'contact'];
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex height='100vh' width='100%' overflow='hidden' position='relative'>
      {/* Contenedor izquierdo: Imagen y barra de navegación */}
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width='30%'
        background='#d6c3ff'
        py={8}
        color='white'
        position='fixed'
        left='0'
        top='0'
        height='100vh'
        sx={{
          '@media (max-width: 1024px)': {
            width: '40%', // Ajuste del ancho en pantallas medianas (portátiles)
            py: 12, // Más espacio vertical (padding) en portátiles
          },
          '@media (max-width: 768px)': {
            width: '100%', // Ancho completo en móviles
            height: 'auto',
            position: 'relative', // Pasa a posición relativa en móviles
          },
        }}
      >
        {/* Imagen */}
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
          mb={50}
          sx={{
            '@media (max-width: 1024px)': {
              mb: 8, // Reduce el margen inferior en pantallas medianas
            },
          }}
        >
          <Image
            src='/assets/foto.jpg'
            alt='Mi Foto'
            boxSize='250px'
            objectFit='cover'
            borderRadius='10px'
            boxShadow='0px 10px 20px rgba(0, 0, 0, 0.3), 0px 20px 40px rgba(0, 0, 0, 0.2)'
            maxHeight={{ base: '150px', md: '250px', lg: '300px' }} // Ajusta altura
            maxWidth={{ base: '150px', md: '250px', lg: '300px' }}  // Ajusta anchura
            sx={{
              '@media (max-width: 768px)': {
                boxSize: '150px', // Tamaño más pequeño en móviles
              },
            }}
          />
        </Box>

        {/* Barra de navegación */}
        <Box
          width='30%'
          background='#d6c3ff'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          color='#4a0080'
          fontWeight='790'
          fontSize='xl'
          p={6}
          sx={{
            '@media (max-width: 1024px)': {
              width: '50%', // Ajuste del ancho en pantallas medianas
              gap: 8, // Añade más espacio entre los elementos de navegación
            },
            '@media (max-width: 768px)': {
              width: '80%', // Ancho mayor en móviles
              p: 4, // Reduce el padding en móviles
            },
          }}
        >
          <Flex flexDirection='column' gap={5}>
            <Box
              as='a'
              href='#about'
              _hover={{ textDecoration: 'none', color: 'pink.400' }}
              color={activeSection === 'home' ? 'pink.300' : '#4a0080'}
            >
              Sobre mí
            </Box>
            <Box
              as='a'
              href='#projects'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'projects' ? 'pink.300' : '#4a0080'}
            >
              Proyectos
            </Box>
            <Box
              as='a'
              href='#education'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'education' ? 'pink.300' : '#4a0080'}
            >
              Educación
            </Box>
            <Box
              as='a'
              href='#skills'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'skills' ? 'pink.300' : '#4a0080'}
            >
              Skills
            </Box>
            <Box
              as='a'
              href='#contact'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'contact' ? 'pink.300' : '#4a0080'}
            >
              Contacto
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Contenedor derecho: Secciones */}
      <Flex
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        width='70%'
        background='#4a0080' // Morado oscuro
        ml='30%' // Deja espacio para el contenedor izquierdo
        sx={{
          '@media (max-width: 1024px)': {
            width: '60%', // Ajuste del ancho en pantallas medianas
            ml: '40%', // Ajusta el margen izquierdo en portátiles
          },
          '@media (max-width: 768px)': {
            width: '100%', // Ancho completo en móviles
            ml: 0, // Elimina el margen izquierdo en móviles
            mt: 4, // Añade espacio superior
          },
        }}
      >
        <About />
      </Flex>
    </Flex>
  );
};

export default Home;

