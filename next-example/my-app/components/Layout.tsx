import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { SimpleSidebar } from '.';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Box margin="10">
            <SimpleSidebar>{children}</SimpleSidebar>
        </Box>
    );
};

export default Layout;
