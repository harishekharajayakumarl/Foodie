import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = (
    <h1 className="head" tabIndex={"5"}>
        Namaskaaram 
    </h1>
);

// React Component
const HeadingComponenet = () => (
    <div id="container">
        <h1 className="heading">React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponenet />);