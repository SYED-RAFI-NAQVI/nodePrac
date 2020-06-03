import React, { Component } from 'react'

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            count: 1
        }
        this.handelClick = this.handelClick.bind(this)
        // this.handelTitle = this.handelTitle.bind(this)
    }
    // handelTitle() {
    //     fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.count}`)
    //         .then(response => response.json())
    //         .then(json => console.log(this.setState({ userId: json.userId, title: json.title })))
    // }

    handelClick() {
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.count}`)
            .then(response => response.json())
            .then(json => console.log(this.setState({ userId: json.id, title: json.title })))
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <p onClick={this.handelClick}> {this.state.userId} : { this.state.title}</p>

        )
    }
}


export default Api