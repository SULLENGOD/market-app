const PORT = import.meta.env.VITE_BACKEND_PORT | 3007;

export const getTickers = async (limit: number, offset: number) => {
    const url = `http://localhost:${PORT}/tickers?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

export const getTicker = async (symbol: string) => {
    const url = `http://localhost:${PORT}/ticker?symbol=${symbol}&limit=10`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

export const getLatestPrice = async (symbol: string) => {
    const url = `http://localhost:${PORT}/latest_price?symbol=${symbol}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}
