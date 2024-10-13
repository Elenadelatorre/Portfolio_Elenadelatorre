import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const Technology = ({ iconSrc, name }) => {
  return (
    <Box display='flex' alignItems='center' mb={4}>
      <Image src={iconSrc} alt={name} boxSize='40px' mr={2} />
      <Text fontSize='xl' fontWeight='500'>
        {name}
      </Text>
    </Box>
  );
};

export default Technology;
