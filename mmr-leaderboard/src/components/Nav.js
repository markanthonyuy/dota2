import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li><NavLink to="/america" activeClassName="active">America</NavLink></li>
          <li><NavLink to="/europe" activeClassName="active">Europe</NavLink></li>
          <li><NavLink to="/sea" activeClassName="active">SEA</NavLink></li>
          <li><NavLink to="/china" activeClassName="active">China</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;