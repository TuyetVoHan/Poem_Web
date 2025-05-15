import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PoemDetailPage.css";
import poemsData from "../data/poemsData"; // *** IMPORT DỮ LIỆU THƠ ***

function PoemDetailPage() {
  const { poemId } = useParams();
  const [poem, setPoem] = useState(null);
  const [loading, setLoading] = useState(true); // Giữ lại loading để mô phỏng hoặc xử lý bất đồng bộ nếu có
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setLoading(true); // Bắt đầu loading

    // *** TÌM BÀI THƠ TRONG poemsData THAY VÌ FETCH GIẢ LẬP ***
    const foundPoem = poemsData.find((p) => p.id === poemId);

    // Giả lập một chút độ trễ để giống với việc tải dữ liệu
    const timer = setTimeout(() => {
      if (foundPoem) {
        setPoem(foundPoem);
        setError(null);
      } else {
        setError("This poem was not found.");
        setPoem(null);
      }
      setLoading(false);
    }, 300); // Độ trễ 300ms, bạn có thể bỏ đi nếu muốn

    return () => clearTimeout(timer); // Cleanup timer khi component unmount hoặc poemId thay đổi
  }, [poemId]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === "") {
      alert("Please enter your comment.");
      return;
    }
    console.log(
      `Góp ý cho bài thơ "${poem?.title}" (ID: ${poemId}):`,
      feedback
    );
    alert("Cảm ơn bạn đã góp ý!");
    setFeedback("");
  };

  if (loading) return <p>Loading poem...</p>;
  if (error) return <p>Error: {error}</p>; // Sửa lỗi chính tả "Eror" -> "Error"
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
          {/* Sử dụng poem.content từ poemsData */}
          <pre className="poem-text">{poem.content}</pre>
        </article>

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
