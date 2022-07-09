import { CustomerRule } from './customerRule';
import { PurchaseHistory } from '../../values/purchaseHistory';

export class ReturnRateRule implements CustomerRule {
    public ok(history: Readonly<PurchaseHistory>): boolean {
        return history.returnRate <= 0.001;
    }
}
