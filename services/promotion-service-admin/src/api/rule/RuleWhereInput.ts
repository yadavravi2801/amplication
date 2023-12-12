import { CouponListRelationFilter } from "../coupon/CouponListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type RuleWhereInput = {
  coupons?: CouponListRelationFilter;
  discount?: IntFilter;
  discountType?: "Percent" | "Fixed";
  endTo?: IntFilter;
  id?: StringFilter;
  startFrom?: IntFilter;
};
