import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <div className="homecontainer">
      {/* <div> */}
        <img
        src="https://wallpapercave.com/wp/wp7664856.png"
          alt="profileimage"
          width={"100%vw"}
          height={"672vh"}
        //   style={{opacity:"0.65"}}
        />
      {/* </div> */}
      <div className="homecontent">
        <h1>Hi its <strong>Anbu</strong></h1>
        <h1>I am  <span>Software Engineer</span></h1>
        <p> I am a passionate software engineer with a keen <br></br> interest in developing innovative solutions to complex problems. I specialize in software design, development, and implementation.</p>
       <div className="learnmore">
        <p>learn more </p>
       </div>
        <div className="contact-icons">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="tel:+1234567890">
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                </a>
                <a href="mailto:your.email@example.com">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
      </div>
    </div>
  );
}

export default Home;
