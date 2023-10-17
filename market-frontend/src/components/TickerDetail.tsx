import { Ticker } from "../App";
import { useFetchTicker } from "../hooks/useFetchTickers";
import { TickerChart } from "./TickerChart";

const TickerDetail = ({ ticker }: { ticker: Ticker }) => {
  const { tickerInfo, isLoading } = useFetchTicker(ticker.symbol);
  console.log(tickerInfo);
  
  return (
    <div
      className="modal fade"
      id={`${ticker.symbol}`}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex flex-column">
            <div className="d-flex">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {ticker.name} |
              </h1>
              <h5 className="modal-title fs-5">| {ticker.symbol}</h5>
            </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            <div>
              <span>{ticker.stock_exchange.acronym} |</span>
              <span>| {ticker.stock_exchange.country}</span>
            </div>
          </div>
          <div className="modal-body">
            <TickerChart tickerInfo={tickerInfo} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerDetail;
