import { TextField } from "@mui/material";
import { Field } from "react-final-form";

interface Props {
  name: string;
}

function TableTextFieldEditableMode({ name }: Props) {
  return (
    <Field
      name={name}
      component={({ input, ...rest }) => (
        <TextField {...input} {...rest} onChange={input.onChange} />
      )}
    />
  );
}

export default TableTextFieldEditableMode;
