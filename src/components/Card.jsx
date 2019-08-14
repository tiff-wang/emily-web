import React, { Component } from 'react'

import 'components/Card.scss'

class Card extends Component {
    render() {
        return (
           <div className='Card'>
                <a>
                    <div className='card-image'>
                        <img src={ this.props.img }/>
                    </div>
                    <div className='card-description'>
                        <p> { this.props.name } </p>
                        <p> { this.props.description } </p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Card