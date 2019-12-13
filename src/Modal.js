import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import React, {Component} from "react";

export class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        }

    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <MDBModal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <MDBModalHeader className='text-center' titleClass='w-100 font-weight-bold'>
                    Add new Todo
                </MDBModalHeader>
                <MDBModalBody>

                    <form className="mx-3 grey-text">
                        <MDBInput
                            name="time"
                            label="Time"
                            icon="clock"
                            hint="12:30"
                            group
                            type="text"
                            getValue={this.props.handleInputChange("time")}
                        />
                        <MDBInput
                            name="title"
                            label="Title"
                            icon="edit"
                            hint="Briefing"
                            group
                            type="text"
                            getValue={this.props.handleInputChange("title")}
                        />
                        <MDBInput
                            name="location"
                            label="Location (optional)"
                            icon="map"
                            group
                            type="text"
                            getValue={this.props.handleInputChange('location')}
                        />
                        <MDBInput
                            name="description"
                            label="Description (optional)"
                            icon="sticky-note"
                            group
                            type="textarea"
                            getValue={this.props.handleInputChange("description")}
                        />
                        <div className="md-form">
                            <select
                                name="priority"
                                className="browser-default custom-select"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <option value="" className="text-grey">Choose Priority</option>
                                <option value="high">High</option>
                                <option value="middle">Middle</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </form>

                </MDBModalBody>
                <MDBModalFooter className="justify-content-center">
                    <MDBBtn
                        color="info"
                        onClick={() => {
                            this.props.toggleModal();
                            this.props.addTodo(this.state.value);
                        }}
                    >
                        Add
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>

        )
    }
}

