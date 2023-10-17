import { Chart } from "react-google-charts";
import { TickerResponse } from "../hooks/useFetchTickers";
import CardDayInfo from "./CardDayInfo";

const options = {
  curveType: "function",
  legend: { position: "bottom" },
};

export function TickerChart({ tickerInfo, isLoading }: TickerResponse) {
  const data = [["Day", "Historic close price"]];

  if (tickerInfo?.data) {
    tickerInfo.data.slice(0, 30).forEach((day) => {
      data.push([
        new Date(day.date).toLocaleDateString("en-US", {
          month: "short",
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
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : tickerInfo?.error ? (
          <div className="alert alert-danger" role="alert">
            {tickerInfo.error.message}
          </div>
        ) : (
          <div className="d-flex flex-column">
            <div className="container position-static shadow-sm">
              <Chart
                chartType="LineChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
              />
            </div>
            <CardDayInfo tickerInfo={tickerInfo} />
          </div>
        )}
      </div>
    </>
  );
}
