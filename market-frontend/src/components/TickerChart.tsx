import { TickerResponse } from "../hooks/useFetchTickers";
import CardDayInfo from "./CardDayInfo";
import UniqueChart from "./UniqueChart";

export function TickerChart({ tickerInfo, isLoading }: TickerResponse) {
  const dataDay: Array<[string, number, number, number, number]> = [];

  if (tickerInfo?.data) {
    tickerInfo.data.slice(0, 30).forEach((day) => {
      dataDay.push([
        new Date(day.date).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
        }),
        day.low,
        day.open,
        day.close,
        day.high,
      ]);
    });
  } else {
    console.log(tickerInfo?.error.message);
  }

  return (
    <>
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
        <div className="d-flex flex-column justify-content-center">
          <UniqueChart dataDay={dataDay} />
          <CardDayInfo tickerInfo={tickerInfo} isLoading={false} />
        </div>
      )}
    </>
  );
}
