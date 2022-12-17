import { Box, Center, Text, Flex } from '@chakra-ui/react';

export const Header = () => {
  '#2f2f2f';
  return (
    <Flex
      height={'50px'}
      backgroundColor="backgroundColorBase"
      color="white"
      justifyContent="center"
    >
      <Box flex="1" />
      <Center flex="1" height="40px">
        <Text fontSize="xl">Page Title</Text>
      </Center>
      <Box flex="1" />
    </Flex>
  );
};
