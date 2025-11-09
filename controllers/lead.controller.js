const leadModel = require("../model/lead.model");

const createLead = async (req, res) => {
  try {
    const lead = await leadModel.create({
      ...req.body,
      owner: req.user.id,
      history: [{ updatedBy: req.user.id, action: "Created" }],
    });
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const getLeads = async (req, res) => {
  try {
    const leads = await leadModel.find().populate("owner");
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const updateLead = async (req, res) => {
  try {
    const lead = await leadModel.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    Object.assign(lead, req.body);
    lead.history.push({ updatedBy: req.user.id, action: "Updated" });
    await lead.save();
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const deleteLead = async (req, res) => {
  try {
    const lead = await leadModel.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json({ message: "Lead deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
};
