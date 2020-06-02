import React, { Component } from 'react'

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(this.setState({ userId: json.userId, title: json.title })))

    }
    render() {
        return (
            <p> {this.state.userId} : { this.state.title}</p>
        )
    }
}


export default Api