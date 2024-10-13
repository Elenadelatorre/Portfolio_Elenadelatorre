import React, { useEffect, useState } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import {
  FaUser,
  FaProjectDiagram,
  FaGraduationCap,
  FaTools,
  FaEnvelope
} from 'react-icons/fa'; // Importa los íconos
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
            width: '40%',
            py: 12
          },
          '@media (max-width: 768px)': {
            width: '100%',
            height: 'auto',
            position: 'relative'
          }
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
              mb: 8
            }
          }}
        >
          <Box
            backgroundColor='#9e00ff' 
            borderRadius='10px' 
            p={5} 
            boxShadow='0px 4px 6px rgba(0, 0, 0, 0.1)' 
          >
            <Image
              src='/assets/foto.jpg'
              alt='Mi Foto'
              boxSize='250px'
              objectFit='cover'
              borderRadius='10px'
              boxShadow='0px 10px 20px rgba(0, 0, 0, 0.3), 0px 20px 40px rgba(0, 0, 0, 0.2)'
              maxHeight={{ base: '150px', md: '250px', lg: '300px' }}
              maxWidth={{ base: '150px', md: '250px', lg: '300px' }}
              sx={{
                '@media (max-width: 768px)': {
                  boxSize: '150px'
                }
              }}
            />
          </Box>
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
              width: '50%',
              gap: 8
            },
            '@media (max-width: 768px)': {
              width: '80%',
              p: 4
            }
          }}
        >
          <Flex flexDirection='column' gap={5}>
            <Box
              as='a'
              href='#about'
              _hover={{ textDecoration: 'none', color: 'pink.400' }}
              color={activeSection === 'home' ? 'pink.300' : '#4a0080'}
              display='flex'
              alignItems='center'
            >
              <FaUser style={{ marginRight: '8px' }} />
              Sobre mí
            </Box>
            <Box
              as='a'
              href='#projects'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'projects' ? 'pink.300' : '#4a0080'}
              display='flex'
              alignItems='center'
            >
              <FaProjectDiagram style={{ marginRight: '8px' }} />
              Proyectos
            </Box>
            <Box
              as='a'
              href='#education'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'education' ? 'pink.300' : '#4a0080'}
              display='flex'
              alignItems='center'
            >
              <FaGraduationCap style={{ marginRight: '8px' }} />
              Educación
            </Box>
            <Box
              as='a'
              href='#skills'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'skills' ? 'pink.300' : '#4a0080'}
              display='flex'
              alignItems='center'
            >
              <FaTools style={{ marginRight: '8px' }} />
              Habilidades
            </Box>
            <Box
              as='a'
              href='#contact'
              _hover={{ textDecoration: 'none', color: 'pink.300' }}
              color={activeSection === 'contact' ? 'pink.300' : '#4a0080'}
              display='flex'
              alignItems='center'
            >
              <FaEnvelope style={{ marginRight: '8px' }} />{' '}
              {/* Ícono de "Contacto" */}
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
        background='linear-gradient(135deg, #4a0080, #9e00ff)'
        ml='30%'
        sx={{
          '@media (max-width: 1024px)': {
            width: '60%',
            ml: '40%'
          },
          '@media (max-width: 768px)': {
            width: '100%',
            ml: 0,
            mt: 4
          }
        }}
      >
        <About />
      </Flex>
    </Flex>
  );
};

export default Home;
