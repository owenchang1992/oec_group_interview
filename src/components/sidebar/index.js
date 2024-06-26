import './sidebar.css';
import Button from '../button'
import { useContext } from 'react';
import { RouteContext, HOME, ABOUT, LOGOUT } from '../../utils/hooks/useRoute'


function Sidebar() {
  const { navigate } = useContext(RouteContext);

  return (
    <div className="sidebar">
      <Button onClick={() => {navigate(HOME)}}>首頁</Button>
      <Button onClick={() => {navigate(ABOUT)}}>關於</Button>
      <Button onClick={() => {navigate(LOGOUT)}}>登出</Button>
    </div>
  );
}

export default Sidebar;
