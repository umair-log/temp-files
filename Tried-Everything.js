import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function TriedEverything(props) {
    const pageRedirect = () => {
        window.location.href = './freeconsult'
    }

    return (
        <>
            <Head>
                <title>When You’ve Tried Everything — But Still No Baby | Fertility Avenues</title>
                <meta name="description" content="Feeling stuck after failed fertility treatments? Discover why doing more isn't always the answer and explore deeper, holistic steps to support your journey to pregnancy." />
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
                                <p className="date mb-0">June 26, 2025</p>

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
                            <h1 className="how-to-increase mt-3 mb-0">When You’ve Tried Everything — But Still No Baby</h1>
                            <img className="img-fluid my-2" src="/img/blogpost-tried-everything/hero-image.png" alt="Woman looking exhausted and disheartened, sitting alone" />
                            <div className="custom-border-blogpost mt-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="para-blog-single-page table-of-content mb-0">Table of Contents</p>
                                    <button type="button" className='btn shadow-none hamburg-btn ms-3' data-bs-toggle="collapse" data-bs-target="#tried-everything-sections">
                                        <img src="/img/hamburg.svg" alt="" />
                                    </button>
                                </div>
                                <div id="tried-everything-sections" className="collapse show">
                                    <li className="list-group-item py-0">
                                        <a href='#introduction'>Introduction</a><br/>
                                    </li>
                                    <li className="list-group-item py-0"><a href="#when-nothing-working">When Nothing’s Working… What’s Really Going On?</a></li>
                                    <li className="list-group-item py-0"><a href="#five-things-revisit">5 Things to Revisit When Nothing’s Working</a>
                                        <ol className="list-group list-group-numbered py-0 ps-0">
                                            <li className="list-group-item py-0"><a href='#nervous-system'>Your Nervous System</a></li>
                                            <li className="list-group-item py-0"><a href='#emotional-grief'>Emotional Grief + Energetic Blocks</a></li>
                                            <li className="list-group-item py-0"><a href='#inflammation-gut-health'>Inflammation + Gut Health</a></li>
                                            <li className="list-group-item py-0"><a href='#egg-uterine-health'>Egg and Uterine Health</a></li>
                                            <li className="list-group-item py-0"><a href='#connection-intimacy'>Connection and Intimacy</a></li>
                                        </ol>
                                    </li>
                                    <li className="list-group-item py-0"><a href='#real-story-stacey'>Real Story: Stacey</a></li>
                                    <li className="list-group-item py-0"><a href='#what-you-can-do-now'>What You Can Do Now</a></li>
                                    <li className="list-group-item py-0"><a href='#conclusion'>Conclusion</a></li>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="introduction">Introduction
                            <p className="para-blog-single-page mt-2">You’ve done it all—IVF, medications, supplements, acupuncture, cleanses, diets, protocols, mindset work.</p>
                            <p className="para-blog-single-page">You’ve been hopeful. You’ve been heartbroken. You’ve cycled through belief and burnout.</p>
                            <p className="para-blog-single-page">And still, you’re not pregnant.</p>
                            <p className="para-blog-single-page">So what now?</p>
                            <p className="para-blog-single-page">This post is for the woman who’s done everything she was told to do, and is still left holding an empty womb and a heavy heart.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="when-nothing-working">When Nothing’s Working… What’s Really Going On?
                            {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/what-is-going-on.png" alt="Woman looking confused and frustrated, surrounded by question marks" /> */}
                            <p className="para-blog-single-page">Sometimes, when you’ve tried everything and still aren’t seeing results, it’s not because you haven’t done enough. It’s because the approach wasn’t aligned with what your body actually needs.</p>
                            <p className="para-blog-single-page">Here’s what we’ve seen in women like Rebecca, Stacey, and Krish:</p>
                            <ul className="para-blog-single-page">
                                <li>Their labs were “normal” but symptoms screamed otherwise</li>
                                <li>Their protocols were generic, not personal</li>
                                <li>Their bodies were inflamed, disconnected, or shut down emotionally</li>
                                <li>Their nervous system was in survival mode, not safety</li>
                            </ul>
                            <p className="para-blog-single-page">Infertility is not just physical. It’s emotional, energetic, spiritual, and relational.</p>
                            <p className="para-blog-single-page">When you’ve tried everything, the next step isn’t doing more. It’s going deeper.</p>
                        </li>
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="five-things-revisit">5 Things to Revisit When Nothing’s Working
                            <p className="para-blog-single-page">When you've hit a wall in your fertility journey, it's time to pause and look beneath the surface. Here are five crucial areas to revisit:</p>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="nervous-system">1. Your Nervous System
                                {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/nervous-system.png" alt="Calm woman meditating, symbolizing nervous system regulation" /> */}
                                <p className="para-blog-single-page">Your body won’t allow pregnancy if it doesn’t feel safe. If stress, trauma, or burnout are chronically present, fertility takes a back seat.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Nervous system regulation tools</li>
                                    <li>Somatic healing (breathwork, movement, tapping)</li>
                                    <li>Restoring safety and trust in your body</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="emotional-grief">2. Emotional Grief + Energetic Blocks
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/emotional-grief.png" alt="Woman crying, symbolizing emotional release and grief" />
                                <p className="para-blog-single-page">Sometimes the weight of past losses, disappointments, or internalized shame creates invisible blocks to conception.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Emotional release work (journaling, therapy, energy work)</li>
                                    <li>Grief rituals and nervous system restoration</li>
                                    <li>Speaking the unspoken</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="inflammation-gut-health">3. Inflammation + Gut Health
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/gut-health.png" alt="Healthy food and gut flora, symbolizing anti-inflammatory diet" />
                                <p className="para-blog-single-page">Even if your diet is “clean,” chronic inflammation from gut issues, hidden infections, or toxic burden can interfere with fertility.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Anti-inflammatory protocols</li>
                                    <li>Gut-healing foods and supplements</li>
                                    <li>Detox support (liver, lymph, and mindset)</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="egg-uterine-health">4. Egg and Uterine Health
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/egg-uterine-health.png" alt="Microscopic view of healthy egg and uterus" />
                                <p className="para-blog-single-page">Egg quality and uterine receptivity are often missed in standard fertility treatment.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>CoQ10, antioxidants, and mitochondrial support</li>
                                    <li>Castor oil packs and blood flow enhancement</li>
                                    <li>Reducing environmental toxins</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="connection-intimacy">5. Connection and Intimacy
                                {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/connection-intimacy.png" alt="Couple holding hands and connecting emotionally" /> */}
                                <p className="para-blog-single-page">For couples, fertility struggles can create distance, pressure, or even emotional disconnection. Sometimes the relationship dynamic itself is quietly impacting conception.</p>
                                <p className="para-blog-single-page">What helps:</p>
                                <ul className="para-blog-single-page">
                                    <li>Open communication</li>
                                    <li>Intimacy without pressure</li>
                                    <li>Creating joy and connection beyond baby-making</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="real-story-stacey">Real Story: Stacey
                            {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/stacey-story.png" alt="Happy pregnant woman smiling, symbolizing hope and success" /> */}
                            <p className="para-blog-single-page">Stacey had been trying for 11 years. 3 rounds of IVF. Multiple losses. Doctors told her there was no hope.</p>
                            <p className="para-blog-single-page">She started working with us not to “fix” herself—but to reclaim her peace. With a shift in mindset, nourishment, spiritual support, and full-body healing, she conceived naturally within 6 months.</p>
                            <p className="para-blog-single-page">Her story isn’t rare—it’s just rarely told.</p>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="what-you-can-do-now">What You Can Do Now
                            {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-tried-everything/what-to-do-now.png" alt="Woman taking a deep breath, surrounded by calming elements" /> */}
                            <p className="para-blog-single-page">If you feel like you’ve tried it all:</p>
                            <ul className="para-blog-single-page">
                                <li>Take a deep breath and pause the pressure</li>
                                <li>Ask your body—not the internet—what it needs next</li>
                                <li>Reconnect with the why behind your desire</li>
                                <li>Consider a new, gentler approach that centers you—not just the outcome</li>
                            </ul>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="conclusion">Conclusion
                            <p className="para-blog-single-page">Trying everything can leave you exhausted and disoriented. But this doesn’t have to be the end of your journey.</p>
                            <p className="para-blog-single-page">Sometimes, the most powerful shift happens not by doing more—but by doing differently.</p>
                            <p className="para-blog-single-page">📞 If you’re ready to take a deeper, more aligned step toward pregnancy, book a free fertility consultation today.</p>
                            {/* <p className="para-blog-single-page">💛 <Link href="/freeconsult"><a>[Schedule your session here]</a></Link></p> */}
                        </div>
                    </div>
                    <div className="col-lg-4 get-free-consultation-blogpost-div text-center is-sticky">
                        <img className="img-fluid" src="/img/couple.webp" alt="Couple seeking fertility help" />
                        <h2 className="start-your-fertility-journey-heading my-3">Start your fertility journey with us</h2>
                        <p className="join-our-self-care-program-text">Join our self-care program to boost your fertility & get pregnant from the comfort of your home.</p>
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
                        <p className="para-sec3 ps-lg-5 mt-4">Join our self-care program to boost your fertility & get pregnant from the comfort of your home.</p>
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
                    <Link href="/Emotional-Weight-of-Infertility">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-emotional/hero-image.png" className="img-fluid w-100" alt="Woman looking contemplative, representing emotional weight of infertility" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">June 12, 2025</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">The Emotional Weight of Infertility — And How to Lighten the Load</p>
                        </div>
                    </Link>
                    <Link href="/Why-Youre-Not-Ovulating">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-ovulation/hero-image.png" className="img-fluid w-100" alt="Woman tracking ovulation with confused expression" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">June 04, 2025</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">Why You’re Not Ovulating — And What You Can Do About It</p>
                        </div>
                    </Link>
                    <Link href="/Unexplained-Infertility">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-unexplained/hero-image.png" className="img-fluid w-100" alt="Woman looking confused about unexplained infertility" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">May 21, 2025</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">Unexplained Infertility — Why It’s More Common Than You Think</p>
                        </div>
                    </Link>                    
                </div>
            </div>
        </>
    )
}