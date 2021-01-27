import {login} from '../api';
 
export const loginUser = async (dispatch, loginPayload) => {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let {data} = await login({
      email: loginPayload.email,
      password: loginPayload.password
    });
 
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify({user: data.user, token: data.session}));
      return data.user;
    }

    console.log(data, 'data')

    console.log(data.errors[0], 'anything')
 
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    console.log(error.message, 'anything 2')
    dispatch({ type: 'LOGIN_ERROR', error: error.message });
  }
}
 
export const logout = async (dispatch)  => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
};