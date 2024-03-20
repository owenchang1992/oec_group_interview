import { useReducer, createContext } from "react";

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

  const login = (userName, password) => {
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
  }

  const logout = () => {
    dispatch({
      type: 'logout',
    })
  }

  const isLogin = () => {
    return currentUser?.name && currentUser?.password
  }

  return {
    currentUser,
    login,
    logout,
    isLogin
  }
}

export default useCurrentUser;