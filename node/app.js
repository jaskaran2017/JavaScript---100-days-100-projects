// this is a node server which will handle socket.io connections

const io = require('socket.io')(8000, {
  cors: {
    origin: '*',
  }
});
const user = {};

io.on("connection", (socket) => {
  socket.on("new user-joined", (fname) => {
    user[socket.id] = fname;
    socket.broadcast.emit("user-joined", fname);s
  });
  socket.on("send", (message) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: user[socket.id],
    });
  });
});


// httpServer.listen(8000);