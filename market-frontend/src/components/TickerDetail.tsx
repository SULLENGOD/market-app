import { Ticker } from "../App"
import { useFetchTicker } from "../hooks/useFetchTickers"
import { TickerChart } from "./TickerChart";


const TickerDetail = ({ticker}: {ticker: Ticker}) => {

    const {tickerInfo, isLoading} = useFetchTicker(ticker.symbol);
    
    
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
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {ticker.name} |
              </h1>
              <h5 className="modal-title fs-5" >
                | {ticker.symbol}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <TickerChart tickerInfo={tickerInfo} isLoading={isLoading}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TickerDetail;