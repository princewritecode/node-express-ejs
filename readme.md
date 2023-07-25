1. What is Node.js?
   Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server-side. It uses the V8 JavaScript engine from Google Chrome to execute code outside of the browser. Node.js provides a rich set of libraries and modules, making it ideal for building scalable and real-time applications.

2. Introduction to HTTP
   HTTP (Hypertext Transfer Protocol) is an application layer protocol used to transmit data between a client (typically a web browser) and a server (where web resources are hosted). It follows a client-server model where the client sends a request to the server, and the server responds with the requested data.

3. Setting Up Node.js
   To work with Node.js, you'll need to install it on your system. Visit the official Node.js website (https://nodejs.org) to download the latest stable version and follow the installation instructions for your operating system.

After installation, you can open a terminal or command prompt and verify Node.js is properly installed by running the following commands:

bash
Copy code
node -v
npm -v
This will display the installed version of Node.js and npm (Node Package Manager).

4. Creating a Simple HTTP Server
   To demonstrate how Node.js and HTTP work together, let's create a simple HTTP server. First, create a new folder for your project and navigate to it in the terminal:

bash
Copy code
mkdir my-http-server
cd my-http-server
Now, create a new file called server.js and open it in a text editor.

javascript
Copy code
// server.js
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, World!');
});

server.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
}); 5. Handling HTTP Requests
In the example above, the server responds with "Hello, World!" for all incoming requests. But in real-world applications, we often need to handle different types of requests and respond accordingly.

The req parameter in the createServer callback represents the incoming HTTP request. We can inspect the request method, URL, headers, and process the request accordingly. Similarly, the res parameter represents the response we send back to the client.
