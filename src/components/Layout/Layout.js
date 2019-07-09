import React from 'react';

const layout = ( props ) => {
  return (
    <React.Fragment>
      <div>Toolbar, 漢堡bar 等上方欄</div>
      <main>
        { props.children }
      </main>
    </React.Fragment>
  )
};

export default layout;