import { CustomerRule } from './customerRule';
import { PurchaseHistory } from '../../values/purchaseHistory';

export class GoldCustomerPurchaseAmountRule implements CustomerRule {
    public ok(history: Readonly<PurchaseHistory>): boolean {
        return 100000 <= history.totalAmount;
    }
}
