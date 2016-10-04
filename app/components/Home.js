import React from "react";

import { transparentBg } from "../styles";

const Home = () => {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Hello React World!</h1>
      <p className="lead">A very simple react boilerplate.</p>
    </div>
  );
};

export default Home;
