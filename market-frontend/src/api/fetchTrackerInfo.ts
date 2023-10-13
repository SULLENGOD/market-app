
export const getTickers = async (limit: number, offset: number) => {
    const url = `http://localhost:3007/tickers?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

export const getTicker = async (symbol: string) => {
    const url = `http://localhost:3007/ticker?symbol=${symbol}&limit=10`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

export const getLatestPrice = async (symbol: string) => {
    const url = `http://localhost:3007/latest_price?symbol=${symbol}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}
