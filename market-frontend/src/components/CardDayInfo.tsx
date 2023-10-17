import { useState } from "react";
import { TickerResponse } from "../hooks/useFetchTickers";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const CardDayInfo = ({ tickerInfo, isLoading }: TickerResponse) => {
  const [currentDay, setCurrentDay] = useState(0);
  if (
    !tickerInfo?.data ||
    currentDay < 0 ||
    currentDay >= tickerInfo.data.length
  ) {
    return <p>No data available</p>;
  }

  const date = new Date(
    tickerInfo.data[currentDay].date as string
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
  });

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
          No data found
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-ligth"
              onClick={() => currentDay < 99 && setCurrentDay(currentDay + 1)}
            >
              <BsChevronCompactLeft />
            </button>
            <div className="align-self-center">{currentDay} days ago</div>
            <button
              className="btn btn-ligth"
              onClick={() => currentDay > 0 && setCurrentDay(currentDay - 1)}
            >
              <BsChevronCompactRight />
            </button>
          </div>
          <div className="card p-3 shadow-sm">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <strong>Date: </strong>
                  <p>{date}</p>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <strong>Open price: </strong>
                  <p>$ {tickerInfo?.data[currentDay].open}</p>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <strong>Close price: </strong>
                  <p>$ {tickerInfo?.data[currentDay].close}</p>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <strong>High price: </strong>
                  <p>$ {tickerInfo?.data[currentDay].high}</p>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <strong>Low price: </strong>
                  <p>$ {tickerInfo?.data[currentDay].low}</p>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <strong>Volume: </strong>
                  <p>$ {tickerInfo?.data[currentDay].low}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDayInfo;
