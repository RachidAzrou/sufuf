// WebSocket event handlers
io.on('connection', socket => {
    console.log('A user connected');
    
    socket.on('message', data => {
        // Broadcast the message to all connected clients
        io.emit('message', data);
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
