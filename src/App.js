import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ApodData from "./component/ApodData";
import Header from "./component/Header";

function App() {
  const [apodData, setApodData] = useState(null);
  const [date, setDate] = useState("2012-03-14");
  const changeHandler = (event) => {
    const { value } = event.target;
    setApodData(null);
    setDate(value);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((res) => {
        setApodData(res.data);
      })
      .catch((err) => {});
  }, [date]);

  return (
    <div className="App">
      <Header date={date} changeHandler={changeHandler} />

      {apodData ? <ApodData apodData={apodData} /> : <h2>Yükleniyor..</h2>}
    </div>
  );
}

export default App;
