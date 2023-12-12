import { RuleWhereUniqueInput } from "../rule/RuleWhereUniqueInput";

export type CouponUpdateInput = {
  couponCode?: string;
  rule?: RuleWhereUniqueInput;
};
