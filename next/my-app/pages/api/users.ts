// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import users from './users.json';

export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
    res.status(200).json(users);
}

