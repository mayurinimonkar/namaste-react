import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "This is namaste react"),
    React.createElement("h2", { id: "h2" }, "By Akshay Saini"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I'm an h1 Tag"),
    React.createElement("h2", { id: "h2" }, "I'm an h2 Tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
console.log(parent);
const root = document.getElementById("root");

// Remove this if you're going to use createRoot()
ReactDOM.render(parent, root);
