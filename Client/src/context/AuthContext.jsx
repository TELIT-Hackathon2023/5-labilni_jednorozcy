import { createContext, useReducer, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Define the authentication reducer
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

// Create the authentication provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    // Check if the stored user is valid before dispatching
    if (storedUser && storedUser.token) {
      dispatch({ type: 'LOGIN', payload: storedUser });
    }
  }, []); // Run only on mount

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
