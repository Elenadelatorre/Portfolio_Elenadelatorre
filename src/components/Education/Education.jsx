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
      height='100vh'
      background='linear-gradient(135deg, #4a0080, #9e00ff)'
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
        Formación
      </Text>

      <Wrap direction='column' spacing={50} mb={10}>
        {educationData.map((education, index) => (
          <WrapItem key={index}>
            <Box
              p={4}
              borderRadius='md'
              bg={education.title.includes('Máster') ? '#6c63ff' : '#483d8b'} // Diferencia el máster con un color más brillante
              display='flex'
              flexDirection='column'
              alignItems='start'
              boxShadow={education.title.includes('Máster') ? 'xl' : 'md'} // Sombra más pronunciada para el máster
              color='white'
              border={education.title.includes('Máster') ? '2px solid #f481dd' : 'none'} // Borde adicional para el máster
            >
              <Heading as='h3' size={education.title.includes('Máster') ? 'lg' : 'md'} color='white'>
                {education.title}
              </Heading>
              <Text fontSize={education.title.includes('Máster') ? 'lg' : 'md'}>
                {education.institution}
              </Text>
              <Text fontSize='sm' color='gray.300'>
                {education.year}
              </Text>
              <Text color='white' mt={2} display='flex' alignItems='center'>
                <FaCheck style={{ marginRight: '8px' }} color='#50dd94' />{' '}
                {/* Ícono de tick */}
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
