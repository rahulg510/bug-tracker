const mongoose = require("mongoose");

const BugSchema = mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		description: { type: String, required: true, trim: true},
		priority: { type: Number, required: true },
		status: {
			type: String,
			default: "OPEN",
			enum: ["OPEN", "IN PROGRESS", "RESOLVED", "CLOSED"],
			required: true
		},
		project: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Project",
			required: true,
		},
		sprint: {
			type: String
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Bug", BugSchema);
