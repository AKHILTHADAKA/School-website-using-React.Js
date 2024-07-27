import React from "react";
import "./Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <div className="home">
      <Header />
      <Introduction />
      <Carousel />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Springdale Public School</h1>
      <img
        src={`${process.env.PUBLIC_URL}/spslogo.png`}
        alt="Springdale Public School Logo"
        className="logo1"
      />
    </header>
  );
}

function Introduction() {
  return (
    <div className="introduction">
      <h1>Introduction</h1>
      <p>
        Welcome to Springdale Public School, where we are dedicated to shaping
        the future by nurturing the potential within every student. At
        Springdale, we believe that education is not just about academics; it's
        about fostering a love for learning, developing critical thinking
        skills, and encouraging personal growth. Our school is committed to
        providing a supportive and inclusive environment where students from
        diverse backgrounds come together to achieve their best. Our curriculum
        is designed to challenge students while catering to their individual
        needs, ensuring a well-rounded education that prepares them for success
        in both their academic and personal lives. Our dedicated faculty members
        are passionate about teaching and are always ready to go the extra mile
        to help students reach their full potential. Beyond academics,
        Springdale offers a range of extracurricular activities that allow
        students to explore their interests, build leadership skills, and form
        lasting friendships. We are proud of our vibrant community and the
        strong partnerships we maintain with parents and local organizations.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/maxresdefault.jpg`}
        alt="Science Exhibition"
        className="carousel-image1"
        id="hello"
      />
    </div>
  );
}

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-grid">
        <div className="carousel-item">
          <h1>Annual Sports Day</h1>
          <p>
            At Springdale Public School, our Annual Sports Day is a
            much-anticipated event that highlights the spirit of teamwork,
            determination, and athletic excellence. This vibrant day is
            dedicated to celebrating the achievements of our students and
            fostering a love for sports and physical fitness. The event kicks
            off with an inspiring opening ceremony where students, parents, and
            staff come together to cheer for the participants. Our diverse range
            of athletic activities, from track and field events to team sports,
            provides every student an opportunity to showcase their talents and
            compete in a supportive environment. The day's festivities are
            marked by spirited competitions, enthusiastic cheers, and a strong
            sense of camaraderie. In addition to individual events, team sports
            encourage collaboration and strategic thinking, reinforcing the
            values of teamwork and perseverance. Awards and medals are presented
            to outstanding athletes, acknowledging their hard work and
            dedication. Beyond the competitive aspects, Sports Day is a
            celebration of our school community’s collective effort and
            sportsmanship. It’s a day filled with fun, encouragement, and pride,
            leaving everyone motivated and inspired. Our Annual Sports Day
            embodies our commitment to holistic development and the joy of
            physical activity, making it a highlight of the school year.
          </p>
          <div className="carousel-images">
            <img
              src={`${process.env.PUBLIC_URL}/sports1.jpg`}
              alt="Annual Sports Day"
              className="carousel-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/sports2.jpg`}
              alt="Annual Sports Day"
              className="carousel-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/sports3.jpg`}
              alt="Annual Sports Day"
              className="carousel-image"
            />
          </div>
        </div>
        <div className="carousel-item">
          <h1>Science Exhibition</h1>
          <p>
            Our annual Science Exhibition at Springdale Public School is a
            spectacular event that celebrates the creativity and ingenuity of
            our students. This showcase provides a platform for young scientists
            to present their innovative projects and experiments, reflecting
            their passion for science and technology. The exhibition features a
            wide array of student projects, ranging from cutting-edge research
            to practical inventions that solve real-world problems. Each year,
            students prepare meticulously for this event, working under the
            guidance of our dedicated science faculty. The exhibition includes
            interactive displays, live demonstrations, and detailed
            presentations that highlight the students’ discoveries and
            understanding of scientific concepts. Visitors, including parents,
            peers, and local community members, have the opportunity to engage
            with the exhibits, ask questions, and gain insights into the latest
            scientific advancements. This event not only fosters a love for
            science but also encourages critical thinking, problem-solving, and
            public speaking skills among students. By showcasing their work,
            students gain confidence and experience in presenting their ideas.
            The Science Exhibition stands as a testament to the innovative
            spirit of our students and the commitment of our school to nurturing
            future scientists and innovators.
          </p>
          <div className="carousel-images">
            <img
              src={`${process.env.PUBLIC_URL}/Science1.jpeg`}
              alt="Science Exhibition"
              className="carousel-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Science2.jpeg`}
              alt="Science Exhibition"
              className="carousel-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Science3.jpeg`}
              alt="Science Exhibition"
              className="carousel-image"
            />
          </div>
        </div>
        <div className="carousel-item">
          <h1>Cultural Fest</h1>
          <p>
            At Springdale Public School, our Cultural Fest is a vibrant
            celebration of diversity and creativity that brings together
            students, families, and staff to honor various cultural traditions
            and artistic expressions. This annual event showcases the rich
            tapestry of cultures represented within our school community through
            performances, exhibitions, and interactive activities. The Cultural
            Fest features a dynamic lineup of activities including traditional
            dances, musical performances, art displays, and food stalls
            representing different cultural backgrounds. Students prepare for
            months to present their talents and share their cultural heritage,
            creating an immersive experience for all attendees. The fest also
            includes workshops and storytelling sessions that provide deeper
            insights into different cultures and traditions. This event promotes
            cultural awareness, respect, and unity among students and their
            families. By participating in and celebrating a wide range of
            cultural expressions, students develop a broader understanding of
            the world and enhance their appreciation for diversity. The Cultural
            Fest is not just a showcase of creativity but also a reminder of the
            importance of inclusivity and community spirit in our school.
          </p>
          <div className="carousel-images">
            <img
              src={`${process.env.PUBLIC_URL}/Cultural1.jpeg`}
              alt="Cultural Fest"
              className="carousel-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Cultural2.jpeg`}
              alt="Cultural Fest"
              className="carousel-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Cultural3.jpeg`}
              alt="Cultural Fest"
              className="carousel-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
