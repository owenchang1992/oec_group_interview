import Button from '../../components/button/index.js'
import { useContext } from 'react';
import { UserContext } from '../../utils/hooks/useCurrentUser/index.js'
import { RouteContext, HOME } from '../../utils/hooks/useRoute/index.js'

const LogoutPage = () => {
  const { logout } = useContext(UserContext);
  const { navigate } = useContext(RouteContext);

  const handleLogout = () => {
    logout();
    navigate(HOME);
  }

  return (
    <Button onClick={handleLogout}>
      登出
    </Button>
  )
}

export default LogoutPage;