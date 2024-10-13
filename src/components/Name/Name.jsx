import { Box, Text } from '@chakra-ui/react';

const Name = () => {
  const firstName = 'ELENA';
  const lastName = 'DE LA TORRE';

  return (
    <Box textAlign='center'>
      {' '}
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }} 
        color='var(--color-text-3)'
        display='inline'
        fontWeight='bold'
        mr={2} 
      >
        {firstName}
      </Text>
      <Text
        fontFamily='Helvetica, sans-serif'
        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }} 
        color='var(--color-button)'
        display='inline'
        ml={2} 
        fontWeight='bold'
      >
        {lastName}
      </Text>
    </Box>
  );
};

export default Name;
