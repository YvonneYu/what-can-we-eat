import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.scss';

const ToolBar = () => {
  return (
    <div className="top-bar my-top-bar">
      <div className="top-bar-left">
        <h3 className="top-bar-title">隨便想吃什麼？</h3>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><NavLink to="/" exact>吃什麼？</NavLink></li>
          <li><NavLink to="/create-rest">新增餐廳</NavLink></li>
          <li><NavLink to="/show-all">餐廳列表</NavLink></li>
        </ul>
      </div>
    </div>
  )
};

export default ToolBar;