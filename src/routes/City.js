import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import App from "../App";
import CitySummary from "../components/CitySummary";

function City(props) {
  const [data, setData] = useState(null);
  const { cityName } = useParams();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=00aba192d8e34d861ab5cc361bf86cff&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [cityName]);
  return (
    <div>
      <App />
      <div className="city">
        {data !== null && (
          <CitySummary
            city={data?.name}
            temperature={data?.main?.temp}
            description={data?.weather[0]?.description}
            min={data?.main?.temp_min}
            max={data?.main?.temp_max}
          />
        )}
      </div>
    </div>
  );
}

export default City;
