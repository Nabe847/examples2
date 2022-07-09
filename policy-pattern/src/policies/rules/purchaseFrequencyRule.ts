import { CustomerRule } from './customerRule';
import { PurchaseHistory } from '../../values/purchaseHistory';

export class PurchaseFrequencyRule implements CustomerRule {
    public ok(history: Readonly<PurchaseHistory>): boolean {
        return 10 <= history.purchaseFrequencyPerMonth;
    }
}
