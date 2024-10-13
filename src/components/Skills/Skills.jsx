// Skills.jsx
import React from 'react';
import { Box, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa'; // Importa el ícono FaCheck
import {
  programmingLanguages,
  frameworksAndLibraries,
  softwareAndTools,
  learning
} from './skillsData';

const Skills = () => {
  return (
    <Box
      id='skills'
      background='var(--color-background-1)'
      ml={{ base: 0, lg: '25%' }}
      px={{ base: 4, md: 10 }}
      py={4}
      overflowY='auto'
      minHeight='100vh'
    >
      <Box p={5}>
        <Text
          fontFamily='Helvetica, sans-serif'
          fontSize='4xl'
          color='#f481dd'
          fontWeight='780'
          textTransform={'uppercase'}
          mb={10}
          mt={50}
        >
          Habilidades Técnicas
        </Text>

        {/* Lenguajes de Programación */}
        <Text
          fontSize='xl'
          mb={4}
          fontWeight='semibold'
          color='var(--color-text-1)'
        >
          Lenguajes de Programación
        </Text>
        <Wrap spacing={4}>
          {programmingLanguages.map((skill, index) => (
            <WrapItem key={index}>
              <Box
                p={4}
                borderRadius='md'
                bg={skill.color}
                display='flex'
                alignItems='center'
                boxShadow='md'
                color='white'
              >
                {skill.icon}
                <Text ml={2}>{skill.name}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        <Text
          fontSize='xl'
          mb={2}
          fontWeight='semibold'
          mt={6}
          color='var(--color-text-1)'
        >
          Frameworks y Librerías
        </Text>
        <Wrap spacing={4}>
          {frameworksAndLibraries.map((skill, index) => (
            <WrapItem key={index}>
              <Box
                p={4}
                borderRadius='md'
                bg={skill.color}
                display='flex'
                alignItems='center'
                boxShadow='md'
                color='white'
              >
                {skill.icon}
                <Text ml={2}>{skill.name}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        <Text
          fontSize='xl'
          mb={2}
          fontWeight='semibold'
          mt={6}
          color='var(--color-text-1)'
        >
          Herramientas y Software
        </Text>
        <Wrap spacing={4}>
          {softwareAndTools.map((skill, index) => (
            <WrapItem key={index}>
              <Box
                p={4}
                borderRadius='md'
                bg={skill.color}
                display='flex'
                alignItems='center'
                boxShadow='md'
                color='white'
              >
                {skill.icon}
                <Text ml={2}>{skill.name}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        <Text
          fontSize='xl'
          mb={4}
          fontWeight='bold'
          mt={6}
          color='var(--color-text-1)'
        >
          Aprendiendo
        </Text>
        <Box ml={5}>
          <ul>
            {learning.map((item, index) => (
              <li key={index}>
                <Text color='white' mb={2} display='flex' alignItems='center'>
                  <FaCheck
                    style={{ marginRight: '8px' }}
                    color='var(--color-button)'
                  />{' '}
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
