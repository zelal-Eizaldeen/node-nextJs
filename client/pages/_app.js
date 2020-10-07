import React, { useCallback, useState } from 'react';
import buildClient from '../api/build-client';
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

const MyApp = ({ Component, pageProps, currentUser }) => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    // setToken(token);
    setUserId(uid);
    localStorage.setItem(
      'userData',
      // JSON.stringify({ userId: uid, token: token })
      JSON.stringify({ userId: uid })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!userId,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <main>
        <MainNavigation currentUser={currentUser} />
        <Component {...pageProps} />
      </main>
    </AuthContext.Provider>
  );
};
MyApp.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  let pageProps;
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};
export default MyApp;
