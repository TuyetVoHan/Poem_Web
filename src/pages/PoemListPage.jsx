import React, { useState } from "react"; // Bỏ useEffect vì không cần fetch nữa
import { Link } from "react-router-dom";
import "../styles/PoemListPage.css";
import poemsData from "../data/poemsData"; // *** IMPORT DỮ LIỆU THƠ ***

function PoemListPage() {
  // *** SỬ DỤNG TRỰC TIẾP poemsData THAY VÌ useState CHO DỮ LIỆU GỐC ***
  // const [poems, setPoems] = useState(poemsData); // Không cần setPoems nữa nếu không có nhu cầu thay đổi poemsData gốc
  const poems = poemsData; // Sử dụng trực tiếp

  const [searchTerm, setSearchTerm] = useState("");
  // const [filterCategory, setFilterCategory] = useState(""); // Giữ lại nếu bạn muốn phát triển bộ lọc

  // Logic lọc và tìm kiếm (giữ nguyên)
  const filteredPoems = poems.filter(
    (poem) => poem.title.toLowerCase().includes(searchTerm.toLowerCase())
    // Thêm logic lọc theo category nếu có
  );

  return (
    <div className="poem-list-container">
      <h1>My poems</h1>

      {/* Phần tìm kiếm và bộ lọc (tùy chọn) */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Thêm select box cho bộ lọc category nếu cần */}
      </div>

      {/* Danh sách các bài thơ */}
      <ul className="poem-list">
        {filteredPoems.length > 0 ? (
          filteredPoems.map((poem) => (
            <li key={poem.id} className="poem-list-item">
              <h2>
                <Link to={`/poems/${poem.id}`}>{poem.title}</Link>
              </h2>
              <p className="poem-date">Posted date: {poem.date}</p>
              {/* Sử dụng excerpt từ poemsData */}
              <p className="poem-excerpt">{poem.excerpt}</p>
              <Link to={`/poems/${poem.id}`} className="read-more-link">
                Read more...
              </Link>
            </li>
          ))
        ) : (
          <p>No matching poems found.</p>
        )}
      </ul>
    </div>
  );
}

export default PoemListPage;
