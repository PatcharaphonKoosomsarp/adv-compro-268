function createLogEntry(message, level) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');

    const event = Math.random().toString(16).substring(2, 10).toUpperCase();
    const logMessage = `[${timestamp}] [${level || 'INFO'}] [Event: ${event}] ${message}`;
    return logMessage;

}

const log = createLogEntry("User login successful");
console.log(log);