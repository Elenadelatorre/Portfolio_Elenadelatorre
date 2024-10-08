import { Box, Text, Flex, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box
      id='contact'
      height='100vh'
      backgroundColor='#4a0080' // Morado oscuro
      px={8}
      py={4}
      pt={150}
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
        ¡Contáctame!
      </Text>

      <Flex direction='column' spacing={4}>
        {/* Email */}
        <Flex alignItems='center' mb={4}>
          <FaEnvelope style={{ marginRight: '8px', color: 'orange' }} />
          <Text color='white'>elenadelatorre1806@gmail.com</Text>{' '}
          {/* Cambia el email por el tuyo */}
        </Flex>

        {/* Teléfono */}
        <Flex alignItems='center' mb={4}>
          <FaPhone style={{ marginRight: '8px', color: '#50dd94' }} />
          <Text color='white'>+34 627 61 78 94</Text>{' '}
          {/* Cambia el teléfono por el tuyo */}
        </Flex>

        {/* LinkedIn */}
        <Flex alignItems='center'>
          <FaLinkedin style={{ marginRight: '8px', color: '#61DBFB' }} />
          <Link
            href='https://www.linkedin.com/in/elenadelatorrelopez/'
            color='white'
            isExternal
          >
            linkedin.com/in/elenadelatorrelopez/ 
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
