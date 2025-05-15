import React, { useState, useEffect } from "react"; // Thêm useState
import { useParams, Link } from "react-router-dom";
import "../styles/PoemDetailPage.css";

function PoemDetailPage() {
  const { poemId } = useParams();
  const [poem, setPoem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // *** BƯỚC 1: Thêm state cho ô góp ý ***
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const fetchPoemData = (id) => {
      // ... (Phần fetch dữ liệu giữ nguyên) ...
      console.log("Fetching data for poem:", id);
      const allPoems = {
        "bai-tho-1": {
          title: "Ái",
          date: "2025-04-05",
          content:
            "Cuộc sống vốn chẳng dài\nBỏ những lời ngoài tai\nCuộc đời thêm chút ái\nSống ung dung tự tại.",
        },
        "bai-tho-2": {
          title: "Chấp niệm",
          date: "2025-04-03",
          content:
            "Có những chuyện bình thường\nVốn chẳng cần bận tâm\nMà sao lòng cứ mãi\nNỗi vấn vương âm thầm.",
        },
        "bai-tho-3": {
          title: "Dạo biển",
          date: "2025-03-23",
          content:
            "Gió kéo ta đi trên biển dạo\nTrăng khuyết mỉm cười đẹp biết bao\nSóng tấu du dương bản nhạc nào\nNhẹ nhàng theo gió lướt thanh tao.",
        },
      };
      setTimeout(() => {
        const foundPoem = allPoems[id];
        if (foundPoem) {
          setPoem(foundPoem);
          setError(null);
        } else {
          setError("This poem was not found.");
          setPoem(null);
        }
        setLoading(false);
      }, 500);
    };

    setLoading(true);
    fetchPoemData(poemId);
  }, [poemId]);

  // *** BƯỚC 2: Hàm xử lý khi gửi góp ý ***
  const handleFeedbackSubmit = (e) => {
    e.preventDefault(); // Ngăn form submit theo cách truyền thống (nếu dùng thẻ form)
    if (feedback.trim() === "") {
      alert("Please enter your comment.");
      return;
    }
    // Xử lý gửi góp ý (hiện tại chỉ log ra console)
    console.log(
      `Góp ý cho bài thơ "${poem?.title}" (ID: ${poemId}):`,
      feedback
    );
    // Thông báo giả lập gửi thành công
    alert("Cảm ơn bạn đã góp ý!");
    setFeedback(""); // Xóa nội dung trong ô nhập liệu
  };

  if (loading) return <p>Loading poem...</p>;
  if (error) return <p>Eror: {error}</p>;
  if (!poem) return <p>Poem not found.</p>;

  return (
    <div className="poem-detail-container">
      <Link to="/poems" className="back-link">
        &larr; Back to list
      </Link>
      <div className="poem-content-wrapper">
        <article className="poem-content">
          <h1>{poem.title}</h1>
          <p className="poem-meta">
            Author: Tuyet Vo Han | Posted date: {poem.date}
          </p>
          <pre className="poem-text">{poem.content}</pre>
        </article>

        {/* *** BƯỚC 3: Thêm khu vực nhập góp ý *** */}
        <section className="feedback-section">
          <h3>Comments on the poem</h3>
          <textarea
            rows="4"
            placeholder="Please leave your message..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            aria-label="Enter your comment"
          ></textarea>
          <button onClick={handleFeedbackSubmit}>Send comments</button>
        </section>
      </div>
    </div>
  );
}

export default PoemDetailPage;
