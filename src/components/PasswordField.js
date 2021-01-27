import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { PasswordVisibilityAdornment } from './PasswordVisibilityAdornment';

export const PasswordField = ({
  label,
  handleChange,
  value,
  name,
  id,
  onKeyDown,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      value={value || ''}
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      size="small"
      onChange={handleChange}
      onKeyDown={onKeyDown}
      InputProps={{
        endAdornment: <PasswordVisibilityAdornment
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      }}
    />
  );
};

export default PasswordField;