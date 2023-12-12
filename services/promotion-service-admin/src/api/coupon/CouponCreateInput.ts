import { RuleWhereUniqueInput } from "../rule/RuleWhereUniqueInput";

export type CouponCreateInput = {
  couponCode: string;
  rule: RuleWhereUniqueInput;
};
