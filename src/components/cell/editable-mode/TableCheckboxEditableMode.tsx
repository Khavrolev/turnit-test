import { Checkbox } from "@mui/material";
import { Field } from "react-final-form";

interface Props {
  name: string;
}

function TableCheckboxEditableMode({ name }: Props) {
  return (
    <Field
      name={name}
      type="checkbox"
      component={({ input, ...rest }) => (
        <Checkbox {...input} {...rest} size="small" onChange={input.onChange} />
      )}
    />
  );
}

export default TableCheckboxEditableMode;
