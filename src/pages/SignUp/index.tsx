import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/globals/header";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  // Khai báo các state cho form
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Thêm confirm password

  // Hàm xử lý khi nhấn nút "SIGN UP"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra các trường nhập đầy đủ
    if (!user || !email || !password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // Nếu mọi thứ hợp lệ
    alert("Đăng ký thành công!");

    // Sau 2 giây chuyển sang trang login
    setTimeout(() => {
      navigate("/Login");
    }, 2000);
  };

  return (
    <div>
      <Header />

      <div className="signup-wrapper">
        <div className="signup-box">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="user">User</label>
            <input
              type="text"
              id="user"
              placeholder="User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <label htmlFor="email">Email/Phone Number</label>
            <input
              type="text"
              id="email"
              placeholder="Ex: 03923434567 or NguyenVanA@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <img className="line" alt="Line" src="src/img/line-39.svg" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Thêm ô Confirm Password */}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit" className="sign-up-btn">
              SIGN UP
            </button>
          </form>

          <div className="divider">OR</div>

          <div className="social-buttons">
            <button className="google-btn">
              <img className="img" src="src/img/ic_google.png" alt="Google" />
              Google
            </button>

            <button className="facebook-btn">
              <img className="img" src="src/img/ic_face.png" alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
