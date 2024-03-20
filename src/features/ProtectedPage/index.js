import { useContext } from 'react';
import Login from "./Login";
import Logout from "./Logout";
import { UserContext } from '../../utils/hooks/useCurrentUser'

const ProtectedPage = () => {
  const { isLogin } = useContext(UserContext);

  return isLogin() ? <Login /> : <Logout />
}

export default ProtectedPage;