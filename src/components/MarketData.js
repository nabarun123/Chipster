import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "../App.css";

function MarketData({ data }) {
  // console.log(data);

  return (
    <>
      {data?.map((item) => {
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
                  +{item.change_p}%
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
                  +{item.change}
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
    </>
  );
}

export default MarketData;
