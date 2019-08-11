import React, { Component } from 'react';
import './navbar.scss';

// Router
import { Switch, Route, Link } from 'react-router-dom'

// Pages
import Philosophy from './pages/philosophy/Philosophy'
import Menu from './pages/menu/Menu'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Philosophy </Link></li>
                        <li><Link to={'/menu'} className="nav-link">Menu</Link></li>
                        <li><Link to={'/shop'} className="nav-link">Shop</Link></li>
                        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={Philosophy} />
                    <Route path='/menu' component={Menu} />
                    <Route path='/shop' component={Shop} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        );
    }
}


export default NavBar;