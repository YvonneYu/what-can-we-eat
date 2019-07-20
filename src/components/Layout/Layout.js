import React from 'react';
import Toolbar from '../ToolBar/ToolBar';
import './Layout.scss';

const layout = ( props ) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className="main">
        { props.children }
      </main>
    </React.Fragment>
  )
};

export default layout;