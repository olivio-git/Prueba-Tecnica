const jwt = require("jsonwebtoken");

class JwtService {
  constructor() {
    this.secret = process.env.JWT_SECRET;
  }
  async generateToken(nombre) {
    return jwt.sign({nombre}, this.secret, { expiresIn: "1h" });
  }
  async verifyToken(token) {
    try {
      return await jwt.verify(token, this.secret); 
    } catch (error) {
      return null;
    }
  }
}

module.exports = new JwtService;
