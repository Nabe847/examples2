import { GoldCustomerPurchaseAmountRule } from './rules/goldCustomerPurchaseAmountRule';
import { PurchaseFrequencyRule } from './rules/purchaseFrequencyRule';
import { ReturnRateRule } from './rules/returnRateRule';
import { PurchaseHistory } from '../values/purchaseHistory';
import { CustomerPolicy } from './customerPolicy';
import { CustomerPolicies } from './customerPolicies';

export class GoldCustomerPolicy implements CustomerPolicy {
    private readonly policy: CustomerPolicies;

    public constructor() {
        this.policy = new CustomerPolicies();
        this.policy.add(new GoldCustomerPurchaseAmountRule());
        this.policy.add(new PurchaseFrequencyRule());
        this.policy.add(new ReturnRateRule());
    }

    public complyWithAll(history: Readonly<PurchaseHistory>): boolean {
        return this.policy.complyWithAll(history);
    }
}
