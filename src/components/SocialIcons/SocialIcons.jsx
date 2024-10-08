import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload
} from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <Flex gap={4} mt={8}>
      <Tooltip label='LinkedIn' placement='top' hasArrow>
        <IconButton
          as='a'
          href='https://www.linkedin.com/in/elenadelatorrelopez'
          target='_blank' // Abre en una nueva pestaña
          rel='noopener noreferrer' // Mejora la seguridad
          aria-label='LinkedIn'
          icon={<FaLinkedin />}
          _hover={{ color: 'pink.300' }} // Hover igual que el nombre
        />
      </Tooltip>
      <Tooltip label='GitHub' placement='top' hasArrow>
        <IconButton
          as='a'
          href='https://github.com/Elenadelatorre'
          target='_blank' // Abre en una nueva pestaña
          rel='noopener noreferrer' // Mejora la seguridad
          aria-label='GitHub'
          icon={<FaGithub />}
          _hover={{ color: 'pink.300' }} // Hover igual que el nombre
        />
      </Tooltip>
      <Tooltip label='Email' placement='top' hasArrow>
        <IconButton
          as='a'
          href='mailto:elenadelatorre1806@gmail.com'
          aria-label='Email'
          icon={<FaEnvelope />}
          _hover={{ color: 'pink.300' }} // Hover igual que el nombre
        />
      </Tooltip>
      <Tooltip label='Descargar CV' placement='top' hasArrow>
        <IconButton
          as='a'
          href='/cv.pdf' // Asegúrate de que esta ruta sea correcta
          aria-label='Descargar CV'
          icon={<FaFileDownload />}
          _hover={{ color: 'pink.300' }} // Hover igual que el nombre
        />
      </Tooltip>
    </Flex>
  );
};

export default SocialIcons;
