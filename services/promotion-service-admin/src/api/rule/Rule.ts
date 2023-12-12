import { Coupon } from "../coupon/Coupon";

export type Rule = {
  coupons?: Array<Coupon>;
  createdAt: Date;
  discount: number;
  discountType?: "Percent" | "Fixed";
  endTo: number;
  id: string;
  startFrom: number;
  updatedAt: Date;
};
