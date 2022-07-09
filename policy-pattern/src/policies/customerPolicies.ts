import { CustomerRule } from './rules/customerRule';
import { PurchaseHistory } from '../values/purchaseHistory';

export class CustomerPolicies {
    private readonly rules: Set<CustomerRule> = new Set();

    public add(rule: Readonly<CustomerRule>) {
        this.rules.add({ ...rule });
    }

    complyWithAll(history: PurchaseHistory): boolean {
        for (const rule of this.rules) {
            if (!rule.ok(history)) {
                return false;
            }
        }

        return true;
    }
}
