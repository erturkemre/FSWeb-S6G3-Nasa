import React from "react";

const Img = (props) => {
  const { hdurl } = props;
  return <img src={hdurl} />;
};

export default Img;
