import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeDefault from "./HomeDefault";

function Navigation(props) {
  const [searchParameter, setSearchParameter] = useState("");

  const navigate = useNavigate();
  const searchCity = (e) => {
    if (e.key === "Enter" && searchParameter.length) {
      props.onSubmit(searchParameter);
    }
  };

  return (
    <div className="navigation">
      <div className="header">
        <h1 onClick={() => navigate(`/`)}> Weather Forecast</h1>
        <input
          value={searchParameter}
          onChange={(e) => {
            setSearchParameter(e.target.value);
          }}
          type="text"
          id="searchBar"
          placeholder="Search a city"
          onKeyUp={searchCity}
        />
      </div>
    </div>
  );
}

export default Navigation;
