const AuthUser = require("../models/userModel");

class UserDao {
  async createUser(userData) { 
    const user = new AuthUser(userData);
    return await user.save();
  } 
  async getByEmail(email) {
    return await AuthUser.findOne({email:email});
  }
  async loginUser(userData) {
    return await AuthUser.findOne({email:userData.email, password:userData.password});
  }
}

module.exports = new UserDao();
