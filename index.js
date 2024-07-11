require("dotenv").config();
const server = require("./src/server.js"); 

const PORT = process.env.SERVER_PORT || 3001;
server.listen(PORT, async () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
});