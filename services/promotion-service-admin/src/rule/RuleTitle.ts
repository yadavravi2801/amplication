import { Rule as TRule } from "../api/rule/Rule";

export const RULE_TITLE_FIELD = "id";

export const RuleTitle = (record: TRule): string => {
  return record.id?.toString() || String(record.id);
};
