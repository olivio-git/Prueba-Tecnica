const userDao = require ('../daos/UserDao');

class UserService {
  async createUser(userData) { 
    if (!userData) {
        throw new Error("User data is required", 400);
    }
    return await userDao.createUser(userData);
  } 
  async getByEmail(email) {
    return await userDao.getByEmail(email);
  }
  async loginUser(userData) {
    return await userDao.loginUser(userData);
  }
}

module.exports = new UserService();
