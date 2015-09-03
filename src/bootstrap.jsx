import React from "react";
import Application from "./components/Application.jsx";

const ROOT_NODE_SELECTOR = "#main";

export default function(){
  React.render(<Application initialCount={2000} />, document.querySelector(ROOT_NODE_SELECTOR));
}


/*const shadowRenderer = (element) => {
  let frag = document.createDocumentFragment(),
      childSize = element.childNodes.length,
      i = 0;

  for (;;i++) {
    if (i === childSize) break;
    frag.appendChild(element.childNodes[0]);
    console.log(i, childSize, frag);
  }

  element.createShadowRoot().appendChild(frag);
};*/
