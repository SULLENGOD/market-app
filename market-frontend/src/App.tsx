import "./App.css";
import PaginationControl from "./components/PaginationControl";

export interface Ticker {
  name: string;
  symbol: string;
  stock_exchange: {
    name: string;
    acronym: string;
    country: string;
  };
}

const App = () => {
  return (
    <div className="main-container">
      <div className="main-app">
        <h1 className="p-3">Tickers</h1>
        <div className="container">
          <PaginationControl />
        </div>
      </div>
    </div>
  );
};

export default App;
