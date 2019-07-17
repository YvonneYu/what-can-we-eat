import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.scss';

const ToolBar = () => {
  return (
    <div className="top-bar my-top-bar">
      <div className="top-bar-left">
        <h3 className="top-bar-title">隨便想吃什麼？</h3>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><Link to="/">吃什麼？</Link></li>
          <li><Link to="create-rest">新增餐廳</Link></li>
          <li><Link to="edit-rest">編輯餐廳</Link></li>
        </ul>
      </div>
    </div>
  )
};

export default ToolBar;