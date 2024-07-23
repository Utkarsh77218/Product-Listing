import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/route.js";

const app = express();

const port = process.env.PORT || 5000;

// Connect to the database
mongoose
    .connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors());

app.use(bodyParser.json());

app.use("/api", router);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});