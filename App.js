// const heading = React.createElement("h1",
//     { id: "heading" }, // attributes
//     "Hello World from react"); // Children of h1 tag


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "H1 tag from child"), React.createElement("h2", {}, "H2 tag from child")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);