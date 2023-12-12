import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CouponEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Coupon Code" source="couponCode" />
      </SimpleForm>
    </Edit>
  );
};
