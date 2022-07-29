import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import noData from "./assets/no_data.gif";
import "./App.css";

/*

To run the program:

1. After importing the file from Github run : "npm install node-modules --force"
2. Then to run the JSON Server run : "json-server --watch data.json"
3. At last run : "npm start" 

 */

function App() {
  /* to set the US data */
  const [usData, setUsData] = useState([]);
  /* to set the EUROPE data */
  const [europeData, setEuropeData] = useState([]);
  /* to set onClick on US button */
  const [usClick, setUsClick] = useState(false);
  /* to set onClick on EUROPE button */
  const [europeClick, setEuropeClick] = useState(false);
  /* to set onClick on other three buttons */
  const [otherButtonClick, setOtherButtonClick] = useState();

  /* to get the data from JSON server */
  const getData = () => {
    /* fetching the US data */
    fetch("http://localhost:3000/US")
      .then((response) => response.json())
      .then((responseData) => setUsData(responseData))
      .catch((error) => {
        console.log(error);
      });

    /* fetching the EUROPE data */
    fetch("http://localhost:3000/EUROPE")
      .then((response) => response.json())
      .then((responseData) => setEuropeData(responseData))
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(usData);
  // console.log(europeData);

  /* to give some side effect. Here to fetch the data on the screen */
  useEffect(() => {
    getData();
    setUsClick(true);
    setEuropeClick(false);
  }, []);

  /* functionality of US button */
  const onUsClick = () => {
    setUsClick(true);
    setEuropeClick(false);
    setOtherButtonClick("");
  };

  /* functionality of EUROPE button */
  const onEuropeClick = () => {
    setEuropeClick(true);
    setUsClick(false);
    setOtherButtonClick("");
  };

  /* functionality of Other three button */
  const onOtherButtonClick = () => {
    setOtherButtonClick({ noData });
    setUsClick(false);
    setEuropeClick(false);
  };

  return (
    /* JSX starts here */
    <div className="App" style={{ marginTop: "5%" }}>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic outlined example"
        style={{ marginBottom: "2%" }}
      >
        <button
          /* US button */
          type="button"
          class="btn btn-outline-primary"
          onClick={onUsClick}
        >
          US
        </button>

        <button
          /* US button */
          type="button"
          class="btn btn-outline-primary"
          onClick={onEuropeClick}
        >
          EUROPE
        </button>

        <button
          /* Other buttons */
          type="button"
          class="btn btn-outline-primary"
          onClick={onOtherButtonClick}
        >
          ASIA
        </button>

        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={onOtherButtonClick}
        >
          CURRENCIES
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={onOtherButtonClick}
        >
          CRYPTO
        </button>
      </div>

      {usClick && (
        /* on click of US button getting the results  */
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "35px",
          }}
        >
          {usData.map((item) => {
            /* getting the results via map() function  */

            return (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8px",
                    marginLeft: "35px",
                  }}
                >
                  {item.change > 0 ? (
                    /* toggling the Stock up arrow & down arrow along with color  */
                    <TrendingUpIcon color="success" fontSize="large" />
                  ) : (
                    <TrendingDownIcon color="error" fontSize="large" />
                  )}
                </div>

                <span>
                  <div
                    /* fetching names  */
                    style={{
                      fontWeight: "bolder",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    {item.name}
                  </div>

                  <div
                    /* fetching close  */
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    {item.close}
                  </div>
                </span>

                <span style={{ marginRight: "35px" }}>
                  {item.change_p > 0 ? (
                    <div
                      /* fetching change_p along with toggling the color  by using Ternary operator  */
                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "green",
                      }}
                    >
                      {item.change_p}%
                    </div>
                  ) : (
                    <div
                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "red",
                      }}
                    >
                      {item.change_p}%
                    </div>
                  )}

                  {item.change > 0 ? (
                    <div
                      /* fetching change along with toggling the color  by using Ternary operator  */

                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "green",
                      }}
                    >
                      {item.change}
                    </div>
                  ) : (
                    <div
                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "red",
                      }}
                    >
                      {item.change}
                    </div>
                  )}
                </span>
              </>
            );
          })}
        </div>
      )}

      {europeClick && (
        /* on click of EUROPE button getting the results  */
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "35px",
          }}
        >
          {europeData.map((item) => {
            /* getting the results via map() function  */

            return (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8px",
                    marginLeft: "35px",
                  }}
                >
                  {item.change > 0 ? (
                    /* toggling the Stock up arrow & down arrow along with color  */
                    <TrendingUpIcon color="success" fontSize="large" />
                  ) : (
                    <TrendingDownIcon color="error" fontSize="large" />
                  )}
                </div>

                <span>
                  <div
                    /* fetching names  */
                    style={{
                      fontWeight: "bolder",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    {item.name}
                  </div>

                  <div
                    /* fetching close  */
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    {item.close}
                  </div>
                </span>

                <span style={{ marginRight: "35px" }}>
                  {item.change_p > 0 ? (
                    <div
                      /* fetching change_p along with toggling the color by using Ternary operator  */
                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "green",
                      }}
                    >
                      {item.change_p}%
                    </div>
                  ) : (
                    <div
                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "red",
                      }}
                    >
                      {item.change_p}%
                    </div>
                  )}

                  {item.change > 0 ? (
                    <div
                      /* fetching change along with toggling the color  by using Ternary operator  */

                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "green",
                      }}
                    >
                      {item.change}
                    </div>
                  ) : (
                    <div
                      style={{
                        fontWeight: "bolder",
                        display: "flex",
                        justifyContent: "start",
                        color: "red",
                      }}
                    >
                      {item.change}
                    </div>
                  )}
                </span>
              </>
            );
          })}
        </div>
      )}

      <div /* on click of other three buttons, since we don't have data to fetch so, i have used on gif display to look even better */
      >
        {otherButtonClick && <img src={noData} height="395px" />}
      </div>
    </div>
  );
}

export default App;
