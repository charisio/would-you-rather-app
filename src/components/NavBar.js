import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthUserInfo from './AuthUserInfo';

const NavBar = () => (
    <div className='nav navigation'>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>New Question</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>Leader Board</NavLink>
                </li>
            </ul>
        </nav>
        <AuthUserInfo/>
    </div>
);

export default NavBar;