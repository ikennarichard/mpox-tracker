import { useQuery } from "@tanstack/react-query";
import Grid from "@mui/material/Grid";
import Cards from "./components/cards/Cards";
import Charts from "./components/chart/Charts";
import CountryInput from "./components/countryInput/CountryInput";

export default function App() {
  const {
    data: countries = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["countries"],
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{"An error has occurred: " + error.message}</div>;

  console.log(countries["Nigeria"]["date"]);
  return (
    <Grid 
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
      gap='0.5rem'
      >
      <h1>Monkey Pox Tracker</h1>
      <Cards />
      <CountryInput />
      <Charts />
    </Grid>
  );
}
