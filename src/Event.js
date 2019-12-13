import React, {Component} from "react";
import {
    MDBBadge,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBMask
} from "mdbreact";

export class Event extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="my-3">
                    <MDBCard>

                        {this.props.thisStatus === "open" && (

                            <MDBCardBody>
                                <MDBCardTitle>
                                    {this.props.title}
                                </MDBCardTitle>
                                <MDBBadge pill
                                          className="px-2 m-2 float-right pointer"
                                          color={
                                              ((this.props.thisPriority === "high") && ("red")) || ((this.props.thisPriority === "middle") && ("success")) || ((this.props.thisPriority === "low") && ("primary-color"))
                                          }
                                          onClick={this.props.togglePriority(this.props.id)}
                                          style={{cursor: 'pointer'}}
                                >

                                    {"Priority: " + this.props.thisPriority}

                                </MDBBadge>
                                {this.props.location && (
                                    <div className="my-3">
                                        <MDBCardText>
                                            <MDBIcon icon="map-marker-alt"/>
                                            {" " + this.props.location}
                                        </MDBCardText>
                                    </div>
                                )}

                                {this.props.description && (
                                    <div className="my-3">

                                        <MDBCardText>
                                            {this.props.description}
                                        </MDBCardText>

                                    </div>
                                )}

                                <MDBBadge
                                    className="px-2 m-2 float-right"
                                    color="danger"
                                    onClick={() => this.props.onDelete(this.props.id)}
                                >
                                    <MDBIcon icon="minus"/>

                                </MDBBadge>

                                {this.props.thisStatus === "open" && (
                                    <MDBBadge
                                        className="px-2 m-2 float-right"
                                        color="warning-color"
                                        onClick={this.props.toggleStatus(this.props.id)}
                                    >
                                        <MDBIcon icon="square"/>

                                    </MDBBadge>
                                )}

                                {this.props.thisStatus === "done" && (
                                    <MDBBadge
                                        className="px-2 m-2 float-right"
                                        color="success"
                                        onClick={this.props.toggleStatus(this.props.id)}
                                    >
                                        <MDBIcon icon="check"/>

                                    </MDBBadge>
                                )}


                                <MDBBadge
                                    color="primary"
                                    className="px-2 m-2 float-right"
                                >
                                    <MDBIcon
                                        icon="pen"
                                        onClick={this.props.toggleModal}
                                    />
                                </MDBBadge>

                            </MDBCardBody>

                        )}


                        {this.props.thisStatus === "done" && (
                            <MDBMask className="flex-center" overlay="grey-strong">
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        {this.props.title}
                                    </MDBCardTitle>

                                    <MDBBadge pill
                                              className="px-2 m-2 float-right pointer"
                                              color={
                                                  ((this.props.thisPriority === "high") && ("red")) || ((this.props.thisPriority === "middle") && ("success")) || ((this.props.thisPriority === "low") && ("primary-color"))
                                              }
                                              onClick={this.props.togglePriority(this.props.id)}
                                              style={{cursor: 'pointer'}}
                                    >

                                        {"Priority: " + this.props.thisPriority}

                                    </MDBBadge>

                                    {this.props.location && (
                                        <div className="my-3">

                                            <MDBCardText>
                                                <MDBIcon icon="map-marker-alt"/>
                                                {" " + this.props.location}
                                            </MDBCardText>

                                        </div>
                                    )}

                                    {this.props.description && (
                                        <div className="my-3">

                                            <MDBCardText>
                                                {this.props.description}
                                            </MDBCardText>

                                        </div>
                                    )}

                                    <MDBBadge
                                        className="px-2 m-2 float-right"
                                        color="danger"
                                        onClick={() => this.props.onDelete(this.props.id)}
                                    >
                                        <MDBIcon icon="minus"/>

                                    </MDBBadge>

                                    {this.props.thisStatus === "open" && (
                                        <MDBBadge
                                            className="px-2 m-2 float-right"
                                            color="rgba-blue-grey-strong"
                                            onClick={this.props.toggleStatus(this.props.id)}
                                        >
                                            <MDBIcon icon="square"/>

                                        </MDBBadge>
                                    )}

                                    {this.props.thisStatus === "done" && (
                                        <MDBBadge
                                            className="px-2 m-2 float-right"
                                            color="success"
                                            onClick={this.props.toggleStatus(this.props.id)}
                                        >
                                            <MDBIcon icon="check"/>

                                        </MDBBadge>
                                    )}


                                    <MDBBadge
                                        color="primary"
                                        className="px-2 m-2 float-right"
                                    >
                                        <MDBIcon
                                            icon="pen"
                                            onClick={this.props.toggleModal}
                                        />
                                    </MDBBadge>

                                </MDBCardBody>
                            </MDBMask>
                        )}

                    </MDBCard>
                </div>

            </React.Fragment>
        );
    }
}
