import React, { useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from '../../context/auth-context';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  console.dir(props);
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
    </ul>
  );
};

export default NavLinks;
