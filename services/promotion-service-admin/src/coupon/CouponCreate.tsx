import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RuleTitle } from "../rule/RuleTitle";

export const CouponCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Coupon Code" source="couponCode" />
        <ReferenceInput source="rule.id" reference="Rule" label="Rule">
          <SelectInput optionText={RuleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
