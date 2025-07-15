import Head from 'next/head';
import Link from 'next/link';
import 'react-calendar/dist/Calendar.css';
import { GlobalInfo } from './_app';
import { PopupModal } from "react-calendly";
import React, { useState, useContext } from "react";
import Script from 'next/script';
import axios from 'axios';
import Router from 'next/router';
import moment from 'moment';
import nextConfig from '../next.config'

export default function FreeConsult(props) {
  const pageRedirect = () => {
    Router.push('/schedule-meeting');
  }
  const { appState, dispatchAction } = useContext(GlobalInfo);
  
  const [formStep, setFormStep] = useState({ firstStep: true, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
  const [isAgreed, setIsAgreed] = useState(false);
  const [pregSteps, setPregSteps] = useState([]);
  const [freeConsultUserId, setFreeConsultUserId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    firstName: appState.firstName,
    lastName: appState.lastName,
    email: appState.email,
    phone: appState.phone,
    companyName: '',
    tryingYear: '',
    question: '',
    howUrgent: '',
    budgetAllocated: '',
    dateOfBirth: '',
    placeOfBirth: '',
    maritalStatus: '',
    stepForGettingPreg: '',
    householdIncome: '',
    difficultReason: '',
    biggestConcern: '',
    consultDate: '',
    consultTime: '',
    agree: false
  });
  const [firstScreenValidation, setFirstScreenValidation] = useState({
    firstName: appState.firstName === "" ? "Your first name is required" : "",
    lastName: appState.lastName === "" ? "Your last name is required" : "",
    email: appState.email === "" ? "Your email address is required" : "",
    phone: appState.phone === "" ? "Your phone number is required" : "",
    agree: "Please agree to terms & conditions",
    trying: "Please select how long you have been trying",
    howUrgent: "Please mention how urgent is your desire to get pregnant",
    budgetAllocated: "Please mention your allocated budget",
    dateOfBirth: "Your date of birth is required",
    placeOfBirth: "Your place of birth is required",
    maritalStatus: "Please mention your marital status",
    stepForGettingPreg: "Please mention the step you have taken to get pregnant",
    householdIncome: "Please mention your household income",
    difficultReason: "Please mention own personal journey to get pregnant",
    biggestConcern: "Please mention your biggest concern in getting pregnant"
  })
  const [firstScreenPrestine, setFirstScreenPrestine] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    agree: true,
    trying: true,
    howUrgent: true,
    budgetAllocated: true,
    dateOfBirth: true,
    placeOfBirth: true,
    maritalStatus: true,
    stepForGettingPreg: true,
    householdIncome: true,
    difficultReason: true,
    biggestConcern: true
  })
  const [firstScreenDefaultStyles, setFirstScreenDefaultStyles] = useState({
    firstName: "form-control input-feild rounded-0 shadow-none",
    lastName: "form-control input-feild rounded-0 shadow-none",
    email: "form-control input-feild rounded-0 shadow-none",
    phone: "form-control input-feild rounded-0 shadow-none",
    agree: "form-check-input rounded-0 shadow-none border-0",
    dateOfBirth: "form-control input-feild rounded-0 shadow-none",
    placeOfBirth: "form-control input-feild rounded-0 shadow-none",
  })
  const setIsAgreedToTerm = (e) => {
    setUserInfo({ ...userInfo, agree: e.target.checked })
    setFirstScreenPrestine({ ...firstScreenPrestine, agree: false })
    setIsAgreed(e.target.checked);
    var agreeInputStyle = "form-check-input rounded-0 shadow-none border-0"
    var agreeValidErrMsg = ""
    if (e.target.checked === false) {
      agreeInputStyle = "form-check-input rounded-0 shadow-none error-border"
      agreeValidErrMsg = "Please agree to terms & conditions"
    }
    setFirstScreenDefaultStyles({ ...firstScreenDefaultStyles, agree: agreeInputStyle })
    setFirstScreenValidation({ ...firstScreenValidation, agree: agreeValidErrMsg })
  }
  const setTryingDuration = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    setFirstScreenPrestine({ ...firstScreenPrestine, trying: false })
    setFirstScreenValidation({ ...firstScreenValidation, trying: "" })
  }
  const setYourUgency = (e) => {
    setFirstScreenPrestine({ ...firstScreenPrestine, howUrgent: false })
    setFirstScreenValidation({ ...firstScreenValidation, howUrgent: "" })
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const setBudgetAllocated = (e) => {
    setFirstScreenPrestine({ ...firstScreenPrestine, budgetAllocated: false })
    if (e.target.value.trim() !== "") {
      setFirstScreenValidation({ ...firstScreenValidation, budgetAllocated: "" })
    } else {
      setFirstScreenValidation({ ...firstScreenValidation, budgetAllocated: "Please mention your allocated budget" })
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const setMaritalStatus = (e) => {
    setFirstScreenPrestine({ ...firstScreenPrestine, maritalStatus: false })
    setFirstScreenValidation({ ...firstScreenValidation, maritalStatus: "" })
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const setDateOfBirth = (e) => {
    var inputValidErrMsg = "";
    var inputStyle = "form-control input-feild rounded-0 shadow-none";
    var eighteenYearsAgo = moment().subtract(18, "years");
    var birthday = moment(e.target.value);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    setFirstScreenPrestine({ ...firstScreenPrestine, dateOfBirth: false })
    if (e.target.value === "") {
      inputValidErrMsg = "Your date of birth is required"
      inputStyle = "form-control input-feild rounded-0 shadow-none error-border";
    } else if (eighteenYearsAgo.isBefore(birthday)) {
      inputValidErrMsg = "Age should be minimum 18 years"
      inputStyle = "form-control input-feild rounded-0 shadow-none error-border";
    }
    setFirstScreenValidation({ ...firstScreenValidation, dateOfBirth: inputValidErrMsg })
    setFirstScreenDefaultStyles({ ...firstScreenDefaultStyles, [e.target.name]: inputStyle })
  }
  const setPlaceOfBirth = (e) => {
    var inputValidErrMsg = "";
    var inputStyle = "form-control input-feild rounded-0 shadow-none";
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    setFirstScreenPrestine({ ...firstScreenPrestine, placeOfBirth: false })
    if (e.target.value.trim() === "") {
      inputValidErrMsg = "Your place of birth is required"
      inputStyle = "form-control input-feild rounded-0 shadow-none error-border";
    }
    setFirstScreenValidation({ ...firstScreenValidation, placeOfBirth: inputValidErrMsg })
    setFirstScreenDefaultStyles({ ...firstScreenDefaultStyles, [e.target.name]: inputStyle })
  }
  const setStepForGettingPreg = (e) => {
    if (e.target.checked == true) {
      setPregSteps([...pregSteps, e.target.value])
    } else {
      setPregSteps(pregSteps.filter(item => item !== e.target.value))
    }
    setFirstScreenPrestine({ ...firstScreenPrestine, stepForGettingPreg: false })
    setFirstScreenValidation({ ...firstScreenValidation, stepForGettingPreg: "" })
    setUserInfo({ ...userInfo, stepForGettingPreg: pregSteps })
  }
  const setHouseholdIncome = (e) => {
    setFirstScreenPrestine({ ...firstScreenPrestine, householdIncome: false })
    setFirstScreenValidation({ ...firstScreenValidation, householdIncome: "" })
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const setDifficultReason = (e) => {
    setFirstScreenPrestine({ ...firstScreenPrestine, difficultReason: false })
    if (e.target.value.trim() !== "") {
      setFirstScreenValidation({ ...firstScreenValidation, difficultReason: "" })
    } else {
      setFirstScreenValidation({ ...firstScreenValidation, difficultReason: "Please mention own personal journey to get pregnant" })
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const setBiggestConcern = (e) => {
    setFirstScreenPrestine({ ...firstScreenPrestine, biggestConcern: false })
    var inputValidErrMsg = "";
    if (e.target.value.trim() === '') {
      inputValidErrMsg = "Please mention your biggest concern in getting pregnant"
    }
    setFirstScreenValidation({ ...firstScreenValidation, biggestConcern: inputValidErrMsg })
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const collectUserInfo = (e) => {
    e.persist();
    var inputValidErrMsg = "";
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    if (e.target.name === 'firstName') {
      setFirstScreenPrestine({ ...firstScreenPrestine, firstName: false })
      var firstNameValue = e.target.value;
      var inputStyle = "form-control input-feild rounded-0 shadow-none";
      if (firstNameValue.trim() === "") {
        inputValidErrMsg = "Your first name is required"
        inputStyle = "form-control input-feild rounded-0 shadow-none error-border";
      }
    }
    if (e.target.name === 'lastName') {
      setFirstScreenPrestine({ ...firstScreenPrestine, lastName: false })
      var lastNameValue = e.target.value;
      var inputStyle = "form-control input-feild rounded-0 shadow-none";
      if (lastNameValue.trim() === "") {
        inputValidErrMsg = "Your last name is required"
        inputStyle = "form-control input-feild rounded-0 shadow-none error-border";
      }
    }
    if (e.target.name === 'email') {
      setFirstScreenPrestine({ ...firstScreenPrestine, email: false })
      var emailValue = e.target.value;
      var mailformat = nextConfig.env.EMAIL_FORMAT;
      var inputStyle = "form-control input-feild rounded-0 shadow-none";
      if (emailValue.trim() === "") {
        inputValidErrMsg = "Your email is required"
        inputStyle = "form-control input-feild rounded-0 shadow-none error-border"
      } else if (!emailValue.match(mailformat)) {
        inputValidErrMsg = "Invalid email address"
        inputStyle = "form-control input-feild rounded-0 shadow-none error-border"
      }
    }
    if (e.target.name === 'phone') {
      setFirstScreenPrestine({ ...firstScreenPrestine, phone: false })
      var phoneValue = e.target.value;
      var phoneformat = nextConfig.env.PHONE_FORMAT;
      var inputStyle = "form-control input-feild rounded-0 shadow-none";
      if (phoneValue.trim() === "") {
        inputValidErrMsg = "Your phone number is required";
        inputStyle = "form-control input-feild rounded-0 shadow-none error-border"
      } else if (!phoneValue.match(phoneformat)) {
        inputValidErrMsg = "Invalid phone number";
        inputStyle = "form-control input-feild rounded-0 shadow-none error-border"
      }
    }
    setFirstScreenDefaultStyles({ ...firstScreenDefaultStyles, [e.target.name]: inputStyle })
    setFirstScreenValidation({ ...firstScreenValidation, [e.target.name]: inputValidErrMsg })
  }
  const modifyUser = (data, userId) => {
    let userEndPoint = `/api/users/${userId}`;
    var promise = new Promise((resolve, reject) => {
      axios.put(userEndPoint, data).then((res) => {
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
    return promise;
  }
  const forwardFormStep = (step) => {
    if (step == 'first') {


      var firstNameValidErrMsg = "form-control input-feild rounded-0 shadow-none"
      var lastNameValidErrMsg = "form-control input-feild rounded-0 shadow-none"
      var emailValidErrMsg = "form-control input-feild rounded-0 shadow-none"
      var phoneValidErrMsg = "form-control input-feild rounded-0 shadow-none"
      var agreeValidErrMsg = "form-check-input rounded-0 shadow-none border-0"
      if (firstScreenValidation.firstName !== "") {
        firstNameValidErrMsg = "form-control input-feild rounded-0 shadow-none error-border"
      }
      if (firstScreenValidation.lastName !== "") {
        lastNameValidErrMsg = "form-control input-feild rounded-0 shadow-none error-border"
      }
      if (firstScreenValidation.email !== "") {
        emailValidErrMsg = "form-control input-feild rounded-0 shadow-none error-border"
      }
      if (firstScreenValidation.phone !== "") {
        phoneValidErrMsg = "form-control input-feild rounded-0 shadow-none error-border"
      }
      if (firstScreenValidation.agree !== "") {
        agreeValidErrMsg = "form-check-input rounded-0 shadow-none border-0 error-border"
      }
      setFirstScreenDefaultStyles({ ...firstScreenDefaultStyles, firstName: firstNameValidErrMsg, lastName: lastNameValidErrMsg, email: emailValidErrMsg, phone: phoneValidErrMsg, agree: agreeValidErrMsg })
      setFirstScreenPrestine({ ...firstScreenPrestine, firstName: false, lastName: false, email: false, phone: false, agree: false })
      if (firstScreenValidation.firstName !== "" || firstScreenValidation.lastName !== "" || firstScreenValidation.email !== "" || firstScreenValidation.phone !== "" || isAgreed === false) {
        return false;
      }
      const data = {
        firstname: userInfo.firstName,
        lastname: userInfo.lastName,
        email: userInfo.email,
        phone: userInfo.phone,
        type: "freeConsult"
      };

      /*
      if (typeof freeConsultUserId !== 'undefined' && freeConsultUserId !== null) {
        axios.delete(`/api/users/${freeConsultUserId}`).then((res) => {
          console.log(res);
        }).catch((errorResp) => {
          console.log(errorResp);
        });
      }*/

      // new code 
    
      // dataLayer.push({
      //   event: "pre_consult_submit",
      //   email: userInfo.email,
      //   phone: userInfo.phone,
      //   first_name: userInfo.firstName,
      //   last_name: userInfo.lastName,
      //   dob: moment(userInfo.dateOfBirth).format('YYYYMMDD') // format the date
      // });
      
      
      
      axios.post(`/api/users`, data).then((res) => {
        if (res.status == "201") {
          setFreeConsultUserId(res.data.userCreated.id);
          localStorage.setItem('freeConsultUserId', res.data.userCreated.id);
          const nameSplit = userInfo.name.split(" ");
          dispatchAction({
            type: 'saveCalendlyInfo',
            payload: { calendlyFname: nameSplit[0], calendlyLname: nameSplit[1], calendlyEmail: userInfo.email }
          });
        }
      }).catch((errorResp) => {
        console.log(errorResp);
      });
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: true, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'second') {
      setFirstScreenPrestine({ ...firstScreenPrestine, trying: false })
      if (firstScreenValidation.trying !== "") {
        return false;
      }
      var data = {
        trying: userInfo.tryingYear,
        question: userInfo.question
      }
      modifyUser(data, freeConsultUserId).then((res) => {
        setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: true, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
      }).catch((err) => {
        console.log("2nd step error: ", err);
      });
    }
    if (step == 'third') {
      setFirstScreenPrestine({ ...firstScreenPrestine, howUrgent: false })
      if (firstScreenValidation.howUrgent !== "") {
        return false;
      }
      var data = {
        howUrgent: userInfo.howUrgent
      }
      modifyUser(data, freeConsultUserId).then((res) => {
        setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: true, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
      }).catch((err) => {
        console.log("3rd step error: ", err);
      });
    }
    if (step == 'fourth') {
      setFirstScreenPrestine({ ...firstScreenPrestine, budgetAllocated: false })
      if (firstScreenValidation.budgetAllocated !== "") {
        return false;
      }
      var data = {
        budgetAllocated: userInfo.budgetAllocated
      }
      modifyUser(data, freeConsultUserId).then((res) => {
        setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: true, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
      }).catch((err) => {
        console.log("4th step error: ", err);
      });
    }
    if (step == 'fifth') {
      var dateOfBirthInputStyle = "form-control input-feild rounded-0 shadow-none"
      var placeOfBirthInputStyle = "form-control input-feild rounded-0 shadow-none"
      if (firstScreenValidation.dateOfBirth !== "") {
        dateOfBirthInputStyle = "form-control input-feild rounded-0 shadow-none error-border"
      }
      if (firstScreenValidation.placeOfBirth !== "") {
        placeOfBirthInputStyle = "form-control input-feild rounded-0 shadow-none error-border"
      }
      setFirstScreenDefaultStyles({ ...firstScreenDefaultStyles, dateOfBirth: dateOfBirthInputStyle, placeOfBirth: placeOfBirthInputStyle })
      setFirstScreenPrestine({ ...firstScreenPrestine, dateOfBirth: false, placeOfBirth: false, maritalStatus: false })
      if (firstScreenValidation.dateOfBirth !== "" || firstScreenValidation.placeOfBirth !== "" || firstScreenValidation.maritalStatus !== "") {
        return false;
      }
      var data = {
        maritalStatus: userInfo.maritalStatus,
        placeOfBirth: userInfo.placeOfBirth,
        dateOfBirth: userInfo.dateOfBirth
      }
      modifyUser(data, freeConsultUserId).then((res) => {
        setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: true, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
      }).catch((err) => {
        console.log("5th step error: ", err);
      });
    }
    if (step == 'sixth') {
      setFirstScreenPrestine({ ...firstScreenPrestine, stepForGettingPreg: false })
      if (typeof pregSteps === 'undefined' || pregSteps.length == 0) {
        return false;
      }
      var data = {
        stepForGettingPreg: pregSteps.join(',')
      }
      modifyUser(data, freeConsultUserId).then((res) => {
        setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: true, eighthStep: false, ninthStep: false, tenthStep: false });
      }).catch((err) => {
        console.log("6th step error: ", err);
      });
    }
    if (step == 'seventh') {
      setFirstScreenPrestine({ ...firstScreenPrestine, householdIncome: false })
      if (firstScreenValidation.householdIncome !== "") {
        return false;
      }
      var data = {
        householdIncome: userInfo.householdIncome
      }
      modifyUser(data, freeConsultUserId).then((res) => {
        setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: true, ninthStep: false, tenthStep: false });
      }).catch((err) => {
        console.log("7th step error: ", err);
      });
    }
    if (step == 'eighth') {
      setFirstScreenPrestine({ ...firstScreenPrestine, difficultReason: false })
      if (firstScreenValidation.difficultReason !== "") {
        return false;
      }
      var data = {
        difficultReason: userInfo.difficultReason
      }
      modifyUser(data, freeConsultUserId).then((res) => {
        setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: true, tenthStep: false });
      }).catch((err) => {
        console.log("8th step error: ", err);
      });
    }
    if (step == 'ninth') {


      dataLayer.push({
        event: "pre_consult_submit",
        email: userInfo.email,
        phone: userInfo.phone,
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        dob: moment(userInfo.dateOfBirth).format('YYYYMMDD')
      });

      setFirstScreenPrestine({ ...firstScreenPrestine, biggestConcern: false })
      if (firstScreenValidation.biggestConcern !== "") {
        return false;
      }
      var data = {
        biggestConcern: userInfo.biggestConcern
      }



      modifyUser(data, freeConsultUserId).then((res) => {
        pageRedirect();
      }).catch((err) => {
        console.log("9th step error: ", err);
      });
    }
  }
  const backwardFormStep = (step) => {
    if (step == 'first') {
      alert('can not go further backward');
    }
    if (step == 'second') {
      setFormStep({ ...FreeConsult, firstStep: true, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'third') {
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: true, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'fourth') {
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: true, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'fifth') {
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: true, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'sixth') {
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: true, sixthStep: false, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'seventh') {
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: true, seventhStep: false, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'eighth') {
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: true, eighthStep: false, ninthStep: false, tenthStep: false });
    }
    if (step == 'ninth') {
      setFormStep({ ...FreeConsult, firstStep: false, secondStep: false, thirdStep: false, fourthStep: false, fifthStep: false, sixthStep: false, seventhStep: false, eighthStep: true, ninthStep: false, tenthStep: false });
    }
  }
  const setTimeSlot = (clickedTimeSlot) => {
    setUserInfo({ ...userInfo, consultTime: clickedTimeSlot })
  }

  return (
    <>
      <Head>
        <title>Fertility Avenues</title>
        <meta name="description" content="Fertility Avenues" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

        <script dangerouslySetInnerHTML={{
          __html:
            `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '722676669519092');
            fbq('track', 'PageView');`}}
        />
        <noscript>
          <img height="1" width="1" src="https://www.facebook.com/tr?id=722676669519092&ev=PageView&noscript=1" />
        </noscript>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      <div className="container" id="calendly-inline-widget"></div>

      {
        appState.showConsultModal == true && (
          <PopupModal
            url="https://calendly.com/healthsapiens/fertility-avenues-free-consultation"
            pageSettings={props.pageSettings}
            utm={props.utm}
            
            prefill={props.prefill}            

            onModalClose={() => dispatchAction({ type: 'hidemodal' })}
            open={appState.showConsultModal} rootElement={document.getElementById('calendly-inline-widget')}
          />
        )
      }

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 p-0">
            <div className="survey-side-menu d-flex flex-column justify-content-between">
              <div className="row justify-content-end">
                <div className="col-lg-8 col-12 text-end mt-4 pe-lg-0">
                  <Link href="/">
                    <img src="/img/logo.webp" className="freeconsult-logo" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="row mt-4 mt-lg-0">
                  <div className="col-lg-12 col-12">
                    <h1 className="embrace-motherhood">It&rsquo;s time to feel fully supported before and during your pregnancy</h1>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-2 col-2 me-3">
                    <img src="/img/white-line.webp" className="white-line" />
                  </div>
                  <div className="col-lg-8 col-9 p-0">
                    <h6 className="with-our-fertility-service">We&rsquo;re here to help you grow your family with a nourished body, a strong, clear mind, and a process that doesn&rsquo;t come with any extra stress.</h6>
                  </div>
                </div>
              </div>
              <div className="row mobile-view touria-quote-div">
                <div className="col-lg-1">
                  <img src="/img/”-1.webp" alt="" className="image-new" />
                </div>
                <div className="row">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-11">
                    <p className="it-is-so-effective-freeconsult mb-0">
                      It is so effective, so much theory and science simplified and applied into practice and such a transformational impact on my life.
                    </p>
                    <div className='d-flex flex-row justify-content-end align-items-center'>
                      <p className='touria-freeconsult m-0'>Touria</p>
                      <img src='./img/touria-freeconsult.webp' className='img-fluid ms-3' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {formStep.firstStep == true && (
            <div className="col-lg-7 step-1-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h5 className="lets-get-acquainted">Book a free 30-minute consultation</h5>
                    <p className="were-here-to-help-y mt-3">One of our dedicated doctors will work closely with you to identify your unique needs and create a personal fertility plan to help you <span>finally</span> conceive.</p>
                    <p className="were-here-to-help-y mt-2">You’ll walk away with actionable next steps to optimize your fertility, leaving you feeling empowered, informed, and supported on your journey to pregnancy.</p>
                  </div>
                </div>
                <div className="input-field-group mt-xxl-4">
                  <div className="row">
                    <div className="col-lg-5 form-group ps-0 email-div position-relative">
                      <label htmlFor="firstName" className="form-label fname1">First name</label>
                      <input type="text" name="firstName" id="fname-freeconsult" className={firstScreenDefaultStyles.firstName} placeholder="your first name" onChange={collectUserInfo} value={userInfo.firstName} />
                      {(firstScreenValidation.firstName !== "" && firstScreenPrestine.firstName === false) &&
                        (<>
                          <img src='./img/error.webp' alt='' className="error-exmlanation-freeconsult" />
                          <p className="consult-page-error mb-0">* {firstScreenValidation.firstName}</p>
                        </>)
                      }
                    </div>
                    <div className="col-lg-5 form-group ps-0 phone-div position-relative">
                      <label htmlFor="lastName" className="form-label fname1">Last name</label>
                      <input type="text" name="lastName" id="lname-freeconsult" className={firstScreenDefaultStyles.lastName} placeholder="your last name" onChange={collectUserInfo} value={userInfo.lastName} />
                      {(firstScreenValidation.lastName !== "" && firstScreenPrestine.lastName === false) &&
                        (<>
                          <img src='./img/error.webp' alt='' className="error-exmlanation-freeconsult" />
                          <p className="consult-page-error mb-0">* {firstScreenValidation.lastName}</p>
                        </>)
                      }
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                  <div className="row mt-lg-3">
                    <div className="col-lg-5 form-group ps-0 email-div position-relative">
                      <label htmlFor="email" className="form-label email1">Email</label>
                      <input type="email" name="email" id="email-freeconsult" onChange={collectUserInfo} className={firstScreenDefaultStyles.email} placeholder="your email" value={userInfo.email} />
                      {(firstScreenValidation.email !== "" && firstScreenPrestine.email === false) &&
                        (<>
                          <img src='./img/error.webp' alt='' className="error-exmlanation-freeconsult" />
                          <p className="consult-page-error mb-0">* {firstScreenValidation.email}</p>
                        </>)
                      }
                    </div>
                    <div className="col-lg-5 form-group ps-0 phone-div position-relative">
                      <label htmlFor="tphone" className="form-label cphone">Cell phone</label>
                      <input type="text" name="phone" id="tphone-freeconsult" onChange={collectUserInfo} className={firstScreenDefaultStyles.phone} placeholder="your phone number" value={userInfo.phone} />
                      {(firstScreenValidation.phone !== "" && firstScreenPrestine.phone === false) &&
                        (<>
                          <img src='./img/error.webp' alt='' className="error-exmlanation-freeconsult" />
                          <p className="consult-page-error mb-0">* {firstScreenValidation.phone}</p>
                        </>)
                      }
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                </div>
                <div className="row mt-4 mt-xl-2 mt-xxl-4 term-condition-consult-div">
                  <div className="col-lg-10 d-flex align-items-center px-0">
                    <input type="checkbox" name="flexCheckDefault" className={firstScreenDefaultStyles.agree} onChange={setIsAgreedToTerm} checked={userInfo.agree} />
                    <p className="term-condition-consult mb-0 ms-2">By continuing you are indicating you agree to our <Link href="/termscondn" ><a target="_blank" className="agree-to-terms-free">Terms for Service</a></Link></p>
                  </div>
                  {(firstScreenValidation.agree !== "" && firstScreenPrestine.agree === false) &&
                    (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.agree}</p></>)
                  }
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-5 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question shadow-none rounded-0" onClick={() => { forwardFormStep('first'); window.fbq('track', 'Contact') }}>NEXT</button>
                </div>
                <div className="col-lg-3 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('first')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow inactive" />
                  <div className="place-1 mt-0 inactive">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div >
          )}

          {formStep.secondStep == true && (
            <div className="col-lg-7 step-2-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-2-of-8">
                      STEP 2 OF 9
                    </h6>
                    <p className="were-here-to-help-y mt-3">
                      To book, begin filling out the form below. Once you hit “NEXT,” you’ll be guided through a few short questions that will allow us to learn more about where you’re at and how we can better serve you.
                    </p>
                    <h5 className="lets-get-acquainted mt-2">What&apos;s your current situation?</h5>
                    <p className="were-here-to-help-y mt-2">
                      Tell us about your situation &amp; struggles so we&apos;ll build a customised fertility journey that is most suitable for YOU.
                    </p>
                  </div>
                </div>
                <div className="input-field-group">
                  <div className="row mt-2">
                    <h6 className="button-heading p-0">How long have you been trying to get pregnant?</h6>
                    <div className="col-lg-3 col-12 mt-3 ps-0">
                      <input type="radio" id="radio1" value="less-than-one-year" name="tryingYear" className="selector-item_radio" onChange={setTryingDuration} checked={userInfo.tryingYear === 'less-than-one-year'} />
                      <label htmlFor="radio1" className="selector-item_label" >LESS THAN 1 YEAR</label>
                    </div>
                    <div className="col-lg-3 col-12 mt-3 ps-0">
                      <input type="radio" id="radio2" value="1-2-year" name="tryingYear" className="selector-item_radio" onChange={setTryingDuration} checked={userInfo.tryingYear === '1-2-year'} />
                      <label htmlFor="radio2" className="selector-item_label" >1-2 YEAR</label>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 ps-0">
                      <input type="radio" id="radio3" value="more-than-2-years" name="tryingYear" className="selector-item_radio" onChange={setTryingDuration} checked={userInfo.tryingYear === 'more-than-2-years'} />
                      <label htmlFor="radio3" className="selector-item_label" >MORE THAN 2 YEARS</label>
                    </div>
                    {(firstScreenValidation.trying !== "" && firstScreenPrestine.trying === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.trying}</p></>)
                    }
                  </div>
                  <div className="row mt-4">
                    <h6 className="textarea-heading p-0">Do you have any specific question/issues we can answer</h6>
                    <div className="col-lg-10 mt-3 ps-0">
                      <textarea className="form-control shadow-none rounded-0" id="textarea" rows="3" onChange={collectUserInfo} name="question" >{userInfo.question}</textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" onClick={() => forwardFormStep('second')}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('second')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.thirdStep == true && (
            <div className="col-lg-7 step-3-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-3-of-8">
                      STEP 3 OF 9
                    </h6>
                  </div>
                </div>
                <div className="input-field-group">
                  <div className="row mt-lg-5">
                    <h6 className="button-heading p-0">How urgent is your desire to get pregnant in the next 3 to 6 months</h6>
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio1" value="Very Urgent" name="howUrgent" className="selector-item_radio" onChange={setYourUgency} checked={userInfo.howUrgent === 'Very Urgent'} />
                      <label htmlFor="radio1" className="selector-item_label">Very Urgent</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio2" value="Urgent" name="howUrgent" className="selector-item_radio" onChange={setYourUgency} checked={userInfo.howUrgent === 'Urgent'} />
                      <label htmlFor="radio2" className="selector-item_label">Urgent</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio3" value="Important" name="howUrgent" className="selector-item_radio" onChange={setYourUgency} checked={userInfo.howUrgent === 'Important'} />
                      <label htmlFor="radio3" className="selector-item_label">Important</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio4" value="Not that urgent" name="howUrgent" className="selector-item_radio" onChange={setYourUgency} checked={userInfo.howUrgent === 'Not that urgent'} />
                      <label htmlFor="radio4" className="selector-item_label">Not that urgent</label>
                    </div>
                    {(firstScreenValidation.howUrgent !== "" && firstScreenPrestine.howUrgent === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.howUrgent}</p></>)
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" onClick={() => forwardFormStep('third')}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('third')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.fourthStep == true && (
            <div className="col-lg-7 step-4-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-4-of-8">
                      STEP 4 OF 9
                    </h6>
                  </div>
                </div>
                <div className="input-field-group">
                  <div className="row mt-lg-5">
                    <div className="col-lg-10 ps-0">
                      <h6 className="textarea-heading p-0">How big is the budget you have allocated to solve this problem?</h6>
                    </div>
                    <div className="col-lg-10 mt-3 ps-0">
                      <textarea className="form-control shadow-none rounded-0" id="textarea" rows="5" name="budgetAllocated" onChange={setBudgetAllocated}></textarea>
                    </div>
                    {(firstScreenValidation.budgetAllocated !== "" && firstScreenPrestine.budgetAllocated === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.budgetAllocated}</p></>)
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" onClick={() => forwardFormStep('fourth')}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('fourth')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.fifthStep == true && (
            <div className="col-lg-7 step-4-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-4-of-8">
                      STEP 5 OF 9
                    </h6>
                  </div>
                </div>
                <div className="input-field-group">
                  <div className="row mt-lg-4">
                    <div className="col-lg-5 form-group ps-0 email-div position-relative">
                      <label htmlFor="fname" className="form-label fname1">Your date of birth</label>
                      <input type="date" name="dateOfBirth" value={userInfo.dateOfBirth} id="fname-freeconsult" className={firstScreenDefaultStyles.dateOfBirth} placeholder="date of birth" onChange={setDateOfBirth} />
                      {(firstScreenValidation.dateOfBirth !== "" && firstScreenPrestine.dateOfBirth === false) &&
                        (<>
                          <p className="consult-page-error mb-0">* {firstScreenValidation.dateOfBirth}</p>
                        </>)
                      }
                    </div>
                    <div className="col-lg-5 form-group ps-0 phone-div position-relative">
                      <label htmlFor="fname" className="form-label fname1">Your place of birth</label>
                      <input type="text" name="placeOfBirth" value={userInfo.placeOfBirth} id="fname-freeconsult" className={firstScreenDefaultStyles.placeOfBirth} placeholder="place of birth" onChange={setPlaceOfBirth} />
                      {(firstScreenValidation.placeOfBirth !== "" && firstScreenPrestine.placeOfBirth === false) &&
                        (<>
                          <img src='./img/error.webp' alt='' className="error-exmlanation-freeconsult" />
                          <p className="consult-page-error mb-0">* {firstScreenValidation.placeOfBirth}</p>
                        </>)
                      }
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                  <div className="row mt-4">
                    <h6 className="button-heading p-0">Which of the following best describes your marital status?</h6>
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio1" value="Single" name="maritalStatus" className="selector-item_radio" onChange={setMaritalStatus} checked={userInfo.maritalStatus === 'Single'} />
                      <label htmlFor="radio1" className="selector-item_label" >Single</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio2" value="Married/Domestic parnership" name="maritalStatus" className="selector-item_radio" onChange={setMaritalStatus} checked={userInfo.maritalStatus === 'Married/Domestic parnership'} />
                      <label htmlFor="radio2" className="selector-item_label">Married/Domestic partnership</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio3" value="Divorced" name="maritalStatus" className="selector-item_radio" onChange={setMaritalStatus} checked={userInfo.maritalStatus === 'Divorced'} />
                      <label htmlFor="radio3" className="selector-item_label">Divorced</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio4" value="Widowed" name="maritalStatus" className="selector-item_radio" onChange={setMaritalStatus} checked={userInfo.maritalStatus === 'Widowed'} />
                      <label htmlFor="radio4" className="selector-item_label">Widowed</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio5" value="Prefer not to answer" name="maritalStatus" className="selector-item_radio" onChange={setMaritalStatus} checked={userInfo.maritalStatus === 'Prefer not to answer'} />
                      <label htmlFor="radio5" className="selector-item_label">Prefer not to answer</label>
                    </div>
                    {(firstScreenValidation.maritalStatus !== "" && firstScreenPrestine.maritalStatus === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.maritalStatus}</p></>)
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" onClick={() => forwardFormStep('fifth')}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('fifth')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.sixthStep == true && (
            <div className="col-lg-7 step-5-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-5-of-8">
                      STEP 6 OF 9
                    </h6>
                  </div>
                </div>
                <div className="input-field-group mt-lg-4">
                  <div className="row">
                    <div className="col-lg-10 ps-0">
                      <h6 className="button-heading p-0">What steps, if any, have you taken to start preparing for getting pregnant? Select all that apply</h6>
                    </div>
                    <div className="col-lg-6 col-12 mt-3 ps-0">
                      <input type="checkbox" id="radio1" value="Researched vitamin supplements" name="stepForGettingPreg[]" className="selector-item_radio" onChange={setStepForGettingPreg} checked={pregSteps.indexOf('Researched vitamin supplements') >= 0} />
                      <label htmlFor="radio1" className="selector-item_label">Researched vitamin supplements</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 mt-3 ps-0">
                      <input type="checkbox" id="radio2" value="Researched fertility treatments" name="stepForGettingPreg[]" className="selector-item_radio" onChange={setStepForGettingPreg} checked={pregSteps.indexOf('Researched fertility treatments') >= 0} />
                      <label htmlFor="radio2" className="selector-item_label">Researched fertility treatments</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 mt-3 ps-0">
                      <input type="checkbox" id="radio3" value="Researched dietary guidelines" name="stepForGettingPreg[]" className="selector-item_radio" onChange={setStepForGettingPreg} checked={pregSteps.indexOf('Researched dietary guidelines') >= 0} />
                      <label htmlFor="radio3" className="selector-item_label">Researched dietary guidelines</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 mt-3 ps-0">
                      <input type="checkbox" id="radio4" value="Participated in fertility coaching" name="stepForGettingPreg[]" className="selector-item_radio" onChange={setStepForGettingPreg} checked={pregSteps.indexOf('Participated in fertility coaching') >= 0} />
                      <label htmlFor="radio4" className="selector-item_label">Participated in fertility coaching</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 mt-3 ps-0">
                      <input type="checkbox" id="radio5" value="Tried IVF treatments" name="stepForGettingPreg[]" className="selector-item_radio" onChange={setStepForGettingPreg} checked={pregSteps.indexOf('Tried IVF treatments') >= 0} />
                      <label htmlFor="radio5" className="selector-item_label">Tried IVF treatments</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 mt-3 ps-0">
                      <input type="checkbox" id="radio6" value="Spoke with a doctor about fertility treatments" name="stepForGettingPreg[]" className="selector-item_radio" onChange={setStepForGettingPreg} checked={pregSteps.indexOf('Spoke with a doctor about fertility treatments') >= 0} />
                      <label htmlFor="radio6" className="selector-item_label">Spoke with a doctor about fertility treatments</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 mt-3 ps-0">
                      <input type="checkbox" id="radio7" value="None of the above" name="stepForGettingPreg[]" className="selector-item_radio" onChange={setStepForGettingPreg} checked={pregSteps.indexOf('None of the above') >= 0} />
                      <label htmlFor="radio7" className="selector-item_label">None of the above</label>
                    </div>
                    {(firstScreenValidation.stepForGettingPreg !== "" && firstScreenPrestine.stepForGettingPreg === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.stepForGettingPreg}</p></>)
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" onClick={() => forwardFormStep('sixth')}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('sixth')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.seventhStep == true && (
            <div className="col-lg-7 step-6-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-6-of-8">
                      STEP 7 OF 9
                    </h6>
                  </div>
                </div>
                <div className="input-field-group">
                  <div className="row mt-lg-5">
                    <h6 className="button-heading p-0">What’s your current household income?</h6>
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio1" value="35000" name="householdIncome" className="selector-item_radio" onChange={setHouseholdIncome} checked={userInfo.householdIncome === '35000'} />
                      <label htmlFor="radio1" className="selector-item_label">$35,000 or less</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio2" value="35000 to 55000" name="householdIncome" className="selector-item_radio" onChange={setHouseholdIncome} checked={userInfo.householdIncome === '35000 to 55000'} />
                      <label htmlFor="radio2" className="selector-item_label">$35,000 to $55,000</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio3" value="55000 to 85000" name="householdIncome" className="selector-item_radio" onChange={setHouseholdIncome} checked={userInfo.householdIncome === '55000 to 85000'} />
                      <label htmlFor="radio3" className="selector-item_label">$55,000 to $85,000</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio4" value="85000 to 105000" name="householdIncome" className="selector-item_radio" onChange={setHouseholdIncome} checked={userInfo.householdIncome === '85000 to 105000'} />
                      <label htmlFor="radio4" className="selector-item_label">$85,000 to $105,000</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio5" value="105000 to 250000" name="householdIncome" className="selector-item_radio" onChange={setHouseholdIncome} checked={userInfo.householdIncome === '105000 to 250000'} />
                      <label htmlFor="radio5" className="selector-item_label">$105,000 to $250,000</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-12 mt-3 ps-0">
                      <input type="radio" id="radio6" value="250000 and up" name="householdIncome" className="selector-item_radio" onChange={setHouseholdIncome} checked={userInfo.householdIncome === '250000 and up'} />
                      <label htmlFor="radio6" className="selector-item_label">$250,000 and up</label>
                    </div>
                    {(firstScreenValidation.householdIncome !== "" && firstScreenPrestine.householdIncome === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.householdIncome}</p></>)
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" onClick={() => forwardFormStep('seventh')}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('seventh')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.eighthStep == true && (
            <div className="col-lg-7 step-7-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-7-of-8">
                      STEP 8 OF 9
                    </h6>
                  </div>
                </div>
                <div className="input-field-group">
                  <div className="row mt-lg-5">
                    <div className="col-lg-10 ps-0">
                      <h6 className="textarea-heading p-0">In your own personal journey to get pregnant, what are some things (if any) that you have found frustrating, difficult, or confusing?</h6>
                    </div>
                    <div className="col-lg-10 mt-3 ps-0">
                      <textarea className="form-control shadow-none rounded-0" id="textarea" rows="5" name="difficultReason" onChange={setDifficultReason}></textarea>
                    </div>
                    {(firstScreenValidation.difficultReason !== "" && firstScreenPrestine.difficultReason === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.difficultReason}</p></>)
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" onClick={() => forwardFormStep('eighth')}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('eighth')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.ninthStep == true && (
            <div className="col-lg-7 step-8-of-8-sec d-flex flex-column justify-content-between">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div>
                <div className="row">
                  <div className="col-lg-10 p-0">
                    <h6 className="step-8-of-8">
                      STEP 9 OF 9
                    </h6>
                  </div>
                </div>
                <div className="input-field-group">
                  <div className="row mt-lg-5">
                    <div className="col-lg-10 ps-0">
                      <h6 className="textarea-heading p-0">What is your biggest concern while you try to get pregnant?</h6>
                    </div>
                    <div className="col-lg-10 mt-3 ps-0">
                      <textarea className="form-control shadow-none rounded-0" id="textarea" rows="5" name="biggestConcern" onChange={setBiggestConcern}>{userInfo.biggestConcern}</textarea>
                    </div>
                    {(firstScreenValidation.biggestConcern !== "" && firstScreenPrestine.biggestConcern === false) &&
                      (<><p className="consult-page-error mb-0 ps-0">* {firstScreenValidation.biggestConcern}</p></>)
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 order-lg-2 ps-0">
                  <button className="btn btn-danger next-question-2 shadow-none rounded-0" id="submitApplication" onClick={() => { window.fbq('track', 'SubmitApplication'); forwardFormStep('ninth') }}>NEXT QUESTION</button>
                </div>
                <div className="col-lg-4 order-lg-1"></div>
                <div className="col-lg-2 p-0 col-3 order-lg-0" onClick={() => backwardFormStep('ninth')}>
                  <img src="/img/back-arrow.webp" alt="" className="back-arrow" />
                  <div className="place-1 mt-0">BACK</div>
                </div>
                <div className="col-lg-2 order-lg-3"></div>
              </div>
            </div>
          )}

          {formStep.tenthStep == true && (
            <div className="col-lg-7 thank-you-sec">
              <img src="/img/graphs.png" className="circulation desktop-view-checkout" />
              <img src="/img/Circulation-1.webp" className="circulation mobile-view-checkout m-0" />
              <div className="row">
                <div className="col-lg-10 p-0">
                  <h6 className="thank-you">
                    THANK YOU!
                  </h6>
                </div>
              </div>
              <div className="row">
                <img src="/img/Growth.webp" className="grow p-0" />
                <h1 className="your-fertility-journey mt-4 p-0">Your fertility journey<br />is about to begin!</h1>
                <div className="col-lg-9 p-0">
                  <p className="were-here-to-help-y mt-4">Congratulations on starting a new chapter of your pregnancy story!</p>
                  <p className="were-here-to-help-y mt-4">Please check your email for booking confirmation.</p>
                  <p className="were-here-to-help-y mt-5">Our expert will connect with you at the time you have booked and will answer any questions you might have.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
