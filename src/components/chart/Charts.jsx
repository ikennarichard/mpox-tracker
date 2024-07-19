import { BarChart } from "..";

export default function Charts() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Total Cases", "Total Deaths"],
          colorMap: {
            type: 'ordinal',
            values: [4, 5],
            colors: ['red', 'blue'],
          }
          
        },
      ]}
      series={[{ data: [4, 5] }]}
      width={500}
      height={300}
    />
  );
}
