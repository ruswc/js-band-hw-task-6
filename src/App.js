import React, {Component} from "react";
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";


import {Event} from "./Event";
import {SearchByTitle} from "./SearchByTitle";
import {Modal} from "./Modal";
import {SearchByStatus} from "./SearchByStatus";
import {SearchByPriority} from "./SearchByPriority";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [
                {
                    id: 1,
                    time: '10:00',
                    title: 'Breakfast with Ivan',
                    location: 'Cafe',
                    description: 'Discuss targets',
                    hidden: false,
                    status: "open",
                    priority: "high",
                    filtered: [true, true, true]
                },
                {
                    id: 2,
                    time: '10:30',
                    title: 'Daily meeting',
                    location: 'Office',
                    description: 'Discuss plans',
                    hidden: false,
                    status: "done",
                    priority: "middle",
                    filtered: [true, true, true]
                },
                {
                    id: 3,
                    time: '11:00',
                    title: 'Call with John',
                    location: 'office',
                    description: 'Discuss issues',
                    hidden: false,
                    status: "open",
                    priority: "low",
                    filtered: [true, true, true]
                },
                {
                    id: 4,
                    time: '12:00',
                    title: 'Coffee',
                    location: 'Office citchen',
                    hidden: false,
                    status: "open",
                    priority: "high",
                    filtered: [true, true, true]
                },
            ],
            modal: false,
            selectedStatus: "",
            selectedPriority: "",
            selectedTitle: ""
        }
        this._filterTodos = this._filterTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleDelete = eventId => {
        const events = this.state.events.filter(event => event.id !== eventId);
        this.setState({events});
        // this._filterTodos();
    };

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });
    };

    addTodo(priorityTodo) {
        var newArray = [...this.state.events];
        newArray.push({
            id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
            time: this.state.time,
            title: this.state.title,
            location: this.state.location,
            description: this.state.description,
            hidden: false,
            status: "open",
            priority: priorityTodo,
            filtered: [true, true, true]
        });
                this.setState({events: newArray});
                this.setState({
                    time: "",
                    title: "",
                    location: "",
                    description: "",
                    // priority: ""
                });
        // this._filterTodos();
        console.log(newArray);
        console.log(this.state);
        this.setState({events: newArray})
    };


    searchByTitle = inputName => typedData => {
        const newArray = this.state.events.slice();
        const filtered = newArray.filter(value => {
            if (value.title.indexOf(typedData) === -1) {
                value.filtered[0] = false;
            } else {
                value.filtered[0] = true;
            }
            return value;
        });
        this.setState({events: filtered, selectedTitle: typedData});
        this._filterTodos();
    };

    selectStatus = (value) => {
        this.setState({selectedStatus: value});
        this.searchByStatus(value);
        // this._filterTodos();
    };

    searchByStatus = (selected) => {
        const newArray = this.state.events.slice();
        const filtered = newArray.filter(value => {
            if (selected === "" || value.status === selected) {
                value.filtered[1] = true
            } else if (value.status !== selected) {
                value.filtered[1] = false;
            }
            return value;
        });
        this.setState({events: filtered});
        this._filterTodos();
    };

    selectPriority = (value) => {
        this.setState({selectedPriority: value});
        this.searchByPriority(value);
        // this._filterTodos();
    };

    searchByPriority = (selected) => {
        const newArray = this.state.events.slice();
        const filtered = newArray.filter(value => {
            if (selected === "" || value.priority === selected) {
                value.filtered[2] = true;
            } else {
                value.filtered[2] = false;
            }
            return value;
        });
        this.setState({events: filtered});
        this._filterTodos();
    };


    toggleStatus = eventId => () => {
        const events = this.state.events.map(event => {
            if (event.id === eventId) {
                if (event.status === "open") {
                    event.status = "done";
                } else {
                    event.status = "open"
                }
            }
            return event;
        });
        this.setState({events});
        // this._filterTodos();
    };

    togglePriority = eventId => () => {
        const events = this.state.events.map(event => {
            if (event.id === eventId) {
                switch (event.priority) {
                    case "high":
                        event.priority = "middle";
                        break;
                    case "middle":
                        event.priority = "low";
                        break;
                    case "low":
                        event.priority = "high";
                        break;
                    default:
                        event.priority = "high";
                }
            }
            return event;
        });
        this.setState({events});
    }

    _filterTodos() {
        const newState = this.state.events.map(value => {
            if (value.filtered.every(val => val)) {
                value.hidden = false;
            } else {
                value.hidden = true;
            }
            return value;
        });
        this.setState(newState);
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid z-depth-1 p-4 mb-4">Todo List</div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md='4' sm='6'>
                            <SearchByTitle searchByTitle={this.searchByTitle}/>
                        </MDBCol>
                        <MDBCol md='4' sm='6'>
                            <SearchByStatus onChange={this.selectStatus}/>
                        </MDBCol>
                        <MDBCol md='4' sm='6'>
                            <SearchByPriority onChange={this.selectPriority}/>
                        </MDBCol>
                        <MDBCol col='12' className='text-center mb-4'>
                            <MDBBtn gradient="blue" rounded onClick={this.toggleModal}>
                                Add Todo
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <hr className="hr-bold mb-4"/>
                <MDBContainer>
                    <MDBRow>
                        {this.state.events.map(event => (!event.hidden &&
                            <MDBCol className="mb-r" xl='3' md='4' sm='6' xs='12' key={event.id}>
                                <div id="schedule-items">

                                    <Event
                                        id={event.id}
                                        time={event.time}
                                        title={event.title}
                                        location={event.location}
                                        description={event.description}
                                        onDelete={this.handleDelete}
                                        toggleStatus={this.toggleStatus}
                                        togglePriority={this.togglePriority}
                                        thisStatus={event.status}
                                        thisPriority={event.priority}
                                    />

                                </div>
                            </MDBCol>
                        ))
                        }
                    </MDBRow>
                </MDBContainer>


                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleModal}
                    handleInputChange={this.handleInputChange}
                    toggleModal={this.toggleModal}
                    addTodo={this.addTodo}
                />

                <div className="container-fluid z-depth-1 p-4 mt-4">Ruslan Lavreniuk</div>

            </React.Fragment>
        );

    }
}

export default App;
