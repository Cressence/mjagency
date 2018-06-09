import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Col, Button, UncontrolledCarousel,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import './Home.css';
import Looks from './../Looks/Looks';

// const items = [
//     {
//       src: require('./../../assets/pic1 (5).jpg')

//     },
//     {
//         src: require('./../../assets/pic1 (4).jpg')      
//     },
//     {
//         src: require('./../../assets/pic1 (5).jpg')      
//     }
//   ];

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: false,
            myLooks: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick() {
        this.setState({
            myLooks: !this.state.myLooks
        });
    }

    render() {
        return (
            <div>
                <Navbar color="" light expand="md">
                    <NavbarBrand className="title" href="/"><h2>My-Style</h2></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">COLLECTIONS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">DAY TO NIGHT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">STYLE OF THE MONTH</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">ABOUT US</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">MY LOOK</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="app-body row">
                    <Col sm={5} xs={12} >

                        <h1 className="carousel-text">My-STYLE | FIND THE UNIQUENESS</h1>
                        {/* <UncontrolledCarousel items={items} width="200px" /> */}
                        <p className="slogan text-center">
                            Find the perfect look for your taste and OWN IT
                            Find the perfect look for your taste and OWN IT
                            Find the perfect look for your taste and OWN IT
                            Find the perfect look for your taste and OWN IT
                        </p>

                        <Button onClick={this.handleClick} className="body-btn" >MY LOOK</Button>
                        <Modal isOpen={this.state.myLooks} toggle={this.handleClick} className={this.props.className}>
                            <ModalHeader toggle={this.handleClick} className="text-center">Your Perfect Look</ModalHeader>
                            <ModalBody>
                                <Looks />
                            </ModalBody>
                            <ModalFooter>
                                <Button className="modal-btn" onClick={this.handleClick}>Thank You</Button>
                            </ModalFooter>
                        </Modal>

                    </Col>
                    <Col sm={7} xs={7}></Col>
                </div>
            </div>
        )
    }
}
