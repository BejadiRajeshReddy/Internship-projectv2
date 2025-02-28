import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";
import Img from "../src/assets/image.js";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("TechSpira Internship Application");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(3);

  const domains = [
    {
      name: "Full-Stack Development",
      description: "Build both frontend and backend for applications",
      image: Img.full,
    },
    {
      name: "Frontend Development",
      description:
        "Create visually stunning and user-friendly interfaces (React, Angular, Vue.js)",
      image: Img.front,
    },
    {
      name: "Backend Development",
      description:
        "Build the server-side and APIs that power applications (Node.js, Python, Java, PHP)",
      image: Img.back,
    },
    {
      name: "Software Development",
      description: "Build next-gen applications and services",
      image: Img.software,
    },
    {
      name: "Cloud Computing",
      description:
        "Leverage cloud platforms for scalable and reliable solutions (AWS, Azure, Google Cloud)",
      image: Img.cloud,
    },
    {
      name: "UI/UX Design",
      description:
        "Design engaging user interfaces and optimize user experiences",
      image: Img.UX,
    },
    {
      name: "DevOps & Automation",
      description: "Automate workflows and improve software delivery processes",
      image: Img.devops,
    },
    {
      name: "Networking & IT Support",
      description: "Ensure seamless IT infrastructure and troubleshooting",
      image: Img.network,
    },
    {
      name: "Database Management & SQL",
      description: "Manage and query databases for data-driven applications",
      image: Img.sql,
    },
  ];

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setSubject(`TechSpira Internship Application from ${newName}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const scrollToForm = () => {
    document.querySelector("#apply").scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= domains.length - cardsVisible) {
        return 0;
      }
      return prevIndex + 1;
    });
  }, [domains.length, cardsVisible]);

  useEffect(() => {
    if (!paused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [paused, nextSlide]);

  useEffect(() => {
    const updateCardsVisible = () => {
      if (window.innerWidth <= 768) {
        setCardsVisible(1);
      } else {
        setCardsVisible(3);
      }
    };

    updateCardsVisible();
    window.addEventListener("resize", updateCardsVisible);
    return () => window.removeEventListener("resize", updateCardsVisible);
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="#">
            <img src={Img.logo} alt="TechSpira Logo" />
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
          <span className="tag-label">WELCOME TO TECHSPIRA</span>
          <h1>
            We help interns to work <br />
            their way to the stars
          </h1>
          <p>Join TechSpira and launch your career in technology</p>
          <button id="about">
            <a href="#apply">Start Your Journey →</a>
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
          Under the leadership of our visionary directors, we strive to create
          an environment where creativity meets technology, empowering both
          organizations and aspiring professionals to excel. With a robust
          foundation, a team of 50-100 dedicated professionals, and an
          unwavering commitment to quality, TechSpira Technologies is not just a
          company—it&apos;s a launchpad for technological innovation and
          professional growth.
        </p>
      </section>

      <main id="domain">
        <h1>Domains</h1>
        <div className="carousel-container">
          <div className="carousel">
            <div
              className="domain-grid"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsVisible)
                }%)`,
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {domains.map((domain, index) => (
                <div key={`${domain.name}-${index}`} className="card">
                  <img src={domain.image} alt={domain.name} />
                  <h3>{domain.name}</h3>
                  <p>{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="form-container">
        <div id="apply" className="form-card">
          <div className="form-header">
            <h2>Apply For Internship</h2>
            <p>Join our team and kickstart your career</p>
          </div>

          <form
            className="form-content"
            action="https://formsubmit.co/rockyrocky9526@gmail.com"
            method="POST"
            encType="multipart/form-data"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={subject} />

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="techspira@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+91 9201 000-000"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Domain</label>
                <select name="domain" className="form-select" required>
                  <option value="">Select a domain</option>
                  {domains.map((domain) => (
                    <option key={domain.name} value={domain.name}>
                      {domain.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="file-upload">
              <label className="form-label">Resume</label>
              <div
                className="upload-zone"
                onClick={() =>
                  fileInputRef.current && fileInputRef.current.click()
                }
              >
                <div className="upload-icon">📄</div>
                <div className="upload-text">
                  {fileName || "Drop your resume here, or click to select"}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="Resume"
                  className="file-input"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  style={{ display: "none" }}
                />
                <p className="upload-help">PDF, DOC, or DOCX up to 10MB</p>
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
