import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RuleTitle } from "../rule/RuleTitle";

export const CouponEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Coupon Code" source="couponCode" />
        <ReferenceInput source="rule.id" reference="Rule" label="Rule">
          <SelectInput optionText={RuleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
