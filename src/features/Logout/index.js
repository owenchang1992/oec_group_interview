import { useContext } from 'react';
import { UserContext } from '../../utils/hooks/useCurrentUser'

function Logout() {
  const { login } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    login(document['login']['name'].value, document['login']['password'].value)
  }

  return (
    <form name="login" onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="name">名稱:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-item">
        <label htmlFor="password">密碼:</label>
        <input type="password" id="password" name="password" />
      </div>
      <input type="submit" value="登入"/>
    </form>
  );
}

export default Logout;