import React, { useState } from "react";
// *** BƯỚC 1: IMPORT ICON ***
import { FaGithub, FaFacebookF, FaTiktok, FaEnvelope } from "react-icons/fa";
import "../styles/ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // *** BƯỚC 2: ĐỊNH NGHĨA LINK CỦA BẠN ***
  // !!! THAY THẾ BẰNG LINK THỰC TẾ CỦA BẠN !!!
  const socialLinks = {
    github: "#",
    facebook: "https://www.facebook.com/profile.php?id=61573914602125",
    tiktok: "#",
    email: "#",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false); // Reset trạng thái
    setSubmitError(null);
    console.log("Sending data:", formData);
    // --- Logic gửi form ---
    setTimeout(() => {
      console.log("Form submitted successfully!");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    }, 1000);
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>
        If you have any questions, comments, or want to share anything, please
        feel free to contact me via the form below or social media channels.
      </p>

      {/* Cách 1: Hiển thị Email trực tiếp (có thể bỏ nếu đã có icon email) */}
      {/* <p>
        Bạn có thể gửi email cho tôi tại: <a href={socialLinks.email}>your-email@example.com</a>
      </p> */}

      {/* Cách 2: Sử dụng Form liên hệ */}
      <form onSubmit={handleSubmit} className="contact-form">
        {isSubmitted && (
          <p className="success-message">
            Thank you for contacting me! I will respond as soon as possible.
          </p>
        )}
        {submitError && <p className="error-message">{submitError}</p>}

        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Content:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send contact</button>
        {/* *** BƯỚC 3: THÊM KHU VỰC ICON LIÊN KẾT *** */}
        <div className="social-links">
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <FaFacebookF />
          </a>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
