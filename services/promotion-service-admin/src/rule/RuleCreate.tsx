import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { CouponTitle } from "../coupon/CouponTitle";

export const RuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="coupons"
          reference="Coupon"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CouponTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Discount" source="discount" />
        <SelectInput
          source="discountType"
          label="DiscountType"
          choices={[
            { label: "Percent", value: "Percent" },
            { label: "Fixed", value: "Fixed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="End To" source="endTo" />
        <NumberInput step={1} label="Start From" source="startFrom" />
      </SimpleForm>
    </Create>
  );
};
