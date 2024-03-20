import Button from './'
import { useContext } from 'react';
import { UserContext } from '../../utils/hooks/useCurrentUser/index.js'
import { RouteContext, LOGOUT } from '../../utils/hooks/useRoute'

const LogoutButton = () => {
  const { logout } = useContext(UserContext);
  const { navigate } = useContext(RouteContext);

  const handleLogout = () => {
    logout();
    navigate(LOGOUT);
  }

  return (
    <Button onClick={handleLogout}>
      登出
    </Button>
  )
}

export default LogoutButton;