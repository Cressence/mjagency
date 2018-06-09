import React, { Component } from 'react';
import {
    Input, FormGroup, Label, Button
} from 'reactstrap';

import './Looks.css';

export default class Looks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: '',
            skin: '',
            tops: [
                {
                    id: 1,
                    pic: require('./../../assets/monday_dark.jpeg')
                },
                {
                    id: 2,
                    pic: require('./../../assets/saurday_light.jpeg')
                },
                {
                    id: 3,
                    pic: require('./../../assets/monday_light.jpeg')
                },
            ],
            skirts: [
                {
                    id: 1,
                    pic: require('./../../assets/monday_light.jpg')
                },
                {
                    id: 2,
                    pic: require('./../../assets/saturday_light.jpg')
                },
                {
                    id: 3,
                    pic: require('./../../assets/wednesday_light.jpg')
                },
            ],
            showSkin: false,
            choosenTop: '',
            choosenSkirt: '',   
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSkin = this.handleChangeSkin.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value,
                showSkin: true
            }
        )
    }

    handleChangeSkin(event) {
        this.setState(
            {
                [event.target.name]: event.target.value,
            }
        )
    }

    handleSearch() {
        var topKey = Math.floor(Math.random() * this.state.tops.length);
        var skirtKey = Math.floor(Math.random() * this.state.skirts.length);

        this.setState(
            {
                choosenSkirt: this.state.skirts[skirtKey].pic,
                choosenTop: this.state.tops[topKey].pic,
                result: true,
            }
        )

    }

    complexionCategory() {
        return (
            <FormGroup>
                <Label for="exampleSelect">what category would you classify yourself?</Label>
                <Input type="select" name="skin" id="exampleSelect" onChange={this.handleChangeSkin}>
                    <option value="-">Complexion</option>
                    <option value="light">Light Skin</option>
                    <option value="dark">Dark Skin</option>
                </Input>
            </FormGroup>
        )
    }



    render() {
        return (
            <div>
                {this.state.result ?
                <div>
                    <img src={this.state.choosenTop} style={{ margin:"auto", display:"flex"}} width="300px" height="300px"/>
                    <img src={this.state.choosenSkirt} style={{ margin:"auto", display:"flex"}} width="300px" height="300px" />
                </div>
                    
                    :
                    <div>
                        <FormGroup>
                            <Label for="exampleSelect">Select a day for your outfit</Label>
                            <Input type="select" name="days" id="exampleSelect" onChange={this.handleChange}>
                                <option value="-">Days</option>
                                <option value="monday">Monday</option>
                                <option value="teusday">Teusday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                            </Input>
                        </FormGroup>
                        {this.state.showSkin ?
                            this.complexionCategory()
                            : null}
                        {this.state.skin !== '' && this.state.days !== '' ?
                            <Button className="modal-btn" onClick={this.handleSearch} >Search</Button>
                            : null
                        }
                    </div>
                }

            </div>
        )
    }
}
