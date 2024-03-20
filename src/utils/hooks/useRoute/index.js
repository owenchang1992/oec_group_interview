import { useReducer, createContext, useCallback } from "react";

export const HOME = 'Home';
export const ABOUT = 'About';
export const LOGOUT = 'Logout';

const initState = HOME;

const pathSet = new Set([HOME, ABOUT, LOGOUT])

export const RouteContext = createContext('Home');

function routeReducer(path, action) {
  switch (action.type) {
    case 'navigate': {
      if (!pathSet.has(action.path)) return path;

      return action.path;
    }
    default:
      console.log(Error('Unknown action: ' + action.type));
  }
}

const useRoute = () => {
  const [currentPath, dispatch] = useReducer(routeReducer, initState);

  const navigate = useCallback((path) => {
    dispatch({
      type: 'navigate',
      path
    })
  }, [])

  return {
    currentPath,
    navigate,
  }
}

export default useRoute;