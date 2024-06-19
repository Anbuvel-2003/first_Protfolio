import React from 'react'

function Contact() {
  return (
    <div style={{ backgroundColor: "darkslategrey", height: "100vh" }}>
        <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        Contact
      </h1>
      <form style={{display:'flex',flexDirection:'column',gap:"10px",alignItems:'center'}} >
        <div  style={{display:'flex',flexDirection:'column',gap:"10px"}}>
        <label style={{color:'white',fontSize:'20px'}}>First Name<span style={{ color: "red" }}> * </span></label>
        <input type="text" name="fname" style={{width:'500px',height:'30px',borderRadius:'5px'}} required />
        </div>
        <div  style={{display:'flex',flexDirection:'column',gap:"10px"}}>
        <label style={{color:'white',fontSize:'20px'}}>Last Name<span style={{ color: "red" }}> * </span></label>
        <input type="text" name="lname"  style={{width:'500px',height:'30px',borderRadius:'5px'}} required/>
        </div>
        <div  style={{display:'flex',flexDirection:'column',gap:"10px"}}>
        <label style={{color:'white',fontSize:'20px'}}>Email<span style={{ color: "red" }}> * </span></label>
        <input type="text" name="email" style={{width:'500px',height:'30px',borderRadius:'5px'}} required />
        </div>
        <div  style={{display:'flex',flexDirection:'column',gap:"10px"}}>
        <label style={{color:'white',fontSize:'20px'}}>Comments / Questions <span style={{ color: "red" }}> * </span></label>
        <input type="text" name="message" style={{width:'500px',height:'300px',borderRadius:'5px'}} required />
        </div>
        <div  style={{display:'flex',flexDirection:'column',gap:"20px",marginTop:'20px'}}>
        <input type="submit" value="Submit" style={{width:'200px',height:'30px',borderRadius:'5px',backgroundColor:"darkslategrey",color:"white",borderWidth:"1px",
            borderColor:'white'
        }} />
        </div>
      </form>
    </div>
  )
}

export default Contact