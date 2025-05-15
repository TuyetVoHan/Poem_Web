import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import poemsData from "../data/poemsData"; // *** IMPORT DỮ LIỆU THƠ ***

function HomePage() {
  // *** LẤY DỮ LIỆU THƠ NỔI BẬT TỪ poemsData ***
  // Ví dụ: Lấy 3 bài thơ đầu tiên làm thơ nổi bật
  // Bạn có thể có logic phức tạp hơn để chọn thơ nổi bật (ví dụ: dựa trên ngày mới nhất, hoặc một trường 'featured' trong poemsData)
  const featuredPoems = poemsData.slice(1, 4); // Lấy 3 bài đầu tiên

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
        {featuredPoems.length > 0 ? ( // Kiểm tra xem có thơ nổi bật không
          <>
            <ul>
              {featuredPoems.map((poem) => (
                <li key={poem.id}>
                  <Link to={`/poems/${poem.id}`}>{poem.title}</Link>
                  {/* Có thể thêm đoạn trích ngắn hoặc ngày đăng nếu muốn */}
                  {/* <p>{poem.excerpt}</p> */}
                  {/* <p><small>{poem.date}</small></p> */}
                </li>
              ))}
            </ul>
            <Link to="/poems" className="view-all-link">
              {" "}
              {/* Thêm class để dễ style */}
              View all poems...
            </Link>
          </>
        ) : (
          <p>No featured poems available at the moment.</p>
        )}
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
