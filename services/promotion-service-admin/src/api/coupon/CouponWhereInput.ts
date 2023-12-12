import { StringFilter } from "../../util/StringFilter";
import { RuleWhereUniqueInput } from "../rule/RuleWhereUniqueInput";

export type CouponWhereInput = {
  couponCode?: StringFilter;
  id?: StringFilter;
  rule?: RuleWhereUniqueInput;
};
