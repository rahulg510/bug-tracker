const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const jwtCheck = require("./config/auth0");
const userInfo = require("./config/userInfo");
const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");

dotenv.config({ path: "./config/config.env" });
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(jwtCheck);
// app.use(userInfo);
//routes
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(
		`app is listening on port ${PORT} in ${process.env.NODE_ENV} mode`
	);
});
