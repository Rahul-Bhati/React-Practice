

// const heading = React.createElement("h1", {}, "Hello World!"); // here {} is for props like id, class etc.
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// making bascic html struture using react
/*
    <div id="main">
        <div class"left">
            <h1>Left</h1>
        </div>
        <div class"right">
            <h1>Right</h1>
        </div>
        <h1>Hello World!</h1>
    </div>
*/

const content = React.createElement("div",{id:"main"},
    [
        React.createElement("div", {class:"left"}, React.createElement("h1",{},"Left")),
        React.createElement("div", {class:"right"}, React.createElement("h1",{},"Right")),
        React.createElement("h1", {}, "Hello World!"),
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);

// is syntext ko or bhi acha banane ke liye JSX ka use karte hai.