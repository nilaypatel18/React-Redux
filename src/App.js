import React from "react";
import DefaultLayout from './utils/defaultLayout'

import "aos/dist/aos.css";
import "aos/dist/aos";

import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css'

import "./assets/css/style.css";
import "./assets/js/custom-js";

function App() {
  return (
    <div className="page-wrapper">
      <DefaultLayout />
    </div>
  );
}

export default App;
