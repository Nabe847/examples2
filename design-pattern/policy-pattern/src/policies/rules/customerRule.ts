import { PurchaseHistory } from '../../values/purchaseHistory';

export type CustomerRule = {
    ok(history: Readonly<PurchaseHistory>): boolean;
};
