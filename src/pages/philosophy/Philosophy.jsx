import React, { Component } from 'react'
import logo from 'assets/logo.png'

import 'pages/philosophy/Philosophy.scss'

class Philosophy extends Component {
    render() {
        return (
            <div class="Philosophy container-h">
                <div class='container-v'>
                    <img id="landing-logo" src={logo}/>
                    <h2 id="landing-title"> White Heron Cafe</h2>
                </div>
            </div>
        );
    }
}

export default Philosophy