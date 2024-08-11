/* eslint-disable react/prop-types */
import { Typography, Box } from "..";
import CountrySelect from "../country-select/CountrySelect";

export default function Header({ countries, handleSelectRegion}) {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems='center'
      paddingInline="1em"
      paddingBlock="1em"
      sx={{
        backgroundColor: '#000',
        color: 'white'
      }}
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        marginBlockEnd="0.5rem"
        fontSize="1.3rem"
      >
        Monkey Pox Tracker
      </Typography>

      <CountrySelect
          countries={Object.keys(countries)}
          handleSelect={handleSelectRegion}
        />
    </Box>
  );
}
