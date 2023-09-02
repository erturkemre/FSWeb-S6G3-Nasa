import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ApodData from "./component/ApodData";
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [apodData, setApodData] = useState(null);
  const [date, setDate] = useState("2012-03-14");
  const changeHandler = (event) => {
    const { value } = event.target;
    setApodData(null);
    setDate(value);
  };

  useEffect(() => {
    let startDate = date;
    let realDate = new Date(date);
    realDate.setDate(realDate.getDate()+ 3);
    let endDate = realDate.toISOString().slice(0,10);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${startDate}&end_date${endDate}`)
      .then((res) => {
        setApodData(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, [date]);

  return (
    <div className="App">
      <Header date={date} changeHandler={changeHandler} />

      {apodData ? <ApodData apodData={apodData} /> : <h2>Yükleniyor..</h2>}
    </div>
  );
}

export default App;
