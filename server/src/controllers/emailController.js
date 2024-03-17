const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vanthietfrontend@gmail.com",
    pass: "ebip vqha alaq meom",
  },
});

const mailOptions = {
  from: "your_email@gmail.com",
  to: newUser.email,
  subject: "Xác nhận địa chỉ email",
  html: `
    <p>Xin chào ${newUser.email},</p>
    <p>Bạn vừa đăng ký thành công tài khoản. Vui lòng nhấp vào đường link sau để xác nhận địa chỉ email của bạn:</p>
    <a href="https://yourwebsite.com/confirm-email/${newUser._id}">Xác nhận email</a>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi trong quá trình gửi email xác nhận" });
  } else {
    console.log("Email sent:", info.response);
    res.status(200).json(user);
  }
});
