const AccountModel = require('../models/Account.models');
const bcrypt = require('bcrypt');

class AccountService{
    static async registerUser({TenTK,pass,email,role,trangthai})
    {
        try{
            // Kiểm tra username hoặc email đã tồn tại
            const existingUser = await AccountModel.findOne({
            $or: [{ TenTK }, { email }]
            });
            if (existingUser) {
            throw new Error('Tên tài khoản hoặc email đã được sử dụng');
            }

            const createAccount = new AccountModel({TenTK,pass,email,role,trangthai});
            return await createAccount.save();
        }catch(err){
            throw err;
        }
    }

    static async loginUser({ TenTK, pass }) {
    try {
      const user = await AccountModel.findOne({ TenTK });
      if (!user) {
        throw new Error('Tên tài khoản hoặc mật khẩu không đúng');
      }

      const isMatch = await bcrypt.compare(pass, user.pass);
      if (!isMatch) {
        throw new Error('Tên tài khoản hoặc mật khẩu không đúng');
      }

      // Nếu muốn có token JWT, tạo ở đây rồi return
      // return { user, token };

      return user;
    } catch (error) {
      throw error;
    }
  }



}

module.exports = AccountService;