import axios from 'axios';

export const login = async ({
  email,
  password
}) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {email, password}, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });

  return {data: response.data};
};

export const signUp = async ({
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
}) => {
  const data = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    confirm_password: passwordConfirm
  };

  const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, data);
  return {data: response.data};
};

