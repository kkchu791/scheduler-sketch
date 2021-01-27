import React from 'react';
import styles from './NavBar.module.scss';
import {
  useAuthState,
  logout,
  useAuthDispatch,
} from '../context';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

export const NavBar = () => {
  const {userDetails} = useAuthState();
  const history = useHistory();
  const dispatch = useAuthDispatch();

  const handleLogout = async () => {
    await logout(dispatch);
    history.push(`/`);
  }

  return (
    <div className={styles.container}>
      <Link  className={styles.username} to={`/users/${userDetails.id}`}>
        {userDetails.first_name} {userDetails.last_name}
      </Link>

      <div className={styles.logout}>
      <Button
          onClick={() => handleLogout()}
          color="primary"
          variant="outlined"
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default NavBar;