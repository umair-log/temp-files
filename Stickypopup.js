import React, { useState } from 'react';
import axios from 'axios';
import nextConfig from '../next.config';

function Stickypopup({ ifDisplayPopup }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: ""
  })
  const [inputValidationErros, setInputValidationErrors] = useState({
    name: "Your name is required",
    email: "Your email is required"
  })
  const [inputPrestine, setInputPrestine] = useState({
    name: true,
    email: true
  })
  const [inputStyles, setInputStyles] = useState({
    name: "form-control shadow-none type-your-name-popup rounded-0",
    email: "form-control shadow-none type-your-email-popup rounded-0"
  })
  const enterUserInfo = (e) => {
    e.persist();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    if (e.target.name === 'name') {
      setInputPrestine({ ...inputPrestine, name: false })
      var inputVal = e.target.value;
      var inputStyle = "form-control shadow-none type-your-name-popup rounded-0"
      if (inputVal.trim() === "") {
        setInputValidationErrors({ ...inputValidationErros, name: "Your name is required" })
        var inputStyle = "form-control shadow-none type-your-name-popup rounded-0 error-border"
      } else {
        setInputValidationErrors({ ...inputValidationErros, name: "" })
      }
    }
    if (e.target.name === 'email') {
      setInputPrestine({ ...inputPrestine, email: false })
      var inputVal = e.target.value;
      var inputStyle = "form-control shadow-none type-your-email-popup rounded-0"
      var mailformat = nextConfig.env.EMAIL_FORMAT;
      if (inputVal.trim() === "") {
        setInputValidationErrors({ ...inputValidationErros, email: "Your email is required" })
        var inputStyle = "form-control shadow-none type-your-email-popup rounded-0 error-border"
      } else if (!inputVal.match(mailformat)) {
        setInputValidationErrors({ ...inputValidationErros, email: "Invalid email address" })
        var inputStyle = "form-control shadow-none type-your-email-popup rounded-0 error-border"
      } else {
        setInputValidationErrors({ ...inputValidationErros, email: "" })
      }
    }
    setInputStyles({ ...inputStyles, [e.target.name]: inputStyle })
  }

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   setInputPrestine({ ...inputPrestine, email: false, name: false })
  //   var nameInputStyle = "form-control shadow-none type-your-name-popup rounded-0"
  //   var emailInputStyle = "form-control shadow-none type-your-email-popup rounded-0"
  //   if (inputValidationErros.name !== "") {
  //     nameInputStyle = "form-control shadow-none type-your-name-popup rounded-0 error-border"
  //   }
  //   if (inputValidationErros.email !== "") {
  //     emailInputStyle = "form-control shadow-none type-your-email-popup rounded-0 error-border"
  //   }
  //   setInputStyles({ ...inputStyles, name: nameInputStyle, email: emailInputStyle })
  //   if (inputValidationErros.name !== "" || inputValidationErros.email !== "") {
  //     return false;
  //   }
  //   const data = {
  //     firstname: userInfo.name,
  //     email: userInfo.email,
  //     type: "toolkit",
  //     status: 'complete',
  //     tagName: 'Lead Magnet_Fertility'
  //   };
  //   axios.post(`/api/users`, data).then((res) => {
  //     if (res.status == "201") {
  //       ifDisplayPopup(false)
  //     }
  //   }).catch((errorResp) => {
  //     console.log(errorResp);
  //   });
  // }

  const formSubmit = (e) => {
    e.preventDefault();
    setInputPrestine({ ...inputPrestine, email: false, name: false })
    var nameInputStyle = "form-control shadow-none type-your-name-popup rounded-0"
    var emailInputStyle = "form-control shadow-none type-your-email-popup rounded-0"
    
    if (inputValidationErros.name !== "") {
      nameInputStyle = "form-control shadow-none type-your-name-popup rounded-0 error-border"
    }
    if (inputValidationErros.email !== "") {
      emailInputStyle = "form-control shadow-none type-your-email-popup rounded-0 error-border"
    }
    
    setInputStyles({ ...inputStyles, name: nameInputStyle, email: emailInputStyle })
    
    if (inputValidationErros.name !== "" || inputValidationErros.email !== "") {
      return false;
    }

    // GTM dataLayer push
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "tool_kit_form_submit",
            email: userInfo.email,
            first_name: userInfo.name.split(' ')[0] || "", // Extract first name
            last_name: userInfo.name.split(' ').slice(1).join(' ') || "" // Extract last name
        });
    }

    const data = {
      firstname: userInfo.name,
      email: userInfo.email,
      type: "toolkit",
      status: 'complete',
      tagName: 'Lead Magnet_Fertility'
    };
    
    axios.post(`/api/users`, data).then((res) => {
      if (res.status == "201") {
        ifDisplayPopup(false)
      }
    }).catch((errorResp) => {
      console.log(errorResp);
    });
}

  return (
    <div className="stickypopup d-flex justify-content-center align-items-center py-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="200">
      <h4 className="popup-heading mb-0">Want to improve your fertility right now?</h4>
      <form onSubmit={formSubmit}>
        <div className="row ps-lg-4 align-items-center">
          <div className="col-lg-4 position-relative">
            <input type="text" name="name" id="namePopup" className={inputStyles.name} placeholder="your name" onChange={enterUserInfo} />
            {(inputValidationErros.name !== "" && inputPrestine.name === false) &&
              (<img src='./img/error.webp' alt='' className="error-exmlanation-popup" />)
            }
          </div>
          <div className="col-lg-4 position-relative">
            <input type="email" name="email" id="emailPopup" className={inputStyles.email} placeholder="your email" onChange={enterUserInfo} />
            {(inputValidationErros.email !== "" && inputPrestine.email === false) &&
              (<img src='./img/error.webp' alt='' className="error-exmlanation-popup" />)
            }
          </div>
          <div className="col-lg-4 pe-0">
            <button className="rounded-0 shadow-none grab-your-free-stuff-popup">SEND ME THE TOOLKIT</button>
          </div>
        </div >
      </form >
    </div >
  );
}

export default Stickypopup;