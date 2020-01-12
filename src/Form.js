import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            shortName: "",
            display: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ display: true });
    }

    handleChange(e) {
        this.setState({ display: false });
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="Form">
                <form>
                    <div className="input-container">
                        <label className="title" htmlFor="full">
                            Enter full name
                        </label>
                        <input
                            name="fullName"
                            type="text"
                            id="full"
                            value={this.state.fullName}
                            onChange={this.handleChange}
                        ></input>
                        <div className="display">
                            {this.state.display === true && (
                                <h3>Full Name is {this.state.fullName}</h3>
                            )}
                        </div>
                        <label className="title" htmlFor="short">
                            Enter short name
                        </label>
                        <input
                            name="shortName"
                            type="text"
                            id="short"
                            value={this.state.shortName}
                            onChange={this.handleChange}
                        ></input>
                        <div className="display">
                            {this.state.display === true && (
                                <h3>Short Name is {this.state.shortName}</h3>
                            )}
                        </div>
                    </div>
                    <button onClick={this.handleSubmit}>Add!</button>
                </form>
                {this.state.fullName === "Tay" && <p>Hello Tay!</p>}
                {this.state.fullName === "code" ? (
                    <p>Code!</p>
                ) : (
                    <p>Waiting for the code word!</p>
                )}
            </div>
        );
    }
}

export default Form;
