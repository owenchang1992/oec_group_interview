import Sidebar from './components/sidebar'
import Layout from './components/layout';
import Logout from './features/Logout';
import Login from './features/Login';
import Home from './features/Home';
import LogoutButton from './components/button/logout.js';
import useCurrentUser, { UserContext } from './utils/hooks/useCurrentUser'
import useRoute, { RouteContext, HOME, LOGIN, LOGOUT } from './utils/hooks/useRoute'
import './App.css';

function App() {
  const user = useCurrentUser();
  const path = useRoute();

  return (
    <main className="App">
      <RouteContext.Provider value={path}>
        <UserContext.Provider value={user} >
          <Sidebar />
          <Layout>
            {path.currentPath === HOME && <Home />}
            {path.currentPath === LOGIN && (user.isLogin() ? <Login /> : <Logout />)}
            {path.currentPath === LOGOUT && <LogoutButton />}
          </Layout>
        </UserContext.Provider>
      </RouteContext.Provider>
    </main>
  );
}

export default App;
