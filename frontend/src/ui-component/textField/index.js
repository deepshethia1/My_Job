import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const textField = (props) => {
  const { control, rules, disabled, name, errors, label, fullWidth, type, helperText } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...rules,
        pattern: {
          value: /^(\S+$)/,
          message: 'invalid email address'
        }
      }}
      render={({ field }) => (
        <TextField
          type={type}
          {...field}
          fullWidth={fullWidth}
          label={label}
          disabled={disabled}
          error={errors[name]}
          helperText={
            errors && errors[name] ? (errors[name].type === 'required' ? `Please add valid ${label}` : helperText) : helperText
          }
        />
      )}
    />
  );
};

export default textField;
