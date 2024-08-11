import { LineChart } from ".."

export default function WorldChart({ dates, cases }) {
  return (
    <LineChart
      xAxis={[{ data: dates, label: 'Year'}]}
      series={[
        {
          data: cases,
        },
      ]}
      width={800}
      height={400}
    />
  )
}
