const express = require("express");
const leadRouter = express.Router();
const {
  createLead,
  getLeads,
  updateLead,
  deleteLead
} = require("../controllers/lead.controller");


// Get all leads
leadRouter.get("/lead", getLeads);

// Create a new lead
leadRouter.post("/lead", createLead);

// Update an existing lead
leadRouter.put("/lead/:id", updateLead);

// Delete a lead
leadRouter.delete("/lead/:id", deleteLead);


module.exports = leadRouter;
