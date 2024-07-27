import React from "react";
import "./Students.css"; // Import the CSS file

function Students() {
  return (
    <div className="students">
      <h1>Students</h1>
      <section className="life-at-springdale">
        <h2>Life at Springdale</h2>
        <div className="extracurricular-activities">
          <h3>Extracurricular Activities</h3>
          <p>
            At Springdale Public School, we believe in nurturing well-rounded
            individuals through a diverse range of extracurricular activities.
            Students can participate in Music, Dance, Drama, Art, Sports,
            Robotics, Debate Club, and Science Club. These activities provide
            valuable opportunities for students to explore their interests,
            develop new skills, and build lasting friendships. Whether a student
            has a passion for performing arts, sports, or technological
            innovations, our extensive program ensures there is something for
            everyone. Our goal is to support each student's growth beyond the
            classroom and encourage a balanced and enriching educational
            experience.
          </p>
        </div>
        <div className="clubs-and-societies">
          <h3>Clubs and Societies</h3>
          <p>
            Springdale Public School hosts a variety of clubs and societies that
            cater to diverse interests and foster a sense of community. The
            Literary Society encourages students to explore literature and
            writing, while the Environmental Club focuses on sustainability and
            environmental awareness. The Astronomy Club offers opportunities to
            delve into space science, and the Coding Club provides a platform
            for students to develop their programming skills. These clubs and
            societies play a crucial role in enhancing students' educational
            journey by promoting teamwork, leadership, and personal growth
            outside the academic curriculum.
          </p>
        </div>
      </section>
      <section className="achievements">
        <h2>Achievements</h2>
        <div className="achievement">
          <h3>John Smith</h3>
          <p>
            <strong>Achievement:</strong> National Level Math Olympiad Winner
          </p>
          <p>
            John Smith's exceptional skills in mathematics have earned him the
            prestigious title of National Level Math Olympiad Winner. His
            dedication and hard work in mastering complex mathematical concepts
            have set him apart as a top achiever. John’s success in the
            competition reflects his strong analytical abilities and
            problem-solving skills, which serve as an inspiration to his peers
            and a testament to the high standards of academic excellence at
            Springdale Public School.
          </p>
        </div>
        <div className="achievement">
          <h3>Sarah Lee</h3>
          <p>
            <strong>Achievement:</strong> Gold Medalist in State Swimming
            Championship
          </p>
          <p>
            Sarah Lee has demonstrated outstanding athletic prowess by winning a
            Gold Medal at the State Swimming Championship. Her dedication to
            training and her performance in the pool showcase her commitment to
            excellence and sportsmanship. Sarah’s achievement highlights the
            school’s support for athletic development and its focus on fostering
            a competitive yet supportive environment for student athletes.
          </p>
        </div>
        <div className="achievement">
          <h3>Tech Innovators Club</h3>
          <p>
            <strong>Achievement:</strong> Winners of Inter-School Robotics
            Competition
          </p>
          <p>
            The Tech Innovators Club has achieved remarkable success by winning
            the Inter-School Robotics Competition. This accomplishment
            demonstrates the club’s proficiency in engineering, programming, and
            teamwork. The competition provided students with a platform to
            showcase their innovative designs and problem-solving skills. The
            victory is a testament to the club’s hard work and the school’s
            commitment to fostering a culture of technological innovation and
            collaboration among students.
          </p>
        </div>
      </section>
      <section className="student-council">
        <h2>Student Council</h2>
        <div className="council-member">
          <h3>President: Amy Parker</h3>
          <p>
            <strong>Grade:</strong> 12
          </p>
          <p>
            Amy Parker, the President of the Student Council, is a Grade 12
            student who exemplifies leadership and dedication. Her role involves
            overseeing council activities, representing the student body, and
            working closely with school administration to address student
            concerns and promote school spirit. Amy’s leadership skills and
            commitment to making a positive impact on the school community are
            evident in her proactive approach and enthusiastic involvement in
            various school initiatives.
          </p>
        </div>
        <div className="council-member">
          <h3>Vice President: Rajiv Mehta</h3>
          <p>
            <strong>Grade:</strong> 11
          </p>
          <p>
            Rajiv Mehta, the Vice President of the Student Council, is a Grade
            11 student known for his strong organizational skills and
            collaborative spirit. His responsibilities include assisting the
            President in council duties, coordinating events, and representing
            the student body in various forums. Rajiv’s role is crucial in
            ensuring smooth functioning of the council and fostering a sense of
            unity and engagement among students.
          </p>
        </div>
        <div className="council-member">
          <h3>Secretary: Lisa Wong</h3>
          <p>
            <strong>Grade:</strong> 10
          </p>
          <p>
            Lisa Wong serves as the Secretary of the Student Council and is a
            Grade 10 student with a keen eye for detail and excellent
            communication skills. Her responsibilities include managing council
            records, organizing meetings, and facilitating communication between
            the student body and the council. Lisa’s efficient handling of
            administrative tasks and her commitment to supporting the council’s
            activities are integral to the council’s success and effectiveness.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Students;
