import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RULE_TITLE_FIELD } from "./RuleTitle";

export const RuleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Discount" source="discount" />
        <TextField label="DiscountType" source="discountType" />
        <TextField label="End To" source="endTo" />
        <TextField label="ID" source="id" />
        <TextField label="Start From" source="startFrom" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Coupon" target="ruleId" label="Coupons">
          <Datagrid rowClick="show">
            <TextField label="Coupon Code" source="couponCode" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Rule" source="rule.id" reference="Rule">
              <TextField source={RULE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
