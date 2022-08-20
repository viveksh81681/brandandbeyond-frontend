 import {Link, useNavigate} from "react-router-dom"
import React, { useState } from "react";
import "../styles/style.css";
import axios from "axios";
export default function Signup() {
  const navigate=useNavigate()
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const [passwordVisibility,setPasswordVisibility]=useState("password");
    const formHandler=(e)=>{
         let {value,name}= e.target;
         setUserInfo({...userInfo,[name]:value})
    }
    const passwordVisibilityHandler=()=>{
      if(passwordVisibility=="password"){
        setPasswordVisibility("text")
       }
       else{
        setPasswordVisibility("password")
       }
    }
    const registerHandler=()=>{
         if(userInfo.email==""){
            alert("please enter email address")
         }
         else if(userInfo.password==""){
            alert("please enter password")
         }
         else if(userInfo.password!=userInfo.confirmPassword){
            alert("password does not matched !!")
         }
         else {
             axios.post("https://brand-and-beyond-backend.herokuapp.com/register",{ email:userInfo.email, password:userInfo.password}).then((res)=>{
              alert("Registered Successfully !!")
              navigate("/login")
             }).catch((err)=>{
               alert("Something went wrong !!")
             })
         }
    }
    console.log(userInfo)
  return (
    <>
      <div id="parentDiv">
        <div id="leftBox">
          <img
            src="https://user-images.githubusercontent.com/63330022/185419939-3e28809b-4847-4c2d-b2fc-d88fe4e6f5d9.png"
            height={"100%"}
            width={"100%"}
          />
        </div>

        <div id="rightBox">
          <div id="HeadingDiv">
            <h1 style={{ marginBottom: "3px" ,marginTop:"17px" , fontSize:"22px" }}>Welcome</h1>
            <h5
              style={{
                color: "#98E1F2",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Sign up to continue
            </h5>
          </div>
          <div id="inputBox">
            <div style={{ width: "100%" , position:"relative" }}>
              <i
                class="fa fa-envelope icon"
                style={{ position: "absolute", top: "40%", left: "10%" }}
              ></i>{" "}
              <input type={"email"} placeholder="Email address"  name="email" onChange={formHandler}/>
            </div>
            <div style={{ width: "100%"  , position:"relative"}}>
              <i
                class="fa fa-lock icon"
                style={{ position: "absolute", top: "44%", left: "12%" }}
              ></i>{" "}
              <input type={passwordVisibility} placeholder="Password" name="password" onChange={formHandler} />
              <i
                class="fa fa-eye icon"
                style={{ position: "absolute", top: "44%", left: "84%" }}
               onClick={passwordVisibilityHandler}></i>
            </div>

            <div style={{ width: "100%" ,position:"relative" }}>
              <i
                class="fa fa-lock icon"
                style={{ position: "absolute", top: "44%", left: "12%" }}
              ></i>{" "}
              <input type={passwordVisibility} placeholder="Confirm password" name="confirmPassword" onChange={formHandler}/>{" "}
              <i
                class="fa fa-eye icon"
                style={{ position: "absolute", top: "44%", left: "84%" }}
                onClick={passwordVisibilityHandler} ></i>
            </div>
             <div id="forgetTitle">
             <h4 >
              Forget Password ?
            </h4>
             </div>
            <div>
                <button onClick={registerHandler}> Sign up </button>
                  <div style={{display:"flex" , justifyContent:"space-around" , marginTop:"5px" , gap:"5px"}}><b><p>All ready have  a account ?</p></b> <Link to={"/login"} style={{textDecoration:"none", color:"#98E1F2" , marginTop:"1px" , fontWeight:"400"}}>Sign in</Link></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
