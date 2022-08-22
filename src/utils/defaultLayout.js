import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import RoutesElement from "../Routes";
import { useDispatch } from "react-redux";

import Header from "../section/Header";
import Footer from "../section/Footer";

function DefaultLayout() {
  const dispatch = useDispatch();
  let elements = useRoutes(RoutesElement);

  useEffect(() => {
    dispatch({ type: "Get_Home_Details" });
  }, []);

  return (
    <>
      <Header />
      {elements}
      <Footer />
    </>
  );
}

export default DefaultLayout;
