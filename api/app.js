/**
 * App entry point
 * if you had multiple servers or other processes that required to start up you would start them here
*/

const server = require("./server");
const port = process.env.PORT || 3000

server.listen(port, () =>
  console.log(`\nTibi is running on port ${port}!\n`)
);