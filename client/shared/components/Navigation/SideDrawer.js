import React from 'react';

import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
  // return <div>Hiiii</div>;
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return <>{content}</>;
};

export default SideDrawer;
