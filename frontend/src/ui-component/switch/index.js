import { Controller } from 'react-hook-form';
import { Switch, FormControlLabel } from '@mui/material';

const SwitchField = (props) => {
  const { control, rules, disabled, name, errors, label, defaultValue, isChecked } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch {...field} disabled={disabled} error={errors[name]} defaultChecked={isChecked} />}
          label={label}
        />
      )}
    />
  );
};

export default SwitchField;
