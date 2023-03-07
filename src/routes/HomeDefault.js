import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import weather, { getWeather } from "../store/weather";
import CitySummary from "../components/CitySummary";
import Navigation from "./Navigation";

function HomeDefault() {
  const data = useSelector((state) => state.weather);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const istanbul = data.cities["istanbul"];
  const izmir = data.cities["izmir"];
  const antalya = data.cities["antalya"];

  console.log(istanbul);
  useEffect(() => {
    dispatch(getWeather("istanbul"));
    dispatch(getWeather("izmir"));
    dispatch(getWeather("antalya"));
  }, []);

  const openCityPage = (cityName) => {
    navigate(`/city/${cityName}`);
  };

  return (
    <div>
      <Navigation onSubmit={openCityPage} />
      <div className="homeArticle">
        <div>
          {weather !== null && (
            <CitySummary
              city={istanbul?.name}
              temperature={istanbul?.main?.temp}
              description={istanbul?.weather[0]?.description}
              min={istanbul?.main?.temp_min}
              max={istanbul?.main?.temp_max}
            />
          )}
        </div>
        <div>
          {weather !== null && (
            <CitySummary
              city={izmir?.name}
              temperature={izmir?.main?.temp}
              description={izmir?.weather[0]?.description}
              min={izmir?.main?.temp_min}
              max={izmir?.main?.temp_max}
            />
          )}
        </div>
        <div>
          {weather !== null && (
            <CitySummary
              city={antalya?.name}
              temperature={antalya?.main?.temp}
              description={antalya?.weather[0]?.description}
              min={antalya?.main?.temp_min}
              max={antalya?.main?.temp_max}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeDefault;
