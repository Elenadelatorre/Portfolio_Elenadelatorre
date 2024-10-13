import { Box, Image, Text, Button, Flex, Tag } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import GrowBoxButton from '../Buttons/Buttons';

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

const ProjectCard = ({ project }) => {
  return (
    <Box
      bg='var(--color-text-1)'
      borderRadius='md'
      boxShadow='md'
      p={5}
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      minWidth='300px'
      maxWidth='400px'
      height='600px'
      alignItems='flex-start'
      color='var(--color-text-4)'
      width={{ base: '100%', sm: '45%', md: '40%', lg: '30%' }}
      overflow='hidden'
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        borderRadius='md'
        mb={4}
        objectFit='cover'
        height='150px'
        width='100%'
      />
      <Text fontSize='xl' fontWeight='bold' mb={2} noOfLines={1}>
        {project.title}
      </Text>
      <Text mb={4}>{project.description}</Text>

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
        mb={0}
      >
        Ver Proyecto
      </GrowBoxButton>
      <Button
        as='a'
        href={project.githubLink}
        target='_blank'
        colorScheme='blue'
        variant='outline'
        leftIcon={<FaGithub />}
        mt={0}
      >
        GitHub
      </Button>
    </Box>
  );
};

export default ProjectCard;
