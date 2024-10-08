import { Box, Image, Text, Button, Flex, Tag } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import GrowBoxButton from '../Buttons/Buttons';

// Datos de ejemplo para los proyectos
const projectData = [
  {
    id: 1,
    title: 'RentMyMoto',
    description:
      'Es una plataforma diseñada para el alquiler de motos por día, que permite a los usuarios tanto reservar motos disponibles como poner las suyas en alquiler.',
    imageUrl: '/assets/moto.jpg',
    technologies: [
      'React',
      'Chakra UI',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB'
    ],
    githubLink: 'https://github.com/Elenadelatorre/Proyecto-13',
    liveLink: 'https://front-motos.vercel.app/'
  },
  {
    id: 2,
    title: 'EventosConnect',
    description:
      'EventosConnect es una aplicación para registrarse en eventos y ver asistentes en tiempo real.',
    imageUrl: '/assets/eventos.jpg',
    technologies: ['Vite', 'HTML', 'CSS', 'Node.js'],
    githubLink: 'https://github.com/Elenadelatorre/Proyecto_10',
    liveLink: 'https://front-proyecto10.vercel.app/'
  },
  {
    id: 4,
    title: 'Mobilízate',
    description:
      'Es una aplicación web en la que los usuarios pueden inscribirse a concursos y explorar una tienda con sus productos favoritos.',
    imageUrl: '/assets/concurso-movil.jpg',
    technologies: ['React', 'Vite', 'HTML', 'CSS', 'Node.js'],
    githubLink: 'https://github.com/Elenadelatorre/Proyecto-12',
    liveLink: 'https://proyecto-12.vercel.app/'
  },
  {
    id: 3,
    title: 'CulturaViva',
    description:
      'Encuentra personas de diferentes países para intercambiar experiencias culturales. Aprende nuevos idiomas, costumbres y tradiciones mientras compartes las tuyas en una comunidad global.',
    imageUrl: '/assets/mundo.jpg',
    technologies: ['React', 'Vite', 'HTML', 'CSS', 'Node.js'],
    githubLink: 'https://github.com/Elenadelatorre/Proyecto-11',
    liveLink: 'https://proyecto-11.vercel.app/'
  }
];

// Mapeo de tecnologías a colores
const techColors = {
  React: 'blue',
  'Chakra UI': 'purple',
  'Node.js': 'green',
  JavaScript: 'yellow',
  HTML: 'orange',
  CSS: 'blue',
  MongoDB: 'green',
  'Express.js': 'pink',
  Vite: 'purple',
  TypeScript: 'purple'
};

const Projects = () => {
  return (
    <Box
      id='projects'
      backgroundColor='#4a0080'
      px={8}
      py={4}
      overflowY='auto'
      ml='30%'
      minHeight='100vh'
    >
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize='4xl'
        color='#f481dd'
        fontWeight='780'
        textTransform={'uppercase'}
        mb={10}
        mt={15}
      >
        Proyectos
      </Text>
      <Flex direction='row' wrap='wrap' gap={6} justify='center'>
        {projectData.map((project) => (
          <Box
            key={project.id}
            bg='white'
            borderRadius='md'
            boxShadow='md'
            p={5}
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            minWidth='300px'
            maxWidth='400px'
            height='600px'
            alignItems='flex-start'
            color='#4a0080'
            width={{ base: '100%', sm: '45%', md: '40%', lg: '30%' }}
            overflow='hidden' // Para evitar que el contenido sobresalga
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              borderRadius='md'
              mb={4}
              objectFit='cover' // Asegura que la imagen mantenga su proporción
              height='150px' // Altura fija para las imágenes
              width='100%'
            />
            <Text fontSize='xl' fontWeight='bold' mb={2} noOfLines={1}>
              {project.title}
            </Text>
            <Text mb={4}>
              {' '}
              {/* Limita la descripción a 3 líneas */}
              {project.description}
            </Text>

            {/* Contenedor de tecnologías */}
            <Flex wrap='wrap' mb={4}>
              {project.technologies.map((tech, index) => (
                <Tag key={index} colorScheme={techColors[tech]} mr={2} mb={2}>
                  {tech}
                </Tag>
              ))}
            </Flex>

            <GrowBoxButton
              as='a'
              href={project.liveLink}
              target='_blank'
              colorScheme='teal'
              mb={2} // Margen inferior para separación
            >
              Ver Proyecto
            </GrowBoxButton>
            <Button
              as='a'
              href={project.githubLink}
              target='_blank'
              colorScheme='blue'
              variant='outline'
              leftIcon={<FaGithub />} // Añade el icono de GitHub a la izquierda
            >
              GitHub
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
