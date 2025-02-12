import "./App.css";
import { useState } from "react";
import logo from "./assets/T-logo.png";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const domains = [
    {
      name: "Full-Stack Development",
      description: "Build both frontend and backend for applications",
      img: "https://img-c.udemycdn.com/course/480x270/4505104_8592_8.jpg",
    },
    {
      name: "Frontend Development",
      description:
        "Create visually stunning and user-friendly interfaces (React, Angular, Vue.js)",
      img: "https://devsarticles.com/wp-content/uploads/2024/01/front-end-Roadmap.png",
    },
    {
      name: "Backend Development",
      description:
        "Build the server-side and APIs that power applications (Node.js, Python, Java, PHP)",
      img: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg?fit=805%2C428&ssl=1",
    },
    {
      name: "Software Development",
      description: "Build next-gen applications and services",
      img: "https://www.jagathinetwork.com/wp-content/uploads/2024/11/data-analytics.jpg",
    },
    {
      name: "Cloud Computing",
      description:
        "Leverage cloud platforms for scalable and reliable solutions (AWS, Azure, Google Cloud)",
      img: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/08/12060931/Untitled-design-88.png",
    },
  ];

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("TechSpira Internship Application");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setSubject(`TechSpira Internship Application from ${newName}`);
  };

  const scrollToForm = () => {
    document.querySelector("#apply").scrollIntoView({ behavior: "smooth" });
  };

  const ArrowLeft = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#646cff"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  const ArrowRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#646cff"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= domains.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? domains.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % domains.length;
      cards.push(domains[index]);
    }
    return cards;
  };

  return (
    <>
      <header>
        <nav>
          <a href="#">
            {/* <h1>Techspira</h1> */}
            <img src={logo} />
          </a>
          <ul>
            <li>
              <a href="#apply">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#domain">Domains</a>
            </li>
          </ul>
          <button onClick={scrollToForm}>Apply</button>
        </nav>
        <div className="hero">
          <h1>
            We help interns to work <br />
            their way to the stars
          </h1>
          <button id="about">
            <a href="#apply">Get Started</a>
          </button>
        </div>
      </header>
      <section className="about">
        <h2 className="heading">About Us</h2>
        <p>
          TechSpira is a leading technology company focused on innovative
          solutions in software development, machine learning, and data
          analytics. We&apos;ve helped countless interns grow into successful
          tech professionals. At TechSpira, we believe in nurturing future
          talent. Our internship programs are designed to provide hands-on
          experience, bridging academic learning with real-world challenges.
          Under the leadership of our visionary directors,we strive to create an
          environment where creativity meets technology, empowering both
          organizations and aspiring professionals to excel. With a robust
          foundation, a team of 50–100 dedicated professionals, and an
          unwavering commitment to quality, TechSpira Technologies is not just a
          company—it’s a launchpad for technological innovation and professional
          growth.
        </p>
      </section>
      <main id="domain">
        <h1>Domains</h1>
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            <ArrowLeft />
          </button>
          <div className="carousel">
            <div className="domain-grid">
              {getVisibleCards().map((domain, index) => (
                <div key={`${domain.name}-${index}`} className="card">
                  <img src={domain.img} />
                  <h3>{domain.name}</h3>
                  <p>{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-button next" onClick={nextSlide}>
            <ArrowRight />
          </button>
        </div>
      </main>
      <div className="register">
        <div className="form">
          <h2>Apply Now</h2>
          <form
            id="apply"
            action="https://formsubmit.co/rockyrocky9526@gmail.com"
            method="POST"
            encType="multipart/form-data"
            acceptCharset="UTF-8"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={subject} />
            <div className="form-grid">
              <div className="form-group">
                <label className="label">Full Name</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="tech@gmail.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="label">Phone Number</label>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  placeholder="+91 9201 000-000"
                  required
                />
              </div>

              <div className="form-group">
                <label className="label">Preferred Domain</label>
                <select className="select" name="domain" required>
                  <option value="">Select domain</option>
                  {domains.map((domain) => (
                    <option key={domain.name} value={domain.name}>
                      {domain.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label className="label">Resume</label>
                <input
                  className="input"
                  type="file"
                  name="Resume"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <small className="small">
                  Accepted formats: PDF, DOC, DOCX
                </small>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
