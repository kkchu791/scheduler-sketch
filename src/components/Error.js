import { StylesProvider } from '@material-ui/core';
import React from 'react';
import styles from './Error.module.scss';

export const Error = ({
  error
}) => {
  return (
    <div className={styles.container}>
      {error}
    </div>
  )
}

export default Error;