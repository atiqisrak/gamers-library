const Deal = require("../../models/deal/deal");

// Create a new deal
exports.createDeal = async (req, res) => {
  const { title, description, startDate, endDate, discounts } = req.body;

  try {
    const deal = new Deal({
      title,
      description,
      startDate,
      endDate,
      discounts,
    });

    await deal.save();
    res.status(201).json({ message: "Deal created successfully", deal });
  } catch (error) {
    console.error("Error creating deal:", error);
    res.status(500).json({ message: "Error creating deal", error });
  }
};

// Get all deals
exports.getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.status(200).json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ message: "Error fetching deals", error });
  }
};

// Get a single deal by ID
exports.getDealById = async (req, res) => {
  const { id } = req.params;

  try {
    const deal = await Deal.findById(id);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    res.status(200).json(deal);
  } catch (error) {
    console.error("Error fetching deal:", error);
    res.status(500).json({ message: "Error fetching deal", error });
  }
};

// Update a deal by ID
exports.updateDealById = async (req, res) => {
  const { id } = req.params;
  const { title, description, startDate, endDate, discounts } = req.body;

  try {
    const deal = await Deal.findById(id);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    deal.title = title || deal.title;
    deal.description = description || deal.description;
    deal.startDate = startDate || deal.startDate;
    deal.endDate = endDate || deal.endDate;
    deal.discounts = discounts || deal.discounts;
    deal.updatedAt = Date.now();

    await deal.save();
    res.status(200).json({ message: "Deal updated successfully", deal });
  } catch (error) {
    console.error("Error updating deal:", error);
    res.status(500).json({ message: "Error updating deal", error });
  }
};

// Delete a deal by ID
exports.deleteDealById = async (req, res) => {
  const { id } = req.params;

  try {
    const deal = await Deal.findByIdAndDelete(id);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.status(200).json({ message: "Deal deleted successfully" });
  } catch (error) {
    console.error("Error deleting deal:", error);
    res.status(500).json({ message: "Error deleting deal", error });
  }
};
