import { useState } from "react";
import TickerList from "./TickerList";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const PaginationControl = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <TickerList page={page} />

      <div className="conatiner d-flex justify-content-between align-items-center p-3">
        <div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              page > 0 && setPage(page - 1);
            }}
          >
            <BsChevronCompactLeft />
          </button>
        </div>

        <div>
          <h5 className="m-0">{page}</h5>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-dark "
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <BsChevronCompactRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationControl;
