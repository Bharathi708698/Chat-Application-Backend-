const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/UserRoute.js");
const chatRoute = require("./routes/ChatRoute.js");
const messageRoute = require("./routes/MessageRoute.js")


require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);


const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`server running on port: ${port}`);
})

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected Successfully")
}).catch((err) => {
    console.log("Mongodb connection failed: ", err.message )
})