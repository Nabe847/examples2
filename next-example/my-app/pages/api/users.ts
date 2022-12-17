// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { promisify } from 'util';
import users from './users.json';

export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
    await promisify(setTimeout)(500);
    res.status(200).json(users);
}

