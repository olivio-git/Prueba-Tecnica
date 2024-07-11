const response = require("../../config/utils/response.js");
const jwtService = require("../services/jwt.service.js");
const generateDbByUsername = require("../services/mongoose.service.js");
const userService = require("../services/user.service.js");


class UserController { 
  async createUser(req, res) {
    const userData = { ...req.body };
    try {
      const user = await userService.createUser(userData);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async createClient(req, res) {
    const email = req.body.email;
    try {
      const user = await userService.getByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const genereateDb = await generateDbByUsername(user.nombre);
      res
        .status(201)
        .json({
          message:
            genereateDb == false
              ? "La base de datos ah sido creada con exito"
              : "La base de datos ya existe",
        });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async loginUser(req, res) {
    const userData = { ...req.body };
    try {
      const user = await userService.loginUser(userData);
      if(!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const jwt = await jwtService.generateToken(user.nombre);
      res.status(200).json({ jwt }); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
