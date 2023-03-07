function SearchCity(props) {
  const { city, temperature, description, min, max } = props;

  return (
    <div className="cityComponent">
      <div className="city">{city ?? "-"}</div>
      <div className="temp">{`${parseInt(temperature) ?? "-"}°C`}</div>
      <div className="desc">{description}</div>
      <div className="minmax">{`⬇️ / ⬆️: ${parseInt(min)}°C / ${parseInt(
        max
      )}°C`}</div>
    </div>
  );
}

export default SearchCity;
