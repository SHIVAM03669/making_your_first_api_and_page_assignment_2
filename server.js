const express = require('express');
const app = express();

// Dictionary to store HTTP status codes and their descriptions
const STATUS_CODES = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has succeeded and a new resource has been created as a result.",
    204: "No Content: The server successfully processed the request, but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The request requires user authentication.",
    403: "Forbidden: The server understands the request, but refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The request method is known by the server but has been disabled and cannot be used.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is not ready to handle the request. Common causes are a server that is down or overloaded.",
    504: "Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
};

// GET endpoint at "/status-info"
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code, 10); // Parse the "code" query parameter

    if (STATUS_CODES[code]) {
        // If the code exists, send the status code and message
        res.status(code).json({
            status: code,
            message: STATUS_CODES[code]
        });
    } else {
        // If the code is not recognized, return a 400 response
        res.status(400).json({
            status: 400,
            message: "Invalid status code. Please provide a valid HTTP status code."
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
