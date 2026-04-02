const service = require("../services/dashboardService");

exports.getDashboard = async (req, res) => {
  try {
    const summary = await service.getSummary();
    const category = await service.getCategoryBreakdown();
    const trends = await service.getMonthlyTrends();

    res.json({
      summary,
      categoryBreakdown: category,
      monthlyTrends: trends
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};