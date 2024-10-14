import { Box, Text, Flex, Link, Icon } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box
      id='contact'
      height='100vh'
      background='var(--color-background-1)'
      display='flex'
      ml={{ base: 0, lg: '25%' }}
      px={{ base: 4, md: 10 }}
      py={100}
      overflowY='auto'
      minHeight='100vh'
    >
      <Box textAlign='center' maxW='600px' ml='30px'>
        <Text
          fontFamily='Helvetica, sans-serif'
          fontSize={{ base: '3xl', md: '5xl' }}
          color='var(--color-text-3)'
          fontWeight='bold'
          textTransform='uppercase'
          mb={12}
          letterSpacing='widest'
        >
          ¡Contáctame!
        </Text>

        <Flex direction='column' gap={6} alignItems='flex-start'>
          {/* Email */}
          <Flex
            alignItems='center'
            mb={4}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Icon
              as={FaEnvelope}
              w={{ base: 6, md: 8 }}
              h={{ base: 6, md: 8 }}
              color='orange'
              mr={3}
            />
            <Text color='white' fontSize={{ base: 'md', md: 'xl' }}>
              elenadelatorre1806@gmail.com
            </Text>
          </Flex>

          {/* Teléfono */}
          <Flex
            alignItems='center'
            mb={4}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Icon
              as={FaPhone}
              w={{ base: 6, md: 8 }}
              h={{ base: 6, md: 8 }}
              color='var(--color-button)'
              mr={3}
            />
            <Text color='white' fontSize={{ base: 'md', md: 'xl' }}>
              +34 627 61 78 94
            </Text>
          </Flex>

          <Flex
            alignItems='center'
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Icon
              as={FaLinkedin}
              w={{ base: 6, md: 8 }}
              h={{ base: 6, md: 8 }}
              color='#61DBFB'
              mr={3}
            />
            <Link
              href='https://www.linkedin.com/in/elenadelatorrelopez/'
              color='white'
              fontSize={{ base: 'md', md: 'xl' }}
              isExternal
            >
              linkedin.com/in/elenadelatorrelopez/
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
