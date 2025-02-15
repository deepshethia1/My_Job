import { Controller } from 'react-hook-form';
import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import { OutlinedInput, FormControl, InputLabel, FormHelperText } from '@mui/material';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default function FormattedInputs(props) {
  const { control, rules, disabled, name, errors, label, fullWidth, type, helperText } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, minLength: 14 }}
      render={({ field }) => (
        <FormControl variant="standard" fullWidth={fullWidth}>
          <InputLabel error={errors[name]} sx={{ zIndex: '99', left: '14px', top: '-6px' }}>
            {label}
          </InputLabel>
          <OutlinedInput
            {...field}
            type={type}
            label={label}
            disabled={disabled}
            error={errors[name]}
            inputComponent={TextMaskCustom}
          />
          <FormHelperText sx={{ color: 'red', ml: '10px' }}>
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
}
