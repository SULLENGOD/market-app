import { useEffect, useState } from "react"
import { getLatestPrice, getTicker, getTickers } from "../api/fetchTrackerInfo";
import { Ticker } from "../App";

interface TickersResponse {
    tickers: Ticker[] | undefined;
    isLoading: boolean;
}
export interface dayInfo {
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    date: string;
}
export interface TickerResponse {
    tickerInfo: {
        error: {
            message: string;
            code: string;
        } 
        data: dayInfo[];
    } | undefined;
    isLoading: boolean;
}

interface dayResponse {
    price: {
        data: dayInfo[];
        error: {
            message: string;
            code: string;
        }
    } | undefined
    isLoading: boolean;
}

export const useFetchTickers = (limit: number, offset: number): TickersResponse => {

    const [tickers, setTickers] = useState();
    const [isLoading, setIsloading] = useState(true);

    const getTickersPage = async () => {
        try {
            const result = await getTickers(limit, offset);
            setTickers(result.data);
            setIsloading(false);
        } catch (error) {
            console.error("Error fetching tickers:", error);
            setIsloading(false);
        }
    }

    useEffect(() => {
        getTickersPage();
    }, [limit, offset]);
    
    return {
        tickers,
        isLoading
    }
}

export const useFetchTicker = (symbol: string): TickerResponse => {
    const [tickerInfo, setTickerInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getTickerInfo = async () => {
        try {
            const result = await getTicker(symbol);
            setTickerInfo(result);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching tickers:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getTickerInfo();
    },[]);

    return {
        tickerInfo,
        isLoading
    }
}

export const useFetchPrice = (symbol: string): dayResponse => {
    const [price, setPrice] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getPrice = async () => {
        try {
            const result = await getLatestPrice(symbol);
            setPrice(result);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching tickers:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getPrice();
    },[]);

    return {
        price,
        isLoading
    }
}