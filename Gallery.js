import React from "react";
import "./Gallery.css"; // Import the CSS file

function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <section className="photos">
        <h2>Photos</h2>
        <div className="photo-grid">
          <div className="photo-item">
            <img src="sports-day2.jpeg" alt="Sports Day" />
            <p>Students participating in various sports events.</p>
          </div>
          <div className="photo-item">
            <img src="scienceexhibition.jpeg" alt="Science Exhibition" />
            <p>Students presenting their science projects.</p>
          </div>
          <div className="photo-item">
            <img src="CulturalFest4.jpeg" alt="Cultural Fest" />
            <p>Students performing in the cultural fest.</p>
          </div>
          <div className="photo-item">
            <img src="classroom.jpg" alt="Classroom" />
            <p>A glimpse of our interactive classrooms.</p>
          </div>
          <div className="photo-item">
            <img src="library.jpg" alt="Library" />
            <p>Students reading and studying in the school library.</p>
          </div>
        </div>
      </section>
      <section className="videos">
        <h2>Videos</h2>
        <div className="video-grid">
          <div className="video-item">
            <video controls autoPlay loop>
              <source src="Classroom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Virtual tour of Springdale Public School.</p>
          </div>
          <div className="video-item">
            <video controls autoPlay loop>
              <source src="party.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Highlights from the Annual Function 2023.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
