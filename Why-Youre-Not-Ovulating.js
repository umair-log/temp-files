import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function BlogpostAnovulation(props) {
    const pageRedirect = () => {
        window.location.href = './freeconsult'
    }

    return (
        <>
            <Head>
                <title>Why You're Not Ovulating — And What You Can Do About It | Fertility Avenues</title>
                <meta name="description" content="Discover the common causes of anovulation and natural solutions to restore ovulation through hormone balance, stress reduction, and targeted nutrition." />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

                <script dangerouslySetInnerHTML=
                    {{
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
                        fbq('track', 'PageView');`
                    }}
                />
                <noscript>
                    <img height="1" width="1" src="https://www.facebook.com/tr?id=722676669519092&ev=PageView&noscript=1" />
                </noscript>
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>

            <div className="container mt-5 pt-4">
                <div className="row mt-5 justify-content-between">
                    <div className="col-lg-7 container-height">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src="/img/pink-line-smallest.webp" />
                                <p className="date mb-0">June 04, 2025</p>

                            </div>
                            <p className="tym-to-read mb-0">6 min read</p>
                            <div className="d-flex justify-content-between mobile-view-blogpost">
                                <Link href="https://m.facebook.com/fertilityavenues/">
                                    <a target="_blank">
                                        <FaFacebookSquare className='social-icon' />
                                    </a>
                                </Link>
                                <Link href="https://twitter.com/fertilityave/">
                                    <a target="_blank">
                                        <FaTwitterSquare className='social-icon' />
                                    </a>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCYEJYJv8hYvrnV5y1nvWT-g/">
                                    <a target="_blank">
                                        <FaYoutubeSquare className='social-icon' />
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/fertilityavenues/">
                                    <a target="_blank">
                                        <FaInstagramSquare className='social-icon' />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="d-none desktop-view-blogpost my-3">
                            <Link href="https://m.facebook.com/fertilityavenues/">
                                <a target="_blank">
                                    <FaFacebookSquare className='social-icon' />
                                </a>
                            </Link>
                            <Link href="https://twitter.com/fertilityave/">
                                <a target="_blank">
                                    <FaTwitterSquare className='social-icon' />
                                </a>
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCYEJYJv8hYvrnV5y1nvWT-g/">
                                <a target="_blank">
                                    <FaYoutubeSquare className='social-icon' />
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/fertilityavenues/">
                                <a target="_blank">
                                    <FaInstagramSquare className='social-icon' />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <h1 className="how-to-increase mt-3 mb-0">Why You're Not Ovulating — And What You Can Do About It</h1>
                            <img className="img-fluid my-2" src="/img/blogpost-ovulation/hero-image.png" alt="Woman tracking ovulation with confused expression" />
                            <div className="custom-border-blogpost mt-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="para-blog-single-page table-of-content mb-0">Table of Contents</p>
                                    <button type="button" className='btn shadow-none hamburg-btn ms-3' data-bs-toggle="collapse" data-bs-target="#ovulation-sections">
                                        <img src="/img/hamburg.svg" alt="" />
                                    </button>
                                </div>
                                <div id="ovulation-sections" className="collapse show">
                                    <li className="list-group-item py-0">
                                        <a href='#introduction'>Introduction</a><br/>
                                    </li>
                                    <li className="list-group-item py-0"><a href="#what-is-ovulation">What Is Ovulation (and Why It Matters)?</a></li>
                                    <li className="list-group-item py-0"><a href="#causes">Common Causes of Anovulation</a>
                                        <ol className="list-group list-group-numbered py-0 ps-0">
                                            <li className="list-group-item py-0"><a href='#stress'>Stress and Nervous System Overload</a></li>
                                            <li className="list-group-item py-0"><a href='#post-birth-control'>Post-Birth Control Syndrome</a></li>
                                            <li className="list-group-item py-0"><a href='#pcos'>PCOS and Hormonal Imbalance</a></li>
                                            <li className="list-group-item py-0"><a href='#hypothalamic'>Hypothalamic Amenorrhea (HA)</a></li>
                                            <li className="list-group-item py-0"><a href='#thyroid'>Thyroid or Prolactin Issues</a></li>
                                        </ol>
                                    </li>
                                    <li className="list-group-item py-0"><a href='#real-story'>Real Story: Emma</a></li>
                                    <li className="list-group-item py-0"><a href='#take-action'>What You Can Do Right Now</a></li>
                                    <li className="list-group-item py-0"><a href='#conclusion'>Conclusion</a></li>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="introduction">Introduction
                            <p className="para-blog-single-page mt-2">You're tracking your cycle, testing for LH surges, watching for signs of ovulation—yet your tests stay negative, or the signs are confusing. Month after month, no ovulation.</p>
                            <p className="para-blog-single-page">If this is your reality, you're not alone.</p>
                            <p className="para-blog-single-page">Not ovulating (also called anovulation) is one of the most common causes of infertility—but also one of the most misunderstood. Ovulation is a vital sign of overall health. When it's not happening, your body isn't failing—it's signaling.</p>
                            <p className="para-blog-single-page">Let's decode the message and map a path forward.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="what-is-ovulation">What Is Ovulation (and Why It Matters)?
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/ovulation-process.png" alt="Diagram of ovulation process" />
                            <p className="para-blog-single-page">Ovulation is when your body releases a mature egg from the ovary. Without it:</p>
                            <ul className="para-blog-single-page">
                                <li>There's no egg to fertilize</li>
                                <li>Your body can't produce sufficient progesterone</li>
                                <li>Your cycle may become irregular or disappear altogether</li>
                            </ul>
                            <p className="para-blog-single-page">Regular ovulation is a key sign of hormonal health—and a necessary part of natural conception.</p>
                        </li>
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="causes">Common Causes of Anovulation
                            <p className="para-blog-single-page">Not ovulating can happen for a variety of reasons. The most common ones we see include:</p>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="stress">1. Stress and Nervous System Overload
                                {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/stress.png" alt="Stress affecting ovulation" /> */}
                                <p className="para-blog-single-page">High cortisol from emotional, physical, or environmental stress can shut down the ovulatory process.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Nervous system regulation (breathwork, vagus nerve exercises)</li>
                                    <li>Gentle daily routines</li>
                                    <li>Trauma-informed support</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="post-birth-control">2. Post-Birth Control Syndrome
                                {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/birth-control.png" alt="Birth control pills and ovulation" /> */}
                                <p className="para-blog-single-page">After years on hormonal birth control, your body may need time and support to restore its natural rhythm. Ovulation can take months to return—or be irregular when it does.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Replenishing nutrient deficiencies (B6, magnesium, zinc)</li>
                                    <li>Restoring natural hormone signaling with herbs and seed cycling</li>
                                    <li>Supporting liver detox pathways</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="pcos">3. PCOS and Hormonal Imbalance
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/pcos.png" alt="PCOS and ovulation issues" />
                                <p className="para-blog-single-page">With PCOS, your body may develop multiple follicles—but not release an egg.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Regulating insulin and blood sugar</li>
                                    <li>Reducing inflammation</li>
                                    <li>Supporting LH/FSH balance naturally</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="hypothalamic">4. Hypothalamic Amenorrhea (HA)
                                {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/ha.png" alt="Hypothalamic amenorrhea explained" /> */}
                                <p className="para-blog-single-page">This is common in women who are underweight, over-exercising, or highly stressed. Your brain simply stops signaling your ovaries to release an egg.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Eating more (especially fats and carbs)</li>
                                    <li>Reducing intense exercise</li>
                                    <li>Prioritizing deep rest</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="thyroid">5. Thyroid or Prolactin Issues
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/thyroid.png" alt="Thyroid health and ovulation" />
                                <p className="para-blog-single-page">Thyroid imbalances or high prolactin can disrupt ovulation.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Comprehensive hormone panels (not just TSH)</li>
                                    <li>Nutritional support for thyroid health</li>
                                    <li>Professional guidance to restore balance</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="real-story">Real Story: Emma
                            {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/success.png" alt="Success story of restoring ovulation" /> */}
                            <p className="para-blog-single-page">Emma came off birth control after 15 years. Her period didn't return. Months passed—still no ovulation. She tried herbs, diets, and ovulation strips—nothing worked.</p>
                            <p className="para-blog-single-page">After a personalized protocol that addressed nutrient deficiencies, liver support, emotional stress, and hormonal reactivation, Emma ovulated naturally for the first time in years.</p>
                            <p className="para-blog-single-page">Ovulation is not just about timing—it's about safety. Your body needs to feel safe, nourished, and supported.</p>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="take-action">What You Can Do Right Now
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/action.png" alt="Action steps for restoring ovulation" />
                            <p className="para-blog-single-page">If you're not ovulating:</p>
                            <ul className="para-blog-single-page">
                                <li>Don't panic — Your body is adaptable and responsive.</li>
                                <li>Track more than LH — Watch basal body temp, cervical mucus, and energy shifts.</li>
                                <li>Nourish your system — Eat, rest, and move gently.</li>
                                <li>Get personalized support — Cookie-cutter solutions don't work for everyone.</li>
                            </ul>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="conclusion">Conclusion
                            {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-ovulation/hope.png" alt="Hopeful message about restoring ovulation" /> */}
                            <p className="para-blog-single-page">Your body isn't broken—it's speaking. The absence of ovulation is an invitation to slow down, look deeper, and offer support where it's most needed.</p>
                            <p className="para-blog-single-page">There is a path to ovulation—and to pregnancy—that begins with understanding.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 get-free-consultation-blogpost-div text-center is-sticky">
                        <img className="img-fluid" src="/img/couple.webp" alt="Couple seeking fertility help" />
                        <h2 className="start-your-fertility-journey-heading my-3">Start your fertility journey with us</h2>
                        <p className="join-our-self-care-program-text">Join our self-care program to boost your fertility &amp; get pregnant from the comfort of your home.</p>
                        <Link href="/freeconsult"><button className="btn shadow-none rounded-0 mt-2 mb-3 get-free-consultation-btn">GET FREE CONSULTATION</button></Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row rectangle-20">
                    <div className="col-lg-1">
                        <img src="/img/Group 80.webp" className="img-fluid group-80" alt="Decorative element" />
                    </div>
                    <div className="col-lg-3 col-10 jonathan-borba-div">
                        <img src="/img/jonathan-borba.webp" className="jonathan-borba img-fluid" alt="Happy couple" />
                    </div>
                    <div className="col-lg-5 col-10 ps-lg-5 ms-lg-5 jonathan-borba-text-div">
                        <h2 className="heading-blog-single-page">Start Your<br />Fertility Journey</h2>
                        <p className="para-sec3 ps-lg-5 mt-4">Join our self-care program to boost your fertility &amp; get pregnant from the comfort of your home.</p>
                        <Link href="/freeconsult"><button className="btn consultation-blog-listing-page rounded-0 shadow-none mt-4" onClick={pageRedirect}>GET FREE CONSULTATION</button></Link>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-1">
                        <img src="/img/flow-blog-listing.webp" className="img-fluid flow-blog-listing" alt="Decorative element" />
                    </div>
                </div>
            </div>

            <div className="container featured-articles-sec">
                <div className="row mt-md-5 m-0 p-0">
                    <Link href="/Unexplained-Infertility">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-unexplained/hero-image.png" className="img-fluid w-100" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">May 21, 2025</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">Unexplained Infertility — Why It's More Common Than You Think | Fertility Avenues</p>
                        </div>
                    </Link>
                    
                    <Link href="/pcos-and-pregnancy">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="img/blogpost-pcos/hero-image.png" className="img-fluid w-100" alt="Pregnancy Detox" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">May 29, 2025</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">PCOS and Pregnancy — A Holistic Path When Nothing Else Works</p>
                        </div>
                    </Link>

                    <Link href="/unborn-baby">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-5/joy-new.png" className="img-fluid w-100" alt="Stress and unborn baby" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">July 03, 2023</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">Am I Stressing Out My Unborn Baby?</p>
                        </div>
                    </Link>                    
                </div>
            </div>
        </>
    )
}