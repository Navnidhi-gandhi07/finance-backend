const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    createdBy: req.user.id
  });

  res.status(201).json(record);
};

exports.getRecords = async (req, res) => {
  const { type, category, startDate, endDate, page = 1 } = req.query;

  const filter = {};

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate)
    };
  }

  const records = await Record.find(filter)
    .skip((page - 1) * 10)
    .limit(10);

  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const updated = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted successfully" });
};