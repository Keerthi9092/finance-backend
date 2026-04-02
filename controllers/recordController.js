const Record = require("../models/Record");

// CREATE RECORD (Admin only)
exports.createRecord = async (req, res) => {
    try {
        const { amount, type, category, date, notes } = req.body;

        if (!amount || !type) {
            return res.status(400).json({ message: "Amount and type required" });
        }

        const record = await Record.create({
            amount,
            type,
            category,
            date,
            notes,
            UserId: req.user.id
        });

        res.status(201).json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL RECORDS
exports.getRecords = async (req, res) => {
    try {
        const { type, category } = req.query;

        let filter = {};

        if (type) {
            filter.type = type;
        }

        if (category) {
            filter.category = category;
        }

        const records = await Record.findAll({ where: filter });

        res.json(records);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// UPDATE RECORD
exports.updateRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const record = await Record.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        await record.update(req.body);
        res.json(record);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE RECORD
exports.deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const record = await Record.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        await record.destroy();
        res.json({ message: "Record deleted" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

