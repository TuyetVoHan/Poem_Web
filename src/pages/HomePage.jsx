import React from "react";
import { Link } from "react-router-dom"; // Giả sử dùng react-router-dom
import "../styles/HomePage.css";

function HomePage() {
  // Lấy dữ liệu thơ mới nhất/nổi bật (ví dụ)
  const featuredPoems = [
    { id: "bai-tho-1", title: "Ái" },
    { id: "bai-tho-2", title: "Chấp niệm" },
    { id: "bai-tho-3", title: "Dạo biển" },
  ];

  return (
    <div className="homepage-container">
      {/* Phần Hero/Banner Chào mừng */}
      <section className="hero-section">
        <div className="greetingContainer">
          <span className="greetingText">Hello, I am </span>
          <span className="greetingName">Cuong</span>
        </div>
        <div className="greetingPenname">
          <span className="penname">Pen name: </span>
          <span className="pename">Tuyet Vo Han</span>
        </div>
        <p>A place to share poems, feelings and thoughts about everything.</p>
        <Link to="/poems" className="cta-button">
          Explore Poetry
        </Link>
      </section>

      {/* Phần Thơ Nổi bật / Mới nhất */}
      <section className="featured-poems">
        <h2>Latest Poetry</h2>
        <ul>
          {featuredPoems.map((poem) => (
            <li key={poem.id}>
              <Link to={`/poems/${poem.id}`}>{poem.title}</Link>
              {/* Có thể thêm đoạn trích ngắn hoặc ngày đăng */}
            </li>
          ))}
        </ul>
        <Link to="/poems">View all poems...</Link>
      </section>

      {/* Có thể thêm lời giới thiệu ngắn về tác giả */}
      <section className="quick-about">
        <h2>About the author</h2>
        <p>
          I am quite quiet so I will observe a lot. I really like poetry so I
          often write poems according to my mood....
        </p>
        <Link to="/about">Find out more</Link>
      </section>
    </div>
  );
}

export default HomePage;
