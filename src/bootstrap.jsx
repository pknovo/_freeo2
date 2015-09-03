import React from "react";
import Application from "./components/Application.jsx";

const ROOT_NODE_SELECTOR = "#main";

const render = (routes) => {
  let route = window.location.hash.substr(1);
  React.render(<Application route={route} routes={routes}/>, document.querySelector(ROOT_NODE_SELECTOR));
};

export default function (routes) {
  render(routes);
}
