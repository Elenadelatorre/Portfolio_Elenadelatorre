import React from 'react';
import { Box, Text, Wrap, WrapItem } from '@chakra-ui/react';

const SkillCategory = ({ title, skills }) => {
  return (
    <Box mb={10}>
      <Text fontSize='2xl' fontWeight='bold' mb={4} color='var(--color-text-1)'>
        {title}
      </Text>
      <Wrap spacing={4}>
        {skills.map((skill, index) => (
          <WrapItem key={index}>
            <Box
              p={4}
              borderRadius='md'
              bg={skill.color}
              display='flex'
              alignItems='center'
              boxShadow='md'
              color='var(--color-text-1)'
            >
              {skill.icon}
              <Text ml={2}>{skill.name}</Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default SkillCategory;
