let user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).user : "";
let token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).token : "";

export const initialState = {
  userDetails: user,
  token: token,
  loading: false,
  errorMessage: null
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload.user,
        token: action.payload.session,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        userDetails: "",
        token: ""
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
