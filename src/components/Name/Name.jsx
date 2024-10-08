import { Box, Text } from '@chakra-ui/react';

const Name = () => {
  const firstName = 'ELENA';
  const lastName = 'DE LA TORRE';

  return (
    <Box>
      {/* Nombre con un estilo específico */}
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize='7xl'
        color='#f481dd'
        display='inline'
        fontWeight='bold'
        mr={6} // Margen entre el nombre y el apellido
      >
        {firstName}
      </Text>

      {/* Apellido con otro estilo diferente */}
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize='7xl'
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
