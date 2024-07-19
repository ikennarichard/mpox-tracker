/* eslint-disable react/prop-types */
import { Box, CardContent, Card, Typography } from "..";

export default function Cards({ date }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "2rem",
        marginBlockEnd: "2rem",
      }}
    >
      <Card
        sx={{ width: "10rem", height: "6.5rem", borderTop: "9px solid purple" }}
        variant="outlined"
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 15 }}
            color="text.secondary"
            fontWeight={600}
            variant="h2"
            gutterBottom
          >
            Confirmed Cases
          </Typography>
          <Typography fontSize={10}></Typography>
          <Typography fontSize={10}>Number of confirmed cases</Typography>
        </CardContent>
      </Card>
      <Card
        sx={{ width: "10rem", height: "6.5rem", borderTop: "9px solid tomato" }}
        variant="outlined"
      >
        <CardContent>
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Deaths
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{date}</Typography>
          <Typography fontSize={10}>Number of deaths</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
