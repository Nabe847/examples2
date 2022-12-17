import {
    Box,
    CloseButton,
    Flex, FlexProps, Link, Text, useColorModeValue
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type LinkItemProps = { name: string };
const LinkItems: Array<LinkItemProps> = [{ name: 'Home' }, { name: 'Users' }];

export const SimpleSidebar = ({ children }: { children: ReactNode }) => {
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                borderRight="1px"
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                w={{ base: 'full', md: 60 }}
                pos="fixed"
                h="full"
            >
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                        My-App
                    </Text>
                    <CloseButton display={{ base: 'flex' }} onClick={() => {}} />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name}>{link.name}</NavItem>
                ))}
            </Box>
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
};

type NavItemProps = FlexProps & { children: string };
const NavItem = ({ children, ...rest }: NavItemProps) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}
            >
                <Box>{children}</Box>
            </Flex>
        </Link>
    );
};
