import React from "react";
import MyNavbar from "./components/myNavbar/MyNavbar";
import "bootstrap/dist/css/bootstrap.css";
import MyHeader from "./components/myHeader/MyHeader";
import Main from "./components/main/Main";
import data from "./helper/data";
import "./App.scss";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyHeader />
      <Main data={data} />
    </div>
  );
};

export default App;
