export function timesTwo(value) {
    return value * 2;
}

export function order(items) {
    const total = items.reduce((price, item) => price + item.price, 0);

    return {
        orderItems: [...items],
        total,
    };
}
