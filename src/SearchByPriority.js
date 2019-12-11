import React, {Component} from "react";

export class SearchByPriority extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <div className="md-form">
                <select
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

        );
    }
}

