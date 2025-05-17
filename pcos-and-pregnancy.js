import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function BlogpostPCOS(props) {
    const pageRedirect = () => {
        window.location.href = './freeconsult'
    }

    return (
        <>
            <Head>
                <title>PCOS and Pregnancy — A Holistic Path | Fertility Avenues</title>
                <meta name="description" content="Discover a holistic approach to getting pregnant with PCOS when conventional treatments fail. Learn about blood sugar balance, inflammation reduction, and natural hormone regulation." />
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
                                <p className="date mb-0">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                            <p className="tym-to-read mb-0">8 min read</p>
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
                            <h1 className="how-to-increase mt-3 mb-0">PCOS and Pregnancy — A Holistic Path When Nothing Else Works</h1>
                            <img className="img-fluid my-2" src="/img/blogpost-pcos/hero-image.png" alt="Woman holding hands over abdomen representing PCOS and pregnancy journey" />
                            <div className="custom-border-blogpost mt-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="para-blog-single-page table-of-content mb-0">Table of Contents</p>
                                    <button type="button" className='btn shadow-none hamburg-btn ms-3' data-bs-toggle="collapse" data-bs-target="#pcos-sections">
                                        <img src="/img/hamburg.svg" alt="" />
                                    </button>
                                </div>
                                <div id="pcos-sections" className="collapse show">
                                    <li className="list-group-item py-0">
                                        <a href='#introduction'>Introduction</a><br/>
                                    </li>
                                    <li className="list-group-item py-0"><a href="#what-is-pcos">What Is PCOS, Really?</a></li>
                                    <li className="list-group-item py-0"><a href="#conventional-treatments">Why Conventional Treatments Often Fall Short</a></li>
                                    <li className="list-group-item py-0"><a href="#holistic-roadmap">A Holistic Roadmap to Pregnancy with PCOS</a>
                                        <ol className="list-group list-group-numbered py-0 ps-0">
                                            <li className="list-group-item py-0"><a href='#stabilize-blood-sugar'>Stabilize Blood Sugar</a></li>
                                            <li className="list-group-item py-0"><a href='#lower-inflammation'>Lower Inflammation</a></li>
                                            <li className="list-group-item py-0"><a href='#regulate-hormones'>Regulate Hormones Naturally</a></li>
                                            <li className="list-group-item py-0"><a href='#heal-nervous-system'>Heal the Nervous System</a></li>
                                        </ol>
                                    </li>
                                    <li className="list-group-item py-0"><a href='#client-example'>Real Client Example</a></li>
                                    <li className="list-group-item py-0"><a href='#conclusion'>Conclusion</a></li>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="introduction">Introduction
                            <p className="para-blog-single-page mt-2">If you've been diagnosed with PCOS and are trying to get pregnant, you've probably been given a checklist: lose weight, take medication, wait and see. And when that doesn't work? It can feel like your body is failing you.</p>
                            <p className="para-blog-single-page">But your body isn't broken. It's just calling for deeper healing.</p>
                            <p className="para-blog-single-page">There is a holistic path to pregnancy with PCOS—one that doesn't rely on hope alone, but on understanding, support, and step-by-step guidance.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="what-is-pcos">What Is PCOS, Really?
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/pcos-explained.png" alt="Diagram explaining PCOS symptoms and effects" />
                            <p className="para-blog-single-page">Polycystic Ovary Syndrome (PCOS) is more than just a reproductive condition. It's a complex hormonal and metabolic imbalance that affects:</p>
                            <ul className="para-blog-single-page">
                                <li>Ovulation</li>
                                <li>Insulin sensitivity</li>
                                <li>Inflammation</li>
                                <li>Emotional well-being</li>
                            </ul>
                            <p className="para-blog-single-page">While not all PCOS looks the same, many women experience:</p>
                            <ul className="para-blog-single-page">
                                <li>Irregular or missing periods</li>
                                <li>Acne or hair growth</li>
                                <li>Weight gain or difficulty losing weight</li>
                                <li>Ovarian cysts or immature follicles</li>
                            </ul>
                            <p className="para-blog-single-page">But here's what's often missed: PCOS is not a life sentence. It's a condition that can be managed, nourished, and healed—especially when approached holistically.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="conventional-treatments">Why Conventional Treatments Often Fall Short
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/conventional-treatments.png" alt="Pills and medical treatments for PCOS" />
                            <p className="para-blog-single-page">Most women with PCOS are offered birth control to "regulate" their cycle or medications like Metformin to manage insulin resistance. But these don't solve the root issue.</p>
                            <p className="para-blog-single-page">They may mask symptoms... But they rarely restore ovulation or improve egg quality long term.</p>
                            <p className="para-blog-single-page">Many of our clients came to us after years of medications, frustration, and failed treatments—still not pregnant, and more disconnected from their bodies than ever.</p>
                        </li>
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="holistic-roadmap">A Holistic Roadmap to Pregnancy with PCOS
                            <p className="para-blog-single-page">Let's walk through what does work when you address PCOS at the root:</p>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="stabilize-blood-sugar">1. Stabilize Blood Sugar
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/blood-sugar.jpeg" alt="Healthy foods that help stabilize blood sugar" />
                                <p className="para-blog-single-page">Insulin resistance is a key driver of PCOS symptoms—and ovulation issues.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Balanced meals with protein, fat, and fiber</li>
                                    <li>Reducing refined carbs and sugar</li>
                                    <li>Gentle, regular movement (like walking or fertility yoga)</li>
                                    <li>Supplements like inositol, magnesium, and chromium</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="lower-inflammation">2. Lower Inflammation
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/inflammation.jpeg" alt="Anti-inflammatory foods for PCOS" />
                                <p className="para-blog-single-page">PCOS is often an inflammatory condition. This makes it harder for eggs to mature, for cycles to stabilize, and for implantation to succeed.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Anti-inflammatory diet (leafy greens, berries, omega-3 fats)</li>
                                    <li>Gut health support (probiotics, prebiotic foods)</li>
                                    <li>Removing inflammatory triggers like gluten or dairy (case-by-case)</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="regulate-hormones">3. Regulate Hormones Naturally
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/hormones.jpeg" alt="Natural ways to balance hormones with PCOS" />
                                <p className="para-blog-single-page">Your body has an innate rhythm—but with PCOS, that rhythm often gets interrupted. We support it by:</p>
                                <ul className="para-blog-single-page">
                                    <li>Using seed cycling and herbal blends (like Vitex)</li>
                                    <li>Supporting adrenals and thyroid</li>
                                    <li>Tracking cycle signs instead of relying solely on ovulation strips</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="heal-nervous-system">4. Heal the Nervous System
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/stress.jpeg" alt="Stress reduction techniques for PCOS" />
                                <p className="para-blog-single-page">Chronic stress, medical trauma, and body shame can all contribute to hormone disruption.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Breathwork and nervous system regulation</li>
                                    <li>Journaling and emotional release</li>
                                    <li>Feeling seen and supported by a community that understands</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="client-example">Real Client Example: Mariana
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/success-story.jpeg" alt="Success story of woman with PCOS" />
                            <p className="para-blog-single-page">Mariana, 20, came to us after two early miscarriages, irregular periods, and a PCOS diagnosis. She was active (doing Zumba and cardio), but her cycle was unpredictable and ovulation inconsistent.</p>
                            <p className="para-blog-single-page">Through a personalized plan including nutrition, Vitex, adrenal support, and stress reduction, her cycles became regular—and she began ovulating consistently.</p>
                            <p className="para-blog-single-page">She's now preparing for pregnancy, feeling more empowered than ever.</p>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="conclusion">Conclusion
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-pcos/hope.jpeg" alt="Hopeful image for PCOS pregnancy journey" />
                            <p className="para-blog-single-page">You Are Not Alone</p>
                            <p className="para-blog-single-page">If you've been told PCOS makes pregnancy impossible—or if you've been blamed for not doing enough—you're not alone. And you're not at fault.</p>
                            <p className="para-blog-single-page">There is a way forward that doesn't rely on pills, pressure, or perfection.</p>
                            <p className="para-blog-single-page">PCOS doesn't mean you can't get pregnant. It means your body needs a different kind of support—one that honors your biology, your emotions, and your story.</p>
                            <p className="para-blog-single-page">Let's work together to build your roadmap to pregnancy—with clarity, care, and holistic tools that actually work.</p>
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
                    <Link href="/imp-fertility-factors">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-7/hero-image.jpg" className="img-fluid w-100" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">January 25, 2024</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">5 Important Fertility Factors and How You Can Actually Improve Them</p>
                        </div>
                    </Link>
                    <Link href="/pregnancy-detox">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-6/pregnancy-detox-blog.jpg" className="img-fluid w-100" alt="Pregnancy Detox" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">August 08, 2023</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">Pregnancy Detox the Right Way: How to do it Safely and Effectively</p>
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