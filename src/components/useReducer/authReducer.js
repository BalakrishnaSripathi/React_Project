export const initialState = {
  isLoggedIn: false
};

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { isLoggedIn: true };

    case "LOGOUT":
      return { isLoggedIn: false };

    default:
      return state;
  }
}