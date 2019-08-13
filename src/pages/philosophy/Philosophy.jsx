import React, { Component } from 'react'
import { Row, Col} from 'reactstrap';

import library from 'library'
import side_img from 'assets/images/philosophy-side-img.png'
import logo from 'assets/logo.png'
import 'pages/philosophy/Philosophy.scss'

class Philosophy extends Component {
    render() {
        return (
            <div className='Philosophy'>
                {/* LANDING PAGE */}
                <div className='landing-page container-h'>
                    <div className='container-v'>
                        <img id='landing-logo' src={logo}/>
                        <h2 id='landing-title'> White Heron Cafe</h2>
                    </div>
                </div>

                {/* STORE STORY */}
                <div className='story'>
                    <Row>
                        <Col sm='12' md='4'>
                            <div className="sidebar-img">
                                <img src={ side_img }/>
                            </div>
                        </Col>
                        <Col md='8'>
                            <p className="paragraph">{ library.Philosophy }</p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Philosophy