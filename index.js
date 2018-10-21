require("dotenv").config();
const { connect } = require("mqtt"),
  client = connect(process.env.CLOUDMQTT_URL),
  { channel } = require("./env");

client.subscribe(`${channel}`, (err, granted) => {
  if (err) return console.error(err);
  console.log(`subcribed to ${granted[0].topic}`);
});

client.on("error", err => {
  console.error(err);
});

client.on("message", (topic, message) => {
  console.log(`${topic} received ${message}`);
});
