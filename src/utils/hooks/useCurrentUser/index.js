import { useReducer, createContext, useCallback } from "react";

const initState = null;

export const UserContext = createContext(null);

function currentUserReducer(user, action) {
  switch (action.type) {
    case 'login': {
      return {
        name: action.name,
        password: action.password
      };
    }
    case 'logout': {
      return null;
    }
    default:
      alert(`Unknown action: ${action.type}`);
  }
}

const useCurrentUser = () => {
  const [currentUser, dispatch] = useReducer(currentUserReducer, initState)

  const login = useCallback((userName, password) => {
    if (
      typeof userName !== 'string'
      || typeof password !== 'string'
      || !userName
      || !password)
    {
      alert('login error');
    } 

    dispatch({
      type: 'login',
      name: userName,
      password: password
    })
  } ,[])

  const logout =  useCallback(() => {
    dispatch({
      type: 'logout',
    })
  }, [])

  const isLogin =  useCallback(() => {
    return currentUser?.name && currentUser?.password
  }, [currentUser])

  return {
    currentUser,
    login,
    logout,
    isLogin
  }
}

export default useCurrentUser;