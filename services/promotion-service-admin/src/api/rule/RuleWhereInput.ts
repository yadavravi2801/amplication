import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type RuleWhereInput = {
  discount?: IntFilter;
  discountType?: "Percent" | "Fixed";
  endTo?: IntFilter;
  id?: StringFilter;
  startFrom?: IntFilter;
};
