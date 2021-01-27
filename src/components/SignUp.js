import React, {useState} from 'react';
import styles from './SignUp.module.scss';
import {TextField, Button} from '@material-ui/core';
import { PasswordField } from './PasswordField'; 
import { signUp } from '../api';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

export const SignUp = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleSignUp = async () => {
    const res = await signUp({
      email: user.email, 
      password: user.password,
      passwordConfirm: user.passwordConfirm,
      firstName: user.firstName,
      lastName: user.lastName,
    });

    if (res.data.id) {
      history.push({pathname: `/login`, state: {previousPath: '/signup'}});
    }
  }

  const handleCancel = () => {
    history.push('./');
  }

  const handleChange = (val) => {
    setUser({...user, ...val});
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSignUp();
    }
  }

  return (
    <div className={styles.container}>
      <h2>Create your Pair-Up account.</h2>

      <form className={styles.signUpForm}>
        <div className={styles.nameField}>
          <div className={styles.firstNameField}>
            <TextField
              id="firstName"
              label="First name"
              variant="outlined"
              fullWidth='true'
              size="small"
              onChange={(evt) => handleChange({'firstName': evt.target.value})}
            />
          </div>
         
          <div className={styles.lastNameField}>
            <TextField
              id="lastName"
              label="Last name"
              variant="outlined"
              size="small"
              fullWidth='true'
              onChange={(evt) => handleChange({'lastName': evt.target.value})}
            />
          </div>
        </div>

        <div className={styles.emailField}>
          <TextField
            id="email"
            label="Username"
            variant="outlined"
            size="small"
            fullWidth='true'
            
            onChange={(evt) => handleChange({'email': evt.target.value})}
          />
        </div>

        <div className={styles.passwordsField}>

          <div className={styles.passwordField}>
            <PasswordField
              id="password"
              label="Password"
              name='password'
              value={user.password || ''}
              onKeyDown={(e) => handleKeyDown(e)}
              handleChange={(evt) => handleChange({'password': evt.target.value})}
            />
          </div>

          <div className={styles.passwordConfirmField}>
            <PasswordField
              id="passwordConfirm"
              label="Confirm"
              name='passwordConfirm'
              value={user.passwordConfirm || ''}
              onKeyDown={(e) => handleKeyDown(e)}
              handleChange={(evt) => handleChange({'passwordConfirm': evt.target.value})}
            />
          </div>
        </div>

        <div className={styles.signUpButton}>

          <Button
            className={styles.cancelButton}
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>

          <Button
            variant='contained'
            color='primary'
            onClick={() => handleSignUp()}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;