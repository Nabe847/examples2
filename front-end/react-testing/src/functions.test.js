import { timesTwo, order } from './functions.mjs';

test('Multiplies by two', () => {
    expect(timesTwo(4)).toBe(8);
});

const menuItems = [
    {
        id: '1',
        name: 'TAtted Up Turkey Burger',
        price: 19.5,
    },
    {
        id: '2',
        name: 'Lobster Lollipops',
        price: 16.5,
    },
    {
        id: '3',
        name: 'Motley Que Pulled Port Sandwich',
        price: 21.5,
    },
    {
        id: '4',
        name: 'Trash Can Nachos',
        price: 19.5,
    },
];

test('Build an order object', () => {
    expect(order(menuItems)).toEqual({
        orderItems: menuItems,
        total: 77,
    });
});
