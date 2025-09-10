import dgram from "dgram";
async function udpClient() {
  const client = dgram.createSocket("udp4");

  const message = Buffer.from("Hello from client");
  client.send(message, 8000, "localhost", (err) => {
    if (err) console.error("Send error:", err.message);
    else console.log("Message sent to server");
  });

  client.on("message", (msg, rinfo) => {
    console.log("Response from server:", msg.toString());
    client.close();
  });

  client.on("error", (err) => {
    console.error("Client error:", err.message);
    client.close();
  });
}

udpClient();
