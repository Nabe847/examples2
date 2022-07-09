import { PurchaseHistory } from '../values/purchaseHistory';

export type CustomerPolicy = {
    complyWithAll(history: Readonly<PurchaseHistory>): boolean;
};
