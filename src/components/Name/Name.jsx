import { Box, Text } from '@chakra-ui/react';

const Name = () => {
  const firstName = 'ELENA';
  const lastName = 'DE LA TORRE';

  return (
    <Box textAlign='center'>
      {' '}
      {/* Centra el texto */}
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }} // Tamaños responsivos
        color='#f481dd'
        display='inline'
        fontWeight='bold'
        mr={2} // Margen entre el nombre y el apellido
      >
        {firstName}
      </Text>
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }} // Tamaños responsivos
        color='#50dd94'
        display='inline'
        ml={2} // Margen entre el nombre y el apellido
        fontWeight='bold'
      >
        {lastName}
      </Text>
    </Box>
  );
};

export default Name;
