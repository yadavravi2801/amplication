export type RuleUpdateInput = {
  discount?: number;
  discountType?: "Percent" | "Fixed";
  endTo?: number;
  startFrom?: number;
};
