import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      projectname: "Chat Application",
      description:
        "A chat application is a software platform that allows users to communicate with each other in real-time via text messages. These applications can be designed for various purposes, including personal communication, business collaboration, customer support, and community engagement",
      language: "React Native & Firebase",
      about: "This Project Worked in Applogiq",
      img:"https://th.bing.com/th/id/OIP.M75fn_hS4aezPPUFbr-9HgHaEk?w=1567&h=967&rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      projectname: "ShopQ Clothing",
      description:
        "An e-commerce clothing website is an online platform that allows users to browse, select, and purchase clothing and accessories. It combines the convenience of online shopping with a curated selection of fashion items, providing a seamless and enjoyable shopping experience.",
      language: "React Native",
      about: "This Project Worked in Applogiq",
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-ecommerce-templates.png",
    },
    {
      id: 3,
      projectname: "Hospital management System",
      description:
        "A chat application is a software platform that allows users to communicate with each other in real-time via text messages. These applications can be designed for various purposes, including personal communication, business collaboration, customer support, and community engagement",
      language: "HTML,CSS,JAVASCRIPT,Python & MySQL",
      about: "This is my major project",
      img:"https://vertassets.blob.core.windows.net/image/9c9d10f4/9c9d10f4-4087-416a-ad4e-b36c0fc542ac/gettyimages_927809262_edc_medrio.jpg"
    },
  ];
  return (
    <div style={{ backgroundColor: "darkslategrey", height: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        My Projects
      </h1>
      <div className="projectcontainer">
        {projects?.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project">
              <div style={{ width: "28vw", height: "35vh" }}>
                <img
                  src={project?.img}
                  alt={project.projectname}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <h3 className="projecttitle">{project.projectname}</h3>
              <p className="projectdescription">
                 <span>Project Description : </span><br /> {project.description}
              </p>
              <p className="projectdescription1">
            <span>language used : </span>{project.language}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
