import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import PageNotFound from "./pages/PageNotFound";

let element = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Service /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/career", element: <Career /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <PageNotFound /> },
];

export default element;
