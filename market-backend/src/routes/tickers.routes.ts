import { getLatestPrice, getTicker, getTickers } from "../controllers/tickers.controller";
import { Router } from "express";
const router: Router = Router();

router.get('/tickers', getTickers);
router.get('/ticker', getTicker);
router.get('/latest_price', getLatestPrice);

export default router;