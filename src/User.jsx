import React from 'react'
import Link from 'react-router-dom'

export default class User extends React.Component {

    //let testVar = "this is a variable";

    //private variableName = "variable name";

    constructor(props) {
        super(props);
        console.log('user component construtor', props);

        this.variableName = "some value";
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
            <h1>User Component!</h1>
            <h2>this.variableName = {this.variableName}</h2>
            </div>
        );
    }
}