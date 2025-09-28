const tradeModel = require("../model/trade.model");


// Get all trades
const getAllTrades = async (req, res) => {
  try {
    const trades = await tradeModel.find();
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get a single trade by ID
const getTradeById = async (req, res) => {
  try {
    const trade = await tradeModel.findById(req.params.id);
    if (!trade) return res.status(404).json({ message: "Trade not found" });
    res.status(200).json(trade);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};





module.exports = {
 
  getAllTrades,
  getTradeById,
 
};
