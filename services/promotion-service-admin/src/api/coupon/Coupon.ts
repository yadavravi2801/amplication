import { Rule } from "../rule/Rule";

export type Coupon = {
  couponCode: string;
  createdAt: Date;
  id: string;
  rule?: Rule;
  updatedAt: Date;
};
