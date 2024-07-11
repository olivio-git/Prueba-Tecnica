const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
  },
  telefono: {
    type: String,
  },
  password: {
    type: String,
  },
});

const AuthUser = mongoose.model("AuthUser", userSchema);

module.exports = AuthUser;
