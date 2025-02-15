import { Controller } from 'react-hook-form';
import { FormHelperText, MenuItem, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';

const SelectField = (props) => {
  const { label, control, rules, name, errors, helperText, options } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl fullWidth sx={{ minWidth: 110 }}>
          <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
          <Select
          fullWidth
            label={label}
            value={field.value}
            onChange={field.onChange}
            error={errors[name]}
            helperText={
              errors && errors[name]
                ? errors[name].type === 'required'
                  ? `Please select valid ${label}`
                  : helperText
                : helperText
            }
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: 'red' }}>
            {errors && errors[name]
              ? errors[name].type === 'required'
                ? `Please select valid ${label}`
                : helperText
              : helperText}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default SelectField;
