import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa6';

const LearningList = ({ items }) => {
  return (
    <Box ml={5}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Text color='white' mb={2} display='flex' alignItems='center'>
              <FaCheck
                style={{ marginRight: '8px' }}
                color='var(--color-button)'
              />
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default LearningList;
