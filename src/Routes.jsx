import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Philosophy from 'pages/philosophy/Philosophy'
import Menu from 'pages/menu/Menu'
import Shop from 'pages/shop/Shop'
import Contact from 'pages/contact/Contact'

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Philosophy} />
                <Route path='/menu' component={Menu} />
                <Route path='/shop' component={Shop} />
                <Route path='/contact' component={Contact} />
            </Switch>
        );
    }
}

export default Router