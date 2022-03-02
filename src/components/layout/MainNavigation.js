import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css' 

function MainNavigation() {
  return (
      <header className={classes.header}>
    <div className={classes.logo}>Quotes
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/quotes" activeClassName={classes.active}>All Quote</NavLink></li>
                <li><NavLink to="/new-quote" activeClassName={classes.active}>New Quote</NavLink></li>
            </ul>
        </nav>
    </div>
    </header>
  )
}

export default MainNavigation