import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About the Author</h1>

      <section className="author-intro">
        <img
          src="src\assets\images\avata.jpg"
          alt="Ảnh chân dung [Tên bạn]"
          className="author-photo"
        />
        <div className="userInfoContainer">
          <p></p>
          <div className="name">Tuyet Vo Han</div>
          <div className="description">
            <span className="descriptionText">Trainee Poet</span>{" "}
            <span className="separator">|</span>
            <span className="descriptionText">
              {" "}
              Write poetry with emotion
            </span>{" "}
          </div>
          <p>I am happy to share my poems and feelings here..</p>
        </div>
      </section>

      <section className="personal-info">
        <h2>🌸 Introduce myself</h2>
        <ul>
          <li>Year of birth: 2004</li>
          <li>Hometown: Hai Duong</li>
          <li>Phone number: 03352926604</li>
        </ul>
      </section>

      <section className="favorite-genres">
        <h2>🖋️ Favorite genre</h2>
        <ul>
          <li>5-word poem</li>
          <li>Seven-word quatrain</li>
          <li>Six-eight poems</li>
          <li>free verse</li>
        </ul>
      </section>

      <section className="hobbies-section">
        <h2>🎨 Hobbies</h2>
        <ul>
          <li>Reading books</li>
          <li>Flower planting</li>
          <li>Writing poetry</li>
          <li>Listening to music</li>
          <li>Moon watching</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
