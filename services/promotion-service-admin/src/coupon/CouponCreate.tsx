import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CouponCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Coupon Code" source="couponCode" />
      </SimpleForm>
    </Create>
  );
};
