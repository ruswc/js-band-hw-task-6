import React, {Component} from "react";
import {MDBInput} from 'mdbreact';

export class SearchByTitle extends Component {

    render() {
        return (
            <MDBInput
                name="searchbytitle"
                icon="search"
                hint="Search by title"
                type="text"
                getValue={this.props.searchByTitle('searchbytitle')}
            >
            </MDBInput>
        )

    }

}
