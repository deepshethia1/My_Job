import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import { OutlinedInput, FormHelperText, FormControl, InputLabel } from '@mui/material';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+971 (00) 000-0000"
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
  const { disabled, name, errors, label, fullWidth, type } = props;
  return (
    <FormControl variant="standard" fullWidth={fullWidth}>
      <InputLabel
        htmlFor="outlined-adornment-email-register"
        error={errors[name]}
        sx={{ zIndex: '99', left: '14px', top: '4px' }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        sx={{ height: '65px' }}
        {...props}
        type={type}
        label={label}
        disabled={disabled}
        error={errors[name]}
        inputComponent={TextMaskCustom}
      />
      {errors.phone && (
        <FormHelperText error id="standard-weight-helper-text--register">
          {errors.phone}
        </FormHelperText>
      )}
    </FormControl>
  );
}
