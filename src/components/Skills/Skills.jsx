import { Box, Text, Flex, Tag, Wrap, WrapItem } from '@chakra-ui/react';
import {
  FaPython,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaTools
} from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import {
  SiChakraui,
  SiPostman,
  SiMongodb,
  SiInsomnia,
  SiAngular,
  SiVisualstudiocode
} from 'react-icons/si';

// Datos de habilidades
const skillsData = {
  programmingLanguages: [
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#f0db4f' }, // Amarillo
    { name: 'Python', icon: <FaPython />, color: '#306998' }, // Azul
    { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' }, // Rojo
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' } // Azul oscuro
  ],
  frameworksAndLibraries: [
    { name: 'React', icon: <FaReact />, color: '#61DBFB' }, // Azul claro
    { name: 'Node.js', icon: <FaNodeJs />, color: '#8CC84B' }, // Verde
    { name: 'Chakra UI', icon: <SiChakraui />, color: '#319795' }, // Verde oscuro
    // Naranja
    { name: 'Angular', icon: <SiAngular />, color: '#DD0031' }, // Rojo Angular
    { name: 'Express.js', icon: <FaTools />, color: '#4B8BBE' },
    { name: 'Bcrypt', icon: <FaTools />, color: '#F7B731' }, // Amarillo
    { name: 'Jsonwebtoken (JWT)', icon: <FaTools />, color: '#27AE60' }, // Verde oscuro
    { name: 'Mongoose', icon: <FaTools />, color: '#4CAF50' }, // Verde claro
    { name: 'Multer', icon: <FaTools />, color: '#7B1FA2' }
  ],
  softwareAndTools: [
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }, // Verde
    { name: 'Git', icon: <FaTools />, color: '#F05032' },
    { name: 'Visual Studio', icon: <SiVisualstudiocode />, color: '#0096D8' }, // Azul claro Docker
    { name: 'Insomnia', icon: <SiInsomnia />, color: '#5851DB' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Nodemon', icon: <FaTools />, color: '#76D7C4' }, // Verde menta
    { name: 'Dotenv', icon: <FaTools />, color: '#58D68D' }, // Verde suave
    { name: 'Cors', icon: <FaTools />, color: '#F5B041' }, // Naranja
    { name: 'Body-parser', icon: <FaTools />, color: '#F39C12' }
  ],
  learning: ['TypeScript', 'Docker', 'GraphQL']
};

const Skills = () => {
  return (
    <Box
      id='skills'
      height='100vh'
      background='linear-gradient(135deg, #4a0080, #9e00ff)' // Morado oscuro
      px={8}
      py={4}
      overflowY='auto'
      ml='30%'
    >
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize='4xl'
        color='#f481dd'
        fontWeight='780'
        textTransform={'uppercase'}
        mb={10}
        mt={50}
      >
        Skills
      </Text>

      {/* Lenguajes de Programación */}
      <Text fontSize='2xl' fontWeight='bold' mb={4} color='var(--color-text-1)'>
        Lenguajes de Programación
      </Text>
      <Wrap spacing={5} mb={10}>
        {skillsData.programmingLanguages.map((skill, index) => (
          <WrapItem key={index}>
            <Box
              p={4}
              borderRadius='md'
              bg={skill.color} // Color de fondo específico
              display='flex'
              alignItems='center'
              boxShadow='md'
              color='white' // Cambia el color del texto a blanco para mejor contraste
            >
              {skill.icon}
              <Text ml={2}>{skill.name}</Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>

      {/* Frameworks y Librerías */}
      <Text fontSize='2xl' fontWeight='bold' mb={4} color='var(--color-text-1)'>
        Frameworks y Librerías
      </Text>
      <Wrap spacing={4} mb={10}>
        {skillsData.frameworksAndLibraries.map((skill, index) => (
          <WrapItem key={index}>
            <Box
              p={4}
              borderRadius='md'
              bg={skill.color} // Color de fondo específico
              display='flex'
              alignItems='center'
              boxShadow='md'
              color='white' // Cambia el color del texto a blanco para mejor contraste
            >
              {skill.icon}
              <Text ml={2}>{skill.name}</Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>

      {/* Software y Herramientas */}
      <Text fontSize='2xl' fontWeight='bold' mb={4} color='var(--color-text-1)'>
        Software y Herramientas
      </Text>
      <Wrap spacing={4} mb={10}>
        {skillsData.softwareAndTools.map((skill, index) => (
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

      {/* Aprendiendo */}
      <Text fontSize='2xl' fontWeight='bold' mb={4} color='var(--color-text-1)'>
        Aprendiendo
      </Text>
      <Box ml={5}>
        <ul>
          {skillsData.learning.map((item, index) => (
            <li key={index}>
              <Text color='white' mb={2} display='flex' alignItems='center'>
                <FaCheck style={{ marginRight: '8px' }} color='#50dd94' />{' '}
                {/* Ícono de tick */}
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Skills;
