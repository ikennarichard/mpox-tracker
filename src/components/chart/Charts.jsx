/* eslint-disable react/prop-types */
import { BarChart } from "..";

export default function Charts({ totalDeaths, totalCases, region }) {
  return (
    <BarChart
      yAxis={[
        {
          scaleType: 'linear',
          
        }
      ]}
      xAxis={[
        {
          scaleType: "band",
          data: ['Total Cases', 'Total Deaths'],
          label: region,
          labelStyle: { fontWeight: 600, fontSize: '1.5rem' },
          colorMap: {
            type: 'ordinal',
            values: ["Total Cases", "Total Deaths"],
            colors: ['skyblue', 'tomato'],
          }
          
        },
      ]}
      series={[{ data: [totalCases, totalDeaths] }]}
      width= {600}
      height={300}
      sx={{ padding: 3 }}
    />
  );
}
