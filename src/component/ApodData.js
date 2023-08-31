import React from "react";
import Details from "./Details";
import Img from "./Img";
import Video from "./Video";

const ApodData = (props) => {
  const { apodData } = props;
  return (
    <div>
      {apodData.media_type === "image" ? (
        <Img url={apodData.hdurl} />
      ) : (
        <Video url={apodData.url} />
      )}
      <Details apodData={apodData} />
    </div>
  );
};

export default ApodData;
