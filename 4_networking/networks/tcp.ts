import net from "net";

export async function tcpServer() {
  try {
    const server = net.createServer();

    server.on("connection", (socket) => {
      console.log("Client connected:", socket.remoteAddress, socket.remotePort);

      socket.on("data", (data) => {
        console.log("Received from client:", data.toString());

        const info = {
          remoteAddress: socket.remoteAddress,
          remotePort: socket.remotePort,
          localAddress: socket.localAddress,
          localPort: socket.localPort,
        };

        const response = {
          status: "success",
          info,
        };

        socket.write(JSON.stringify(response) + "\n");
      });

      socket.on("end", () => {
        console.log("Client disconnected");
      });

      socket.on("error", (err) => {
        console.error("Socket error:", err.message);
      });
    });

    server.listen(8000, () => {
      console.log("TCP server running on port 8000");
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return;
    }
  }
}
// telnet localhost 8000
// after that type hello
