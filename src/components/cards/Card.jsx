/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import { CardContent, Card, Typography } from "..";

export default function Cards({ cardHeading, textColor, total }) {
  return (
    <Card sx={{ padding: "1rem", borderRadius: "1rem" }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography
          variant="p"
          color={textColor}
          fontWeight={600}
          fontSize="2rem"
        >
          <CountUp start={0} end={total} duration={2} separator="," />
        </Typography>
        <Typography variant="p" color="gray">
          {cardHeading}
        </Typography>
      </CardContent>
    </Card>
  );
}
