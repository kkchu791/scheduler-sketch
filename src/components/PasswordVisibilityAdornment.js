import React from 'react';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export const PasswordVisibilityAdornment = ({
  showPassword,
  setShowPassword,
}) => {
  return (
    <InputAdornment position="end">
      <IconButton tabIndex="-1" onClick={() => setShowPassword(!showPassword)} size='small'>
        {showPassword ? (
          <Visibility style={{ fontSize: 14 }} />
        ) : (
          <VisibilityOff style={{ fontSize: 14 }} />
        )}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordVisibilityAdornment;