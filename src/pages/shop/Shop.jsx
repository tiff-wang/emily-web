import React, { Component } from 'react'
import { Row, Col, Container} from 'reactstrap';

import 'pages/shop/Shop.scss'
import placeholder from 'assets/images/shop-placeholder.jpg'

class Shop extends Component {
    render() {
        return (
            <div className='Shop'>
                <Container>
                    <Row>
                        <Col md='4'>
                            <div className='card'>
                                <a>
                                    <div className='card-image'>
                                        <img src={placeholder}/>
                                    </div>
                                    <div className='card-description'>
                                        <p> Item name </p>
                                        <p> $0.00 </p>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col md='4'>
                            <div className='card'>
                                <a>
                                    <div className='card-image'>
                                        <img src={placeholder}/>
                                    </div>
                                    <div className='card-description'>
                                        <p> Item name </p>
                                        <p> $0.00 </p>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col md='4'>
                            <div className='card'>
                                <a>
                                    <div className='card-image'>
                                        <img src={placeholder}/>
                                    </div>
                                    <div className='card-description'>
                                        <p> Item name </p>
                                        <p> $0.00 </p>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col md='4'>
                            <div className='card'>
                                <a>
                                    <div className='card-image'>
                                        <img src={placeholder}/>
                                    </div>
                                    <div className='card-description'>
                                        <p> Item name </p>
                                        <p> $0.00 </p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Shop