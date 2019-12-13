import React, {Component} from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBBadge
} from "mdbreact";

export class Error extends Component {
    render() {
        return (
            <MDBContainer className="hv-100">
                <MDBRow className="d-flex justify-content-center hv-100">
                    <MDBCol xl="2" l="3" md="4" sm="6" xs="9" className="m-4 d-flex justify-content-center align-items-center">
                        <h1>
                            <MDBBadge color="danger-color">
                                This page doesn't exist
                            </MDBBadge>
                        </h1>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Error
