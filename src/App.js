import Sidebar from './components/sidebar'
import Content from './components/layout';
import ProtectedPage from './features/ProtectedPage';
import Home from './features/Home';
import LogoutPage from './features/Logout/index.js';
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
          <Content>
            {path.currentPath === HOME && <Home />}
            {path.currentPath === LOGIN && <ProtectedPage />}
            {path.currentPath === LOGOUT && <LogoutPage />}
          </Content>
        </UserContext.Provider>
      </RouteContext.Provider>
    </main>
  );
}

export default App;
