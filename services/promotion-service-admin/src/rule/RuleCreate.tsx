import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const RuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
