import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
    return <Box margin="10">{children}</Box>;
};

export default Layout;
