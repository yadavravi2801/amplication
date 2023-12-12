import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  couponCode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
