import { Chart } from "react-google-charts";
import { TickerResponse } from "../hooks/useFetchTickers";

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};



export function TickerChart({ tickerInfo, isLoading }: TickerResponse) {
  const data = [["Day", "Historic close price"]];

  if (tickerInfo?.data) {
    tickerInfo.data.slice(0, 30).forEach((day) => {
      data.push([
        new Date(day.date).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
        }),
        day.close,
      ]);
    });
  } else {
    console.log(tickerInfo?.error.message);
  }

  return (
    <>
      <div className="">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : tickerInfo?.error ? (
          <h5>{tickerInfo.error.message}</h5>
        ) : (
          <div className="d-flex flex-column">
            <p>
              <strong>Close: </strong> {tickerInfo?.data[0].close},{" "}
              <strong>High: </strong>
              {tickerInfo?.data[0].high}, <strong>Low: </strong>
              {tickerInfo?.data[0].low},<strong>Volume: </strong>{" "}
              {tickerInfo?.data[0].volume}
            </p>
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        )}
      </div>
    </>
  );
}
