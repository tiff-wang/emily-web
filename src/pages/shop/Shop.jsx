import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
import Card from 'components/Card'

import 'pages/shop/Shop.scss'
import placeholder from 'assets/images/shop-placeholder.jpg'

class Shop extends Component {

    createShopList = () => {
        let list = []

        for (let i = 0; i < 6; i++) {
            list.push(<Col xs='6' md='3'>
                <Card img={placeholder}
                    name='Item Name'
                    description='$0.00' /></Col>)
        }
        return list
    }


    render() {
        return (
            <div className='Shop'>
                <Container>
                    <Row>
                        { this.createShopList() }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Shop