import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const RuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
