export type Rule = {
  createdAt: Date;
  discount: number;
  discountType?: "Percent" | "Fixed";
  endTo: number;
  id: string;
  startFrom: number;
  updatedAt: Date;
};
