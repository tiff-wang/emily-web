import React, { Component } from 'react'
import './App.scss'

// Components 
import NavBar from './navbar'

class App extends Component {
	render(){
        return (
            <div className="App parallax-background"> 
				<NavBar/>
            </div>
        )
	}
}

export default App
