import Header from './components/header/header'
import { useQuery } from "@tanstack/react-query";
import Cards from "./components/cards/Card";
import Charts from "./components/chart/Charts";
import { Typography, Box, Grid } from "./components";
import { useState } from "react";
import WorldChart from "./components/chart/WorldChart";

export default function App() {
  const [region, setRegion] = useState("World");

  const {
    data: countries = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["countries"],
  });

  if (isLoading)
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100svh"
      >
        Loading...
      </Box>
    );

  if (error)
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100svh"
      >
        {"An error has occurred: " + error.message}
      </Box>
    );
  
  const totalDeaths = Number(countries[region]["Deaths"]);

  const totalCases = Number(countries[region]["Cases"]);

  function handleSelectRegion(value) {
    setRegion(value);
  }

  return (
    <Grid
      container
      direction="column"
      sx={{ minHeight: "100svh" }}
      gap="1rem"
    >
      <Header countries={countries} handleSelectRegion={handleSelectRegion} />
      
      <Box component="main" display="grid" gap="0.6rem">
        <Box
          component="section"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h2"
            justifyContent="center"
            fontSize="2rem"
            fontWeight={600}
            textAlign="center"
            marginBlockStart="1rem"
          >
            {region}
          </Typography>
          <Typography variant="p" textAlign="center" justifySelf="center">
            Data as of 10 Jul 2024 5:30 PM EDT
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gap="3rem"
            marginBlockStart="1rem"
          >
            <Cards cardHeading="Total Cases" total={totalCases} />
            <Cards
              cardHeading="Deaths"
              textColor="tomato"
              total={totalDeaths}
            />
          </Box>

          {region === "World" ? (
            <WorldChart
              dates={countries["globalOverview"]["date"].map((item) =>
                Number(new Date(item).getMonth() + 1)
              )}
              cases={countries["globalOverview"]["new_cases"].map(Number)}
            />
          ) : (
            <Charts
              totalCases={totalCases}
              totalDeaths={totalDeaths}
              region={region}
            />
          )}
        </Box>
      </Box>
    </Grid>
  );
}
