import * as React from 'react';
import styles from './NavBar.module.css'
import AboutMe from '../../pages/AboutMe/AboutMe'

import { Route, Routes, Link } from 'react-router-dom'

function NavBar() {
    return (
      <div>
        <nav className={styles.NavBar}>
          <ul>
            <li><Link className={styles.NavBarText} to='/AboutMe'>About Me</Link></li>
            {/* <li><Link className={styles.NavBarText} to='/Professional'>Professional</Link></li>
            <li><Link className={styles.NavBarText} to='Portfolio'>Portfolio</Link></li> */}
          </ul>
        </nav>
      
      <Routes>
        <Route path="/AboutMe" element={ <AboutMe /> } />
      </Routes>
      </div>
    );
}

export default NavBar;