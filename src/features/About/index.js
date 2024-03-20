import { useState, useMemo, useContext } from 'react';
import LoginPage from "../Login";
import { UserContext } from '../../utils/hooks/useCurrentUser'

function Login() {
  const [ displayType, setDisplayType ] = useState('');
  const { currentUser, isLogin } = useContext(UserContext)

  const handleChange = (e) => {
    setDisplayType(e.target.value);
  }

  const displayContent = useMemo(
    () => new Map([
      ['version', '123456'],
      ['user_name_password', `名稱:${currentUser?.name}, 密碼: ${currentUser?.password}`]
    ])
    , [currentUser]
 )

 if (!isLogin()) return <LoginPage />

  return (
    <div>
      <form>
          <select name="info" onChange={handleChange}>
            <option value="version">版本號</option>
            <option value="user_name_password">名稱和密碼</option>
          </select>
      </form>
      {displayContent.get(displayType)}
    </div>

  )
}

export default Login;