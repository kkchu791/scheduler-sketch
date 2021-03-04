import React, {useState} from 'react';
import styles from './Login.module.scss';
import {TextField, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from '../context';
import { PasswordField } from './PasswordField';
import { Error } from './Error';
import { Snackbar } from '@material-ui/core';

export const Login = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const isSuccessSignIn = history.location.state && 
                          history.location.state.previousPath === '/signup';
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(isSuccessSignIn);
  const dispatch = useAuthDispatch();
  const { loading } = useAuthState();
  const [error, setError]  = useState('');

  const handleLogin = async () => {
    const payload = {
      email: user.email,
      password: user.password,
    }

    let respUser = await loginUser(dispatch, payload);

    if (!respUser) {
      setError('Invalid username or password.');
    } else {
      history.push(`/scheduler`);
    }
  }

  const handleChange = (val) => {
    setUser({...user, ...val});
  }


  const handleKeyDown = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleLogin();
    }
  }

  const handleCancel = () => {
    history.push('./');
  }


  return (
    <div className={styles.container}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isSnackBarOpen}
        onClose={() => setIsSnackBarOpen(false)}
        message="Successful Sign Up!"
        autoHideDuration={3000}
      />
      <h2>Log in to your Pair-Up account.</h2>
      {error && <Error error={error} />}
      <form className={styles.loginForm}>
        <div className={styles.emailField}>
          <TextField
            id="email"
            label="Username"
            variant="outlined"
            size="small"
            style = {{width: 222}}
            onChange={(evt) => handleChange({'email': evt.target.value})}
          />
        </div>

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

        <div className={styles.loginButton}>
          <Button
            className={styles.cancelButton}
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>

          <Button
            variant='contained'
            color='primary'
            disabled={loading}
            onClick={() => handleLogin()}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login;