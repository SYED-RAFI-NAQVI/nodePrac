import React from 'react'
import { connect } from 'react-redux'

import buyCake from '../redux/cake/cakeAction'

function CakeComponent(props) {
    return (
        <div>
            <h3>Number Of Cakes - {props.numberOfCakes} </h3>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent)