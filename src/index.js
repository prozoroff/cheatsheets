import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "@nanostores/react";

import { router } from "./store/router";
import Topic from "./pages/topic";
import Home from "./pages/home";

function App() {
  const page = useStore(router);
  if (page.route === "home") {
    return <Home />;
  } else if (page.route === "topic") {
    return <Topic />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
