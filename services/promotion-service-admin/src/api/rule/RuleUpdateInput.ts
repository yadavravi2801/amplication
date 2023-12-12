import { CouponUpdateManyWithoutRulesInput } from "./CouponUpdateManyWithoutRulesInput";

export type RuleUpdateInput = {
  coupons?: CouponUpdateManyWithoutRulesInput;
  discount?: number;
  discountType?: "Percent" | "Fixed";
  endTo?: number;
  startFrom?: number;
};
