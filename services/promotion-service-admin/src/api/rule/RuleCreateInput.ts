import { CouponCreateNestedManyWithoutRulesInput } from "./CouponCreateNestedManyWithoutRulesInput";

export type RuleCreateInput = {
  coupons?: CouponCreateNestedManyWithoutRulesInput;
  discount: number;
  discountType: "Percent" | "Fixed";
  endTo: number;
  startFrom: number;
};
