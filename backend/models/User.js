const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	userId: { type: String, required: true, trim: true },
	projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
	joined: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
