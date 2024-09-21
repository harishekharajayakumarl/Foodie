import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaskaaram Mavane"
);
console.log(heading);

const jsxHeading = <h1 id="heading">Namaskaaram</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);