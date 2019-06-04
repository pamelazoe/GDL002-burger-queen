import React from 'react';
import '../css/App.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <aside>
      <Link to = '/kitchen'>
  <button>Cocina</button>
  </Link>
  <Link to = '/waiters'>
  <button>Meseros</button> 
  </Link>
  </aside>
);
}

export default Nav;
