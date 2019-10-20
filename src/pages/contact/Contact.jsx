import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import 'pages/contact/Contact.scss'

var map_url = '//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.74481474312!2d-73.57372848449963!3d45.51521537910146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4aa76c0001%3A0x4fbd552909c62322!2sCafe%2045!5e0!3m2!1sen!2sca!4v1566752673143!5m2!1sen!2sca'
var contact_email = 'https://formspree.io/wangemily-sw@hotmail.com'

class Contact extends Component {
    render() {
        return (
            <div className='Contact page center'>
                <Row className='contact'>
                    <Col sm='12' md='6'> <iframe title="store-map" src={map_url} frameBorder="0" allowFullScreen={true} /> </Col>
                    <Col sm='12' md='6'>
                        <div className="contact-form-title padding-medium">
                            <h2>Address</h2>
                        </div>

                        <div className='contact-form-info'>
                            <p className='address '> 131 Rue Prince Arthur EMontréal, QC H2X 1B6, Canada </p>
                        </div> 
                        
                        <form className="contact-form"
                            action={contact_email}
                            method="POST">
                            <div className="contact-form-input ">
                                <input className="input" type="email" name="Email" placeholder="Your e-mail" />
                                <input className="input" type="text" name="Subject" placeholder="Subject" />
                                <textarea className="input" type="text" name="Message" placeholder="Write us anything" />
                                <button className='button-general' type="submit"> Submit </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact