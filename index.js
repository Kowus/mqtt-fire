const { connect } = require("mqtt"),
    client = connect("mqtt://miidvfuj:emujcuPw9MFs@m11.cloudmqtt.com:12063"),
    { channel, path } = require("./env");

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
