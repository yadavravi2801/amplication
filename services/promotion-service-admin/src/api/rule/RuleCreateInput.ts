export type RuleCreateInput = {
  discount: number;
  discountType: "Percent" | "Fixed";
  endTo: number;
  startFrom: number;
};
