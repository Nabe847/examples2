import { Box, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

const Item = ({
  onClick,
  children,
}: { onClick: () => void } & PropsWithChildren) => {
  return (
    <Box
      as="button"
      paddingY="4"
      width={'100%'}
      color="textColorDefault"
      fontSize="md"
      fontWeight={'bold'}
      onClick={onClick}
      _hover={{ backgroundColor: 'backgroundColorBase' }}
    >
      {children}
    </Box>
  );
};

export const Sidebar = () => {
  const router = useRouter();

  return (
    <VStack
      as="nav"
      position={'fixed'}
      top={'50px'}
      width="200px"
      height="100%"
      backgroundColor="defaultColorMain"
    >
      <Item onClick={() => router.push('/home')}>Home</Item>
      <Item onClick={() => router.push('/about')}>About</Item>
      <Item onClick={() => router.push('/contact')}>Contact</Item>
    </VStack>
  );
};
