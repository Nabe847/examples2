import { Center, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import useSWR from 'swr';
import { User } from './api/users';

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

const Users = () => {
    const { data: users, error } = useSWR<User[]>('/api/users', fetcher);

    return (
        <TableContainer width="100%" height="100%">
            {users ? (
                <Table>
                    <Thead>
                        <Tr>
                            <Th isNumeric>ID</Th>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>EMail</Th>
                            <Th>Gender</Th>
                            <Th>IP Address</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user, i) => {
                            return (
                                <Tr
                                    key={user.id}
                                    bgColor={i % 2 ? '' : '#f0ffff'}
                                    _hover={{
                                        bgColor: '#b1eeff',
                                    }}
                                >
                                    <Td isNumeric>{user.id}</Td>
                                    <Td>{user.first_name}</Td>
                                    <Td>{user.last_name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.gender}</Td>
                                    <Td>{user.ip_address}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            ) : (
                <Center alignItems={'center'}>
                    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                </Center>
            )}
        </TableContainer>
    );
};

export default Users;
