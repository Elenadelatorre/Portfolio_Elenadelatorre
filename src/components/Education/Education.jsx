import { Box, Text, Wrap, WrapItem, Heading } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa6';

const educationData = [
  {
    title: 'Máster en Full Stack Developer',
    institution: 'The Power Education',
    year: '2023/2024'
  },
  {
    title: 'Curso de Gestión de la Seguridad Informática en la empresa',
    institution: 'Aula Directa',
    year: '2022'
  },
  {
    title: 'Curso de Planificación de la Seguridad Informática en la empresa',
    institution: 'Aula Directa',
    year: '2022'
  }
];

const Education = () => {
  return (
    <Box
      id='education'
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
        mt={50}
      >
        Formación
      </Text>

      <Wrap direction='column' spacing={50} mb={10}>
        {educationData.map((education, index) => (
          <WrapItem key={index}>
            <Box
              p={4}
              borderRadius='md'
              bg={education.title.includes('Máster') ? '#6c63ff' : '#483d8b'}
              display='flex'
              flexDirection='column'
              alignItems='start'
              boxShadow={education.title.includes('Máster') ? 'xl' : 'md'}
              color='white'
              border={
                education.title.includes('Máster')
                  ? '2px solid var(--color-text-3)'
                  : 'none'
              }
            >
              <Heading
                as='h3'
                size={education.title.includes('Máster') ? 'lg' : 'md'}
                color='white'
              >
                {education.title}
              </Heading>
              <Text fontSize={education.title.includes('Máster') ? 'lg' : 'md'}>
                {education.institution}
              </Text>
              <Text fontSize='sm' color='gray.300'>
                {education.year}
              </Text>
              <Text color='white' mt={2} display='flex' alignItems='center'>
                <FaCheck
                  style={{ marginRight: '8px' }}
                  color='var(--color-button)'
                />{' '}
                Completado
              </Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Education;
