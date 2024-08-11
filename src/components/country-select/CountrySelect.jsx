import { Select, FormControl, MenuItem } from "..";
import { useState } from "react";

export default function CountrySelect({ countries, handleSelect }) {
  const [country, setCountry] = useState("World");

  const handleChange = (e) => {
    setCountry(e.target.value);
    handleSelect(e.target.value);
  };
  return (
    <FormControl
      sx={{
        backgroundColor: "none",
      }}
    >
      <Select
        required
        sx={{
          width: "13rem",
          backgroundColor: "white",
          border: "1px solid white",
          outline: "none",
        }}
        labelId="country-select-label"
        id="country-select"
        onChange={handleChange}
        value={country}
      >
        <MenuItem value="World">World</MenuItem>
        {countries.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
