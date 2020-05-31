const Acc = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.type)
    ])
}

const App = () => {
    return React.createElement(
        "div", // tag.
        {}, // attributes like id's or porps.
        [
            React.createElement("h1", {}, "hello World"), // children
            React.createElement(Acc, {
                name: "1+6t",
                type: "mobile"
            }),
            React.createElement(Acc, {
                name: "samsung",
                type: "mobile"
            }),
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);