const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://mongo:27017/rooms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Room = mongoose.model(
  "Room",
  new mongoose.Schema({
    number: String,
    type: String,
    price: Number,
    available: Boolean,
  })
);

app.post("/rooms", async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.status(201).send(room);
});

app.get("/rooms", async (req, res) => {
  const rooms = await Room.find();
  res.send(rooms);
});

app.listen(3001, () => {
  console.log("Rooms service listening on port 3001");
});
