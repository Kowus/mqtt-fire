const { connect } = require("mqtt"),
    // client = connect("ws://localhost:1884"),
    client = connect("mqtt://miidvfuj:emujcuPw9MFs@m11.cloudmqtt.com:12063", {
        clientId: "pabene"
    }),
    { channel, path } = require("./env");
let state = true;

console.log("winter is coming");
let interval = setInterval(() => {
    client.publish(
        `${channel}`, // `{"mode": "auto", "state":${state ? '"on"' : '"off"'}}`
        `{ "temperature": ${round_number(
            Math.random() * 50
        )}, "humidity": ${round_number(Math.random() * 100)} }`
    );
    state = !state;
}, 10000);

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const round_number = (value, places) => {
    if (places) {
        var pow = Math.pow(10, places);
        return Math.round(value * pow) / pow;
    } else {
        return Math.round(value * 100) / 100;
    }
};
client.on("connect", () => {
    console.error("client connected");
});

client.on("error", err => {
    console.error(err);
});
