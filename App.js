import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement("div", {id:"parent" },[
    React.createElement("div",{id:"child"},[
        React.createElement("h1", {},"I am Hari"),
        React.createElement("h2", {},"It's nmaste react")
    ]),
    React.createElement("div",{ id:"child2" },[
        React.createElement("h1", {},"Let's go buddies"),
        React.createElement("h2", {},"I am shekhar")
    ]),

]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
