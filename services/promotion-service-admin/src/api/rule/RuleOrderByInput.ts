import { SortOrder } from "../../util/SortOrder";

export type RuleOrderByInput = {
  createdAt?: SortOrder;
  discount?: SortOrder;
  discountType?: SortOrder;
  endTo?: SortOrder;
  id?: SortOrder;
  startFrom?: SortOrder;
  updatedAt?: SortOrder;
};
