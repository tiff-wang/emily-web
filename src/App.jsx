import React, { Component } from 'react'
import './App.scss'

// Components 
import NavBar from './navbar'
import Router from './Routes'

class App extends Component {
	render() {
        return (
            <div className="App parallax-background"> 
				<NavBar/>
                <Router/>
            </div>
        )
	}
}

export default App
