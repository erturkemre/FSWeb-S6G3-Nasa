import React from "react";

const Img = (props) => {
  const { url } = props;
  return <image src={url} />;
};

export default Img;
