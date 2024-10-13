import { Box, Text, Flex } from '@chakra-ui/react';
import ProjectCard from './ProjectCard'; // Asegúrate de que la ruta sea correcta
import { projectData } from './projectData'; // Asegúrate de exportar projectData desde su archivo

const Projects = () => {
  return (
    <Box
      id='projects'
      background='var(--color-background-1)'
      ml={{ base: 0, lg: '25%' }}
      px={{ base: 4, md: 10 }}
      py={4}
      overflowY='auto'
      minHeight='100vh'
    >
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize='4xl'
        color='var(--color-text-3)'
        fontWeight='780'
        textTransform={'uppercase'}
        mb={10}
        mt={15}
      >
        Proyectos
      </Text>
      <Flex direction='row' wrap='wrap' gap={6} justify='center'>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
