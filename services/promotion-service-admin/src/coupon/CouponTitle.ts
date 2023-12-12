import { Coupon as TCoupon } from "../api/coupon/Coupon";

export const COUPON_TITLE_FIELD = "couponCode";

export const CouponTitle = (record: TCoupon): string => {
  return record.couponCode?.toString() || String(record.id);
};
