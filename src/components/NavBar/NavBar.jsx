import React, { useEffect, useState } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import {
  FaUser,
  FaProjectDiagram,
  FaGraduationCap,
  FaTools,
  FaEnvelope
} from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'projects', 'skills', 'contact', 'education'];
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
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width='25%'
      background='#d6c3ff'
      py={8}
      color='white'
      position='fixed'
      left='0'
      top='0'
      height='100vh'
      sx={{
        '@media (max-width: 1024px)': {
          width: '30%',
          py: 6
        },
        '@media (max-width: 768px)': {
          width: '100%',
          height: 'auto',
          position: 'relative',
          py: 4
        }
      }}
    >
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
          p={3}
          boxShadow='0px 4px 6px rgba(0, 0, 0, 0.1)'
        >
          <Image
            src='/assets/foto.jpg'
            alt='Mi Foto'
            boxSize='200px'
            objectFit='cover'
            borderRadius='10px'
            boxShadow='0px 10px 20px rgba(0, 0, 0, 0.3), 0px 20px 40px rgba(0, 0, 0, 0.2)'
            maxHeight={{ base: '150px', md: '200px', lg: '250px' }}
            maxWidth={{ base: '150px', md: '200px', lg: '250px' }}
            sx={{
              '@media (max-width: 768px)': {
                boxSize: '150px'
              }
            }}
          />
        </Box>
      </Box>

      <Box
        width='80%'
        background='#d6c3ff'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        color='#4a0080'
        fontWeight='790'
        fontSize='xl'
        p={4}
        sx={{
          '@media (max-width: 1024px)': {
            width: '80%',
            gap: 4
          },
          '@media (max-width: 768px)': {
            width: '100%',
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
            <FaEnvelope style={{ marginRight: '8px' }} />
            Contacto
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
