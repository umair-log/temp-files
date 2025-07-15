import React, { useState, useEffect } from "react";
import Link from 'next/link';
import 'aos/dist/aos.css';
import AOS from 'aos';
import axios from 'axios';
import nextConfig from '../next.config';

function Footer() {
    const [currentYear , setCurrentYear] = useState();
    const getYear = () =>  setCurrentYear(new Date().getFullYear())
    useEffect(() => {
        (async () => {
            try {
                AOS.init({ duration: 1500 });
            }
            catch (error) {
                console.log(error);
            }
        })();
        getYear();
    }, [])
    const [showConfirm, setShowConfirm] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [emailValidMsg, setEmailValidMsg] = useState("");
    const [toolkitInputClassname, SetToolkitInoutClassname] = useState("form-control shadow-none type-your-email2 rounded-0");
    const [emailValue, setEmail] = useState("");

    // const toolkitFormSubmit = (e) => {
    //     e.preventDefault();
    //     var validateMessage = "";
    //     var toolkitEmailInputClass = "";
    //     var mailformat =nextConfig.env.EMAIL_FORMAT;
    //     if (emailValue.trim() === "") {
    //         validateMessage = "Your email address is required";
    //         toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 error-border"
    //     } else if (!emailValue.match(mailformat)) {
    //         validateMessage = "Invalid email address";
    //         toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 error-border"
    //     } else {
    //         validateMessage = "";
    //         toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 "
    //         setShowForm(false);
    //         setShowConfirm(true);
    //         const data = {
    //             email: emailValue,
    //             type: "toolkit",
    //             status: 'complete',
    //             tagName: 'Lead Magnet_Fertility'
    //         };
    //         axios.post(`/api/users`, data).then((res) => {
    //             if (res.status == "201") {
    //                 console.log(res);
    //             }
    //         }).catch((errorResp) => {
    //             console.log(errorResp);
    //         });
    //     }
    //     setEmailValidMsg(validateMessage);
    //     SetToolkitInoutClassname(toolkitEmailInputClass);
    // }

    const toolkitFormSubmit = (e) => {
        e.preventDefault();
        var validateMessage = "";
        var toolkitEmailInputClass = "";
        var mailformat = nextConfig.env.EMAIL_FORMAT;
        
        if (emailValue.trim() === "") {
            validateMessage = "Your email address is required";
            toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 error-border"
        } else if (!emailValue.match(mailformat)) {
            validateMessage = "Invalid email address";
            toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 error-border"
        } else {
            validateMessage = "";
            toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 "
            setShowForm(false);
            setShowConfirm(true);
            
            // GTM dataLayer push
            if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "tool_kit_form_submit",
                    email: emailValue,
                    first_name: "", // Not collected in current form
                    last_name: ""   // Not collected in current form
                });
            }
    
            const data = {
                email: emailValue,
                type: "toolkit",
                status: 'complete',
                tagName: 'Lead Magnet_Fertility'
            };
            
            axios.post(`/api/users`, data).then((res) => {
                if (res.status == "201") {
                    console.log(res);
                }
            }).catch((errorResp) => {
                console.log(errorResp);
            });
        }
        
        setEmailValidMsg(validateMessage);
        SetToolkitInoutClassname(toolkitEmailInputClass);
    }

    const setYourEmail = (e) => {
        const emailVal = e.target.value;
        setEmail(e.target.value)
        var validateMessage = "";
        var toolkitEmailInputClass = "";
        var mailformat = nextConfig.env.EMAIL_FORMAT;
        if (emailVal.trim() === "") {
            validateMessage = "Your email address is required";
            toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 error-border"
        } else if (!emailVal.match(mailformat)) {
            validateMessage = "Invalid email address";
            toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 error-border"
        } else {
            validateMessage = "";
            toolkitEmailInputClass = "form-control shadow-none type-your-email2 rounded-0 "
        }
        setEmailValidMsg(validateMessage);
        SetToolkitInoutClassname(toolkitEmailInputClass);
    }

    return (
        <>
            <div className="container footer-custom" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-once="true">
                <div className="row rectangle-19 pb-5">
                    <div className="fertility-book col-lg-5  d-flex justify-content-lg-center">
                        <img src="/img/book-bg.webp" alt="" className="book-bg" />
                    </div>
                    <div className="col-lg-7 col-10 d-flex flex-column justify-content-around toolkit-div">
                        <h3 className="grab-your-free-toolkit">Want to improve your fertility right now?</h3>
                        <p className="enter-your-email-to">Grab the free tool kit that’s helped over 1,000 women ease into motherhood.</p>
                        {showForm && (
                            <form onSubmit={toolkitFormSubmit} >
                                <div className="row mb-lg-5">
                                    <div className="col-lg-6 position-relative">
                                        <input type="email" name="email" id="email" className={toolkitInputClassname} placeholder="type your email" onChange={setYourEmail} />
                                        {
                                            emailValidMsg !== "" && (
                                                <>
                                                    <img src='./img/error.webp' alt='' className="error-exmlanation-footer" />
                                                    <p className="footer-error mb-0">* {emailValidMsg}</p>
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="col-lg-6">
                                        <button className="rounded-0 grab-your-free-stuff">SEND ME THE TOOL KIT</button>
                                    </div>
                                </div>
                            </form>
                        )
                        }
                        {showConfirm && (
                            <p className="email-success-msg mb-lg-5"><img src="/img/black-tick.webp" alt="" className="black-tick" /> Congratulations on downloading our kit! Please check your email or spam folder for an email from Fertilityavenues</p>)
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 footer-logo-div">
                            <img src="/img/footer-logo.webp" alt="" className="footer-logo" />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-end logo-copyright">
                                <div className="icon-group">
                                    <Link href="https://m.facebook.com/fertilityavenues/">
                                        <a target="_blank">
                                            <img src="/img/facebook.webp" alt="" className="facebook" />
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/fertilityavenues/">
                                        <a target="_blank">
                                            <img src="/img/instagram.webp" alt="" className="instagram ms-3" />
                                        </a>
                                    </Link>
                                    <Link href="https://twitter.com/fertilityave/">
                                        <a target="_blank">
                                            <img src="/img/twitter.webp" alt="" className="twitter ms-3" />
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCYEJYJv8hYvrnV5y1nvWT-g/">
                                        <a target="_blank">
                                            <img src="/img/youtube.webp" alt="" className="youtube ms-3" />
                                        </a>
                                    </Link>
                                </div>
                                <img src="/img/white-vertical-line.webp" alt="" className="white-vertical-line" />
                                <p className="copyright-text">All rights reserved (c) {currentYear}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer