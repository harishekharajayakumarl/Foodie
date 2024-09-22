import React from "react";
import ReactDOM from "react-dom";

// React element
const heading = (
    <h1 className="head" tabIndex="5">
        Namaskaaram
    </h1>
);
// React functiinal component
const HeadingComponent = () =>{
    return <h1 className="heading">Namaskaram. This is Recat functional component</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);