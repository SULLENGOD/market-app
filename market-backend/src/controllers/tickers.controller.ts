import { Request, Response } from "express"
const key = process.env.API_KEY;


export const getTickers = async (req: Request, res: Response) => {
    const {limit, offset} = req.query;
    const url = `http://api.marketstack.com/v1/tickers?access_key=${key}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  }

export const getTicker = async (req: Request, res: Response) => {
    const url = `http://api.marketstack.com/v1/eod?access_key=${key}&symbols=${req.query.symbol}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(key);
    

    res.json(data);
}

export const getLatestPrice = async (req: Request, res: Response) => {
  const url = `http://api.marketstack.com/v1/eod/latest?access_key=${key}&symbols=${req.query.symbol}`;
  const response = await fetch(url);
  const data = await response.json();
  
  res.json(data);
}