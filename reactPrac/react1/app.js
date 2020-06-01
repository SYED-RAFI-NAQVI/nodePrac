import React from 'React'
import { render } from 'react-dom'
import Acc from './Acc';
import SearchLoaction from './location'


const App = () => {


    ////////////////////////////////
    ///// React Behind     ////////
    //////////////////////////////
    // return React.createElement(
    //     "div", // tag.
    //     {}, // attributes like id's or porps.
    //     [
    //         React.createElement("h1", {}, "hello World"), // children
    //         React.createElement(Acc, {
    //             name: "1+6t",
    //             type: "mobile"
    //         }),
    //         React.createElement(Acc, {
    //             name: "samsung",
    //             type: "mobile"
    //         }),
    //     ]
    // );
    return (
        <div>
            <h1>hello world</h1>
            <Acc name="i+6t" type='mobile' />
            <Acc name='mac' type='laptop' />
            <SearchLoaction />

        </div>
    )
};

render(
    React.createElement(App),
    document.getElementById("root")
);