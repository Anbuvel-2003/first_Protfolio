// import React from "react";
// import "./skills.css";
// import CircularProgress from "./roundprogressbas";
// function Skills() {
//     const skills = [
//         {
//             id: 1,
//             name: "HTML",
//             value: 90        
//         },
//         {
//             id: 2,
//             name: "CSS",
//             value: 80        
//         },
//         {
//             id: 3,
//             name: "JAVASCRIPT",
//             value: 85        
//         },
//         {
//             id: 4,
//             name: "REACT",
//             value: 75        
//         },
//         {
//             id: 5,
//             name: "BOOTSTRAP",
//             value: 80        
//         },
//         {
//             id: 6,
//             name: "REACT NATIVE",
//             value: 90        
//         },
//         {
//             id: 7,
//             name: "FIREBASE",
//             value: 60        
//         },
//         {
//             id: 8,
//             name: "REDUX",
//             value: 80        
//         },
//     ]
//   return (
//     <div className="skillcontainer"> 
//     <h1 style={{textAlign:'center',textTransform:'capitalize',color:'white'}}>my skills</h1>
//     {skills?.map((skill)=>{
//         return(
//             <div style={{width:'20vw',height:'30vh', display:'inline-block',margin:'2vw',backgroundColor:'red'}}>

//         <div className="skill" key={skill.id} style={{textAlign:'center',color:'white',justifyContent:'space-between'}}> 
//         <div style={{width:'10vw',height:'10vh'}}>
//         <CircularProgress value={skill.value} />
//         </div>
//         <h3>{skill.name}</h3>
//         </div>
//         </div>
//         )
//     }
//     )}
//     </div>
//   );
// }

// export default Skills;
import React from "react";
import "./skills.css";
import CircularProgress from "./roundprogressbas";

function Skills() {
  const skills = [
    { id: 1, name: "HTML", value: 90,color:"red" },
    { id: 2, name: "CSS", value: 80,color:"blue" },
    { id: 3, name: "JAVASCRIPT", value: 85 ,color:"red"},
    { id: 4, name: "REACT", value: 75,color:"blue" },
    { id: 5, name: "BOOTSTRAP", value: 80,color:"blue" },
    { id: 6, name: "REACT NATIVE", value: 90,color:"red" },
    { id: 7, name: "FIREBASE", value: 60,color:"blue" },
    { id: 8, name: "REDUX", value: 80,color:"red" },
  ];

  return (
    <div className="skillcontainer">
      <h1 style={{ textAlign: "center", textTransform: "capitalize", color: "white" }}>my skills</h1>
      {skills?.map((skill) => (
        <div key={skill.id} className="skill-item">
          <div className="skill">
            <div style={{ width: "100px", height: "100px" }}>
              <CircularProgress value={skill.value} pathcolor={skill.color} />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;

