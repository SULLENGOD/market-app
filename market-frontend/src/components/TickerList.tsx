import { useFetchTickers } from "../hooks/useFetchTickers";
import ModalChart from "./ModalChart";

interface prop {
  page: number;
}

const TickerList = ({ page }: prop) => {

  const { tickers, isLoading } = useFetchTickers(10, 10 * page);

  return (
    <>
      {
        !isLoading && tickers?.map( ticker => {
          return <ModalChart ticker={ticker} />
        })
      }
    </>
  );
};

export default TickerList;
