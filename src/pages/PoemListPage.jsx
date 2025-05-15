import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PoemListPage.css";

function PoemListPage() {
  // Ví dụ dữ liệu thơ (nên lấy từ state, context hoặc API)
  const [poems, setPoems] = useState([
    {
      id: "bai-tho-1",
      title: "Ái",
      date: "2025-04-05",
      excerpt: "Cuộc sống vốn chẳng dài...",
    },
    {
      id: "bai-tho-2",
      title: "Chấp niệm",
      date: "2025-04-03",
      excerpt: "Có những chuyện bình thường...",
    },
    {
      id: "bai-tho-3",
      title: "Dạo biển",
      date: "2025-03-23",
      excerpt: "Gió kéo ta đi trên biển dạo...",
    },
    {
      id: "bai-tho-4",
      title: "Mưa",
      date: "2025-04-28",
      excerpt: "Trời kia xám xịt cơn mưa rào...",
    },
    {
      id: "bai-tho-5",
      title: "Tính",
      date: "2025-044-18",
      excerpt: "Mình đâu buồn linh tinhtinh...",
    },
    {
      id: "bai-tho-5",
      title: "Mẹ",
      date: "2025-03-23",
      excerpt: "Hôm nay con lại nhớ...",
    },
    // ... thêm các bài thơ khác
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState(""); // Ví dụ bộ lọc

  // Logic lọc và tìm kiếm (ví dụ đơn giản)
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
