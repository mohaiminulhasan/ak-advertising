import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
        <li className={match ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to={to}>{label}</Link>
        </li>
    );
  }

  export default MenuLink;