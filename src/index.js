import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

let a = [{title : "Tab" , content : 1} , {title : "Tab" , content : 2} , {title : "Tab" , content : 3}];

ReactDOM.render(<App a = {a}/>, document.getElementById("root"));
