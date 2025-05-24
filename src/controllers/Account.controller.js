const AccountService = require("../services/Account.services");

exports.register = async(req,res,next)=>{
    try{
        const {TenTK,pass,email} = req.body;

        const successRes = await AccountService.registerUser({TenTK,pass,email,role:'user', trangthai: true});

        res.json({status:true,success:"Dang ky tai khoan thanh cong!"});
    }
    catch(error)
    {
        if (error.message.includes('đã được sử dụng')) {
            return res.status(400).json({ status: false, error: error.message });
        }
        next(error);
    }
};

exports.login = async (req, res, next) => {
  try {
    const { TenTK, pass } = req.body;

    const { user, token } = await AccountService.loginUser({ TenTK, pass });

    res.json({
      status: true,
      message: 'Đăng nhập thành công',
      token, // 🔑 Gửi token về
      user: {
        id: user._id,
        TenTK: user.TenTK,
        email: user.email,
        role: user.role,
        trangthai: user.trangthai
      }
    });
  } catch (error) {
    res.status(401).json({ status: false, message: error.message });
  }
};
