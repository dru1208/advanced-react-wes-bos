// let's go!

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer.js');
const db = require('./DB.js');

const server = createServer();

// TODO
// express middleware to handle cookies (JWT)
// express middleware to populate current users


server.start({
  cors: {
    credentials: true,
    origins: process.env.FRONTEND_URL
  },
}, details => {
  console.log(`Server is now running on PORT http://localhost:${details.port}`)
})
