import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MarketData from "./components/MarketData";
import CountryButton from "./components/CountryButton";

/*

To run the program:

1. After importing the file from Github run : "npm install node-modules --force"
2. Then to run the JSON Server run : "json-server --watch data.json"
3. At last run : "npm start" 

 */

function App() {
  /* to set the US data */
  const [country, setCountry] = useState("US");
  const [data, setData] = useState([]);
  const [countryList, setCountryList] = useState([]);

  /* to get the data from JSON server */
  const getData = () => {
    fetch(`http://localhost:3000/total`)
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        setData(responseData);
        setCountryList(Object.keys(responseData)); // US, EUROPE, ASIA
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* to give some side effect. Here to fetch the data on the screen */
  useEffect(() => {
    getData();
  }, []);

  return (
    /* JSX starts here */
    <div className="App" style={{ marginTop: "5%" }}>
      {/* calling the CountryButton component and passing setCountry as a prop */}
      <CountryButton setCountry={setCountry} countryList={countryList} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "35px",
        }}
      >
        {/* calling the MarketData component and passing data as a prop */}
        <MarketData data={data[country]} />
      </div>
    </div>
  );
}

export default App;
