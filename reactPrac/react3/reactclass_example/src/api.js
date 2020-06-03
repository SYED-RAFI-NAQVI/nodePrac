import React, { useState } from 'react'

// class Api extends Component {
// constructor(props) {
//     super(props)
//     this.state = {
//         userId: '',
//         title: '',
//         count: 1,
//         isGreen: true,
//     }
//     // this.handelClick = this.handelClick.bind(this)
//     // this.handelTitle = this.handelTitle.bind(this)
// }
// handelTitle() {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.count}`)
//         .then(response => response.json())
//         .then(json => console.log(this.setState({ userId: json.userId, title: json.title })))
// }

// handelClick() {
//     // fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.count}`)
//     //     .then(response => response.json())
//     //     .then(json => console.log(this.setState({ userId: json.id, title: json.title })))
//     // this.setState({ isGreen? 'green': 'black' })
//     this.state.isGreen ? false : true
//     this.setState({ isGreen: false })
// }
// render() {
//     return (
//         // <p onClick={this.} style={{ color: this.state.isGreen ? 'green' : 'black' }}> color </p >

//     )
// }
// }


const Api = () => {
    const [isGreen, setIsGreen] = useState(true)

    return (
        <h1
            onClick={() => setIsGreen(!isGreen)}
            style={{ color: isGreen ? 'green' : 'black' }}
        >color</h1>
    )

}
export default Api