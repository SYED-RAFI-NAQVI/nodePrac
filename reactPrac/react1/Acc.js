import React from 'React';
export default function Acc(props) {



    ////////////////////////////////
    ///// React Behind     ////////
    //////////////////////////////
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, props.name),
    //     React.createElement("h2", {}, props.type)
    // ]);


    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
        </div>
    )
};
