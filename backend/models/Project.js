const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		bugs: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Bug",
			},
		],
		owner: {
			type: String,
			required: true,
		},
		description: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
