import React from "react";
import Cardee from "./Cardee";
import "./Main.scss";

const Main = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Cardee bilgi={data} />
    </div>
  );
};

export default Main;
