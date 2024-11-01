import {  NavLink } from "react-router-dom";

const NotFoundPage = () => {
    

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"100px "}}>
      <div style={{}} >
       <h1 style={{fontSize:"110px" ,color:"white"}}> 404 Not Found </h1>
       <p style={{marginBottom:'80px',color:"white"}}>Your visited page not found. You may go home page. </p>
       <NavLink className="btn-link"  to="/" style={{padding:"16px 48px", background:'#DB4444', color:"#fff", borderRadius:'4px',}}>Back to home page</NavLink>
        </div>
    </div>
  );
};

export default NotFoundPage;
