import React from "react";

function CountryButton({ setCountry, countryList }) {
  const onButtonClick = (item) => {
    setCountry(item);
  };

  return (
    <>
      {countryList.map((item) => {
        return (
          <div
            className="btn-group m-2"
            role="group"
            aria-label="Basic outlined example"
            style={{ marginBottom: "2%" }}
          >
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => onButtonClick(item)}
            >
              {item}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CountryButton;
