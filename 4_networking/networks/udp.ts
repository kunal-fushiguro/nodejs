import dgram from "dgram";

export async function udpServer() {
  try {
    const server = dgram.createSocket("udp4"); // IP V4

    server.on("message", (msg, rinfo) => {
      const response = {
        status: "success",
        from: {
          address: rinfo.address,
          port: rinfo.port,
        },
        server: {
          address: server.address(),
        },
        timestamp: new Date().toISOString(),
      };

      server.send(
        JSON.stringify(response),
        rinfo.port,
        rinfo.address,
        (err) => {
          if (err) console.error("Send error:", err.message);
        }
      );
    });

    server.on("listening", () => {
      const addr = server.address();
      console.log(`UDP server running on ${addr.address}:${addr.port}`);
    });

    server.on("error", (err) => {
      console.error("UDP server error:", err.message);
      server.close();
    });
    server.bind(8000);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return;
    }
  }
}
