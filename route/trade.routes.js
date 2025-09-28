const express = require("express");
const tradeRouter = express.Router();
const {
  getAllTrades,
  getTradeById,
} = require("../controllers/trade.controller");


// Get all trades
tradeRouter.get("/trade", getAllTrades);

// Get a single trade by ID
tradeRouter.get("/trade/:id", getTradeById);



module.exports = tradeRouter;
