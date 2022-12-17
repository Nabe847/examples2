import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Header, Sidebar } from '..';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Box height={'100%'} backgroundColor={'backgroundColorBase'}>
        <Header />
        <Sidebar />
        <Box marginLeft={'200px'} color="textColorDefault">
          {children}
        </Box>
      </Box>
    </>
  );
};
