import React from "react";
import "./Academics.css"; // Import the CSS file

function Academics() {
  return (
    <div className="academics">
      <h1>Academics</h1>
      <section className="curriculum">
        <h2>Curriculum</h2>
        <div className="primary">
          <h3>Primary (Grades 1-5)</h3>
          <p>
            The Primary curriculum is designed to provide a strong foundation in
            essential subjects, including English, Mathematics, Science, Social
            Studies, Art, and Physical Education. Students engage in interactive
            and hands-on activities to build basic skills in reading, writing,
            and arithmetic, as well as to develop a broad understanding of the
            world around them. Emphasis is placed on fostering curiosity,
            creativity, and a love for learning.
          </p>
        </div>
        <div className="secondary">
          <h3>Secondary (Grades 6-10)</h3>
          <p>
            The Secondary curriculum builds on the foundation laid in the
            Primary years, with a more focused approach. Students study core
            subjects including English, Mathematics, Science (Physics,
            Chemistry, Biology), Social Studies, Computer Science, Physical
            Education, and Art. The curriculum is designed to deepen students'
            knowledge and understanding, preparing them for more advanced
            studies and critical thinking. Students also have opportunities to
            explore various interests and develop their skills in preparation
            for their future academic and career paths.
          </p>
        </div>
        <div className="senior-secondary">
          <h3>Senior Secondary (Grades 11-12)</h3>
          <div className="science-stream">
            <h4>Science Stream</h4>
            <p>
              In the Science Stream, students can choose subjects such as
              Physics, Chemistry, Biology, Mathematics, Computer Science, and
              English. This curriculum is tailored for those interested in
              pursuing careers in science, technology, engineering, or medicine.
              It provides in-depth knowledge and practical skills necessary for
              advanced studies and professional fields.
            </p>
          </div>
          <div className="commerce-stream">
            <h4>Commerce Stream</h4>
            <p>
              The Commerce Stream offers subjects including Accountancy,
              Business Studies, Economics, Mathematics, and English. This stream
              is designed for students aiming to enter fields such as business,
              finance, or economics. The curriculum focuses on understanding
              economic principles, business practices, and financial management,
              equipping students with the skills needed for success in the
              commercial sector.
            </p>
          </div>
        </div>
      </section>
      <section className="teaching-methodologies">
        <h2>Teaching Methodologies</h2>
        <p>
          We utilize a blend of traditional and modern teaching techniques to
          cater to diverse learning styles. Our approach includes interactive
          lessons, practical demonstrations, and collaborative projects that
          engage students actively in their learning process. By integrating
          technology and innovative pedagogical methods, we aim to enhance
          student comprehension and retention of knowledge. This methodology
          supports different learning preferences, ensuring that each student
          can achieve their full potential.
        </p>
      </section>
      <section className="educational-resources">
        <h2>Educational Resources</h2>
        <p>
          Our educational resources are designed to enrich the learning
          experience. We provide digital classrooms equipped with the latest
          technology, interactive learning modules, and access to a variety of
          online educational platforms. These resources offer students a
          comprehensive and modern approach to learning, allowing them to
          explore topics in greater depth and at their own pace. Our commitment
          to leveraging technology ensures that students have the tools they
          need to succeed academically and stay engaged in their education.
        </p>
      </section>
    </div>
  );
}

export default Academics;
