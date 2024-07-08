
const mongoConnect = require("./src/mongo.js");
const server = require("./src/server.js");
const PORT = 3000;

mongoConnect.then((connection) => {
  server.listen(PORT, () => {
    console.log(`Database init: ${connection.connection.name}`);
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("MongoDB connection error: ", error);
});
