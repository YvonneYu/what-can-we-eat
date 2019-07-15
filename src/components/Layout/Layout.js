import React from 'react';
import './Layout.scss';

const layout = ( props ) => {
  return (
    <React.Fragment>
      <div className="top-bar my-top-bar">
        <div className="top-bar-left">
          <h3 className="top-bar-title">隨便想吃什麼？</h3>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><a href="#">吃什麼？</a></li>
            <li><a href="#">編輯餐廳</a></li>
          </ul>
        </div>
      </div>
      <main className="my-main">
        { props.children }
      </main>
    </React.Fragment>
  )
};

export default layout;