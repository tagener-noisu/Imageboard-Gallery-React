import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery"

const root = document.createElement("div");
root.id = "gallery-wrapper";
document.body.appendChild(root);
ReactDOM.render(<Gallery />, root);
