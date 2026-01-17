import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY =  import.meta.env.VITE_WEATHER_API_KEY;


  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    return {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{
            width: "300px",
            input: { color: "white" },
            label: { color: "white" },
            "& label.Mui-focused": {
              color: "#90caf9",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "#90caf9",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#90caf9",
              },
            },
          }}
        />

        <br /><br />

        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#90caf9",
            color: "#000",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#64b5f6",
            },
          }}
        >
          Search
        </Button>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            No such Place Exists!
          </p>
        )}
      </form>
    </div>
  );
}
