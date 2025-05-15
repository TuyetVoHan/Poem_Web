import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import các component trang đã tạo (đảm bảo đường dẫn đúng)
import HomePage from "./pages/HomePage";
import PoemListPage from "./pages/PoemListPage";
import PoemDetailPage from "./pages/PoemDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Import file CSS chính (nếu có)
import "./App.css"; // Hoặc tên file CSS của bạn

// *** COMPONENT HEADER ĐÃ CẬP NHẬT ***
function Header() {
  return (
    <header className="app-header">
      {/* Thêm div container để sử dụng Flexbox */}
      <div className="header-content">
        {/* Phần tử bên trái: Tên/Logo trang web */}
        <Link to="/" className="site-title">
          Tuyet Vo Han {/* Thay bằng tên trang web của bạn */}
        </Link>

        {/* Phần tử bên phải: Menu điều hướng */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/poems">Poems</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Thêm các link khác nếu cần */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Component Footer đơn giản
function Footer() {
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Tuyet Vo Han. Personal poetry website.</p>
      {/* Thêm thông tin khác nếu cần */}
    </footer>
  );
}

// Component App chính thiết lập routing
function App() {
  return (
    // BrowserRouter bao bọc toàn bộ ứng dụng để kích hoạt routing
    <BrowserRouter>
      <div className="App">
        {" "}
        {/* Container chính cho styling */}
        <Header /> {/* Hiển thị Header trên tất cả các trang */}
        {/* Phần nội dung chính của trang sẽ thay đổi dựa trên route */}
        <main className="main-content">
          {/* Routes định nghĩa các đường dẫn và component tương ứng */}
          <Routes>
            {/* Route cho trang chủ */}
            <Route path="/" element={<HomePage />} />

            {/* Route cho trang danh sách thơ */}
            <Route path="/poems" element={<PoemListPage />} />

            {/* Route cho trang chi tiết bài thơ */}
            <Route path="/poems/:poemId" element={<PoemDetailPage />} />

            {/* Route cho trang giới thiệu */}
            <Route path="/about" element={<AboutPage />} />

            {/* Route cho trang liên hệ */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Route bắt lỗi 404 (khi không khớp với các route trên) */}
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Not Found</h2>
                  <p>Rất tiếc, trang bạn tìm kiếm không tồn tại.</p>
                  <Link to="/">Quay lại Trang chủ</Link>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer /> {/* Hiển thị Footer trên tất cả các trang */}
      </div>
    </BrowserRouter>
  );
}

export default App;
