import { Controller } from 'react-hook-form';
import { TextField, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordField = React.forwardRef((props) => {
  const { control, rules, disabled, name, errors, label, fullWidth, helperText } = props;
  const [show, setShow] = useState(false);
  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      event.preventDefault(); // Prevent the space key from having any effect
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...rules,
        minLength: 5,
        pattern: {
          value: /^(\S+$)/,
          message: 'invalid email address'
        }
      }}
      render={({ field }) => (
        <TextField
          {...field}
          type={show ? 'text' : 'password'}
          onKeyPress={handleKeyPress}
          fullWidth={fullWidth}
          label={label}
          disabled={disabled}
          error={errors[name]}
          helperText={errors[name] && errors[name].type === 'required' ? `Please add valid ${label}` : helperText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start" sx={{ cursor: 'pointer' }}>
                {show ? (
                  <VisibilityOffIcon onClick={() => setShow(!show)} />
                ) : (
                  <RemoveRedEyeIcon onClick={() => setShow(!show)} />
                )}
              </InputAdornment>
            )
          }}
        />
      )}
    />
  );
});

export default PasswordField;
