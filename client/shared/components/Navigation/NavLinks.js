import React, { useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from '../../context/auth-context';

const NavLinks = ({ currentUser }) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <Link href="/users" exact>
          ALL PROGRAMS
        </Link>
      </li>
      {auth.isLoggedIn && (
        <li>
          <Link href="/programs">MY PROGRAMS</Link>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Link href="/programs/newProgram">ADD PROGRAM</Link>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <Link href="/auth/signup">AUTHENTICATE</Link>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          {/* <button onClick={auth.logout}>LOGOUT</button> */}
          <Link href="/auth/signout">LOGOUT</Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
