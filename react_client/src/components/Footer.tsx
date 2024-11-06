import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "2rem 0",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    color: "#ffb600",
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: 0,
  };

  const sectionTitleStyle = {
    fontWeight: "bold",
    marginBottom: "1rem",
    textTransform: "uppercase",
  };

  const bottomFooterStyle = {
    backgroundColor: "#f8f9fa",
    color: "#333",
    padding: "1rem 0",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 style={sectionTitleStyle}>Về chúng tôi</h5>
            <p>
              4Men Shop là thương hiệu thời trang nam chuyên cung cấp các sản
              phẩm thời trang chất lượng, mang đến phong cách trẻ trung, hiện
              đại cho phái mạnh.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 style={sectionTitleStyle}>Liên kết nhanh</h5>
            <ul style={listStyle}>
              <li>
                <Link to="/" style={linkStyle}>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/about" style={linkStyle}>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/contact" style={linkStyle}>
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/faq" style={linkStyle}>
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 style={sectionTitleStyle}>Chính sách</h5>
            <ul style={listStyle}>
              <li>
                <Link to="/return-policy" style={linkStyle}>
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link to="/warranty-policy" style={linkStyle}>
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" style={linkStyle}>
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link to="/terms" style={linkStyle}>
                  Điều khoản dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 style={sectionTitleStyle}>Liên hệ</h5>
            <ul style={listStyle}>
              <li>
                <strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM
              </li>
              <li>
                <strong>Email:</strong> support@4menshop.com
              </li>
              <li>
                <strong>Hotline:</strong> 0909 123 456
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={bottomFooterStyle}>© 2024 Bản quyền thuộc về 4Men Shop</div>
    </footer>
  );
}
