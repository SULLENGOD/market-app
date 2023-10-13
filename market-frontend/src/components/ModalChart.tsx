import { Ticker } from "../App";
import { useFetchPrice } from "../hooks/useFetchTickers";
import TickerDetail from "./TickerDetail";

const ModalChart = ({ ticker }: { ticker: Ticker }) => {
  const { price } = useFetchPrice(ticker.symbol);

  return (
    <div className="m-3">
      <button
        type="button"
        className="btn btn-ligth form-control shadow border link-secondary"
        data-bs-toggle="modal"
        data-bs-target={`#${ticker.symbol}`}
      >
        <div className="container">
          <div className="d-flex align-items-start justify-content-between">
            <div className="d-block">
              <h1 className="m-auto">{ticker.symbol}</h1>
              {price?.data ? <p>$ {price.data[0].close}</p> : <p>No info</p>}
            </div>
            <p className="m-3">{ticker.name}</p>
            <div>
              <p>{ticker.stock_exchange.acronym}</p>
              <p>{ticker.stock_exchange.country}</p>
            </div>
          </div>
        </div>
      </button>
      <TickerDetail ticker={ticker} />
    </div>
  );
};

export default ModalChart;
