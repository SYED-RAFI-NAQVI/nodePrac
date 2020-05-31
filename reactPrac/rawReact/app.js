const Acc = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "1+6t"),
        React.createElement("h2", {}, "Mobile")
    ])
}


const App = () => {
    return React.createElement(
        "div", // tag.
        {}, // attributes like id's or porps.
        [
            React.createElement("h1", {}, "hello World"), // children
            React.createElement(Acc),
            React.createElement(Acc)
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);