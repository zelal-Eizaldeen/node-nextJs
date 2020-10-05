import React, { useCallback, useState } from 'react';
import '../styles/globals.css';
import '../shared/components/FormElements/Button.css';
import '../shared/components/FormElements/Input.css';
import '../shared/components/UIElements/Card.css';
import '../shared/components/UIElements/Avatar.css';
import '../shared/components/Navigation/MainHeader.css';
import '../shared/components/Navigation/MainNavigation.css';
import '../shared/components/Navigation/NavLinks.css';
import '../shared/components/Navigation/SideDrawer.css';
import '../shared/components/UIElements/Modal.css';
import '../shared/components/UIElements/Backdrop.css';
import '../shared/components/UIElements/LoadingSpinner.css';
import '../components/users/UserItem.css';
import '../components/users/UsersList.css';
import '../components/programs/ProgramList.css';
import '../components/programs/ProgramItem.css';
import '../pages/programs/newProgram.css';
import { AuthContext } from '../shared/context/auth-context';
import MainNavigation from '../shared/components/Navigation/MainNavigation';

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <main>
        <MainNavigation />
        <Component {...pageProps} />
      </main>
    </AuthContext.Provider>
  );
}

export default MyApp;
