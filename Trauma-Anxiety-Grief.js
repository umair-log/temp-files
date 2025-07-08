import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function BlogpostTraumaAnxietyGrief(props) {
    const pageRedirect = () => {
        window.location.href = './freeconsult'
    }

    return (
        <>
            <Head>
                <title>How Trauma, Anxiety, and Grief Show Up in Your Fertility | Fertility Avenues</title>
                <meta name="description" content="Understand how past trauma, chronic anxiety, and unresolved grief can impact your fertility journey. Discover tools for emotional healing and reclaim hope." />
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
                                <p className="date mb-0">July 9, 2025</p>                            </div>
                            <p className="tym-to-read mb-0">5 min read</p>
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
                            <h1 className="how-to-increase mt-3 mb-0">How Trauma, Anxiety, and Grief Show Up in Your Fertility</h1>
                            <img className="img-fluid my-2" src="/img/blogpost-emotional-roots/hero-image.png" alt="Woman feeling overwhelmed, symbolizing the emotional weight of fertility struggles" />
                            <div className="custom-border-blogpost mt-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="para-blog-single-page table-of-content mb-0">Table of Contents</p>
                                    <button type="button" className='btn shadow-none hamburg-btn ms-3' data-bs-toggle="collapse" data-bs-target="#emotional-roots-sections">
                                        <img src="/img/hamburg.svg" alt="" />
                                    </button>
                                </div>
                                <div id="emotional-roots-sections" className="collapse show">
                                    <li className="list-group-item py-0">
                                        <a href='#introduction'>Introduction</a><br/>
                                    </li>
                                    <li className="list-group-item py-0"><a href="#mind-body-fertility-connection">The Mind-Body-Fertility Connection</a></li>
                                    <li className="list-group-item py-0"><a href="#signs-emotional-blocks">Signs That Emotional Blocks May Be Impacting Fertility</a></li>
                                    <li className="list-group-item py-0"><a href="#how-past-trauma-manifest">How Past Trauma Can Manifest Physically</a></li>
                                    <li className="list-group-item py-0"><a href="#real-client-harriet">Real Client: Harriet</a></li>
                                    <li className="list-group-item py-0"><a href="#tools-emotional-healing">5 Tools to Support Emotional Healing and Fertility</a></li>
                                    <li className="list-group-item py-0"><a href="#what-you-can-do-today">What You Can Do Today</a></li>
                                    <li className="list-group-item py-0"><a href='#conclusion'>Conclusion</a></li>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="introduction">Introduction
                            <p className="para-blog-single-page mt-2">You’ve been told to “just relax.” You’ve been told it’s all in your head. You’ve been told your body is fine—but deep down, you know something else is going on.</p>
                            <p className="para-blog-single-page">If you've experienced **trauma**, chronic **anxiety**, or unresolved **grief**, your fertility journey may feel even more overwhelming. But here’s the truth:</p>
                            <p className="para-blog-single-page">Your emotional history matters. 💖</p>
                            <p className="para-blog-single-page">And it can absolutely show up in your cycle, your hormones, and your fertility.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="mind-body-fertility-connection">The Mind-Body-Fertility Connection
                            <p className="para-blog-single-page">Your **nervous system** and **reproductive system** are deeply connected. When you’re living in a state of chronic stress, unprocessed trauma, or emotional exhaustion, your body may respond by pausing fertility.</p>
                            <p className="para-blog-single-page">This isn’t sabotage. It’s **self-protection**.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="signs-emotional-blocks">Signs That Emotional Blocks May Be Impacting Fertility
                            <p className="para-blog-single-page">Keep an eye out for these signs that emotional blocks might be playing a role in your fertility journey:</p>
                            <ul className="para-blog-single-page">
                                <li>Irregular or absent periods despite no physical cause 🕰️</li>
                                <li>Persistent fatigue and burnout 😴</li>
                                <li>Fear, guilt, or shame surrounding pregnancy 😥</li>
                                <li>Over-functioning (doing everything "right" with no results) 🏃‍♀️💨</li>
                                <li>Feeling disconnected from your body 👻</li>
                            </ul>
                            <p className="para-blog-single-page">We see this often in women like Jasmine, Ashton, and Harriet—women who’ve been through a lot and are still carrying it in their nervous system.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="how-past-trauma-manifest">How Past Trauma Can Manifest Physically
                            <p className="para-blog-single-page">Trauma isn’t just an event—it’s what happens in your body afterward. It can **dysregulate your nervous system**, disrupt hormone signaling, and keep your body in survival mode.</p>
                            <p className="para-blog-single-page">This can lead to:</p>
                            <ul className="para-blog-single-page">
                                <li>Hormonal imbalance ⚖️</li>
                                <li>Poor egg quality 🥚⬇️</li>
                                <li>Thin uterine lining 📉</li>
                                <li>Low libido or painful sex 💔</li>
                            </ul>
                            <p className="para-blog-single-page">It may also affect your ability to feel **safe in your body**, trust the process, or stay hopeful. 🌈</p>
                        </li>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="real-client-harriet">Real Client: Harriet
                            {/* <img className="img-fluid my-2 w-100" src="/img/blogpost-emotional-roots/harriet-story.png" alt="Woman finding peace and healing, looking serene" /> */}
                            <p className="para-blog-single-page">Harriet came to us after losing her father and brother in a short span. She wanted to try for a baby but found herself constantly anxious, emotionally numb, and disconnected from her body.</p>
                            <p className="para-blog-single-page">Her fertility wasn’t just about ovulation—it was about healing the grief that was living in her cells. 🌱</p>
                            <p className="para-blog-single-page">Through nervous system support, emotional release work, and personalized care, Harriet’s cycle returned—and so did her connection to her body and her hope. ✨</p>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="tools-emotional-healing">5 Tools to Support Emotional Healing and Fertility
                            <p className="para-blog-single-page">Here are some powerful tools to help you navigate emotional healing on your fertility journey:</p>
                            <ol className="list-group list-group-numbered py-0 ps-0">
                                <li className="list-group-item py-0"><strong>Somatic Therapy:</strong> Releases trauma stored in the body and restores a sense of safety. 🧘‍♀️</li>
                                <li className="list-group-item py-0"><strong>Breathwork:</strong> Calms the nervous system and increases oxygen flow to reproductive organs. 🌬️</li>
                                <li className="list-group-item py-0"><strong>Guided Journaling:</strong> Prompts like:
                                    <ul className="para-blog-single-page">
                                        <li>What am I still holding?</li>
                                        <li>What would my body say if it had a voice?</li>
                                        <li>What do I need to grieve fully?</li>
                                    </ul>
                                </li>
                                <li className="list-group-item py-0"><strong>EFT Tapping:</strong> Emotional Freedom Technique helps release fear, anxiety, and limiting beliefs. 🤏</li>
                                <li className="list-group-item py-0"><strong>Restorative Rituals:</strong> Gentle movement, warm baths, music, safe touch—signals of safety to your nervous system. 🛀🎶🫂</li>
                            </ol>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="what-you-can-do-today">What You Can Do Today
                            <p className="para-blog-single-page">If you're ready to start your emotional healing journey for fertility, here are some steps you can take today:</p>
                            <ul className="para-blog-single-page">
                                <li>Name your grief—even if you don’t understand it fully 💬</li>
                                <li>Create a safe, quiet moment to listen to your body 🧘‍♀️👂</li>
                                <li>Choose one small ritual that makes you feel grounded 🌳</li>
                                <li>Seek support that holds space for all of you—not just your hormones 🤝</li>
                            </ul>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="conclusion">Conclusion
                            <p className="para-blog-single-page">Your fertility story is shaped not just by what your body is doing—but by what your heart has lived through.</p>
                            <p className="para-blog-single-page">You are not broken. You are holding a lot. And healing is possible. ✨</p>
                            <p className="para-blog-single-page">📞 Ready to explore the emotional roots of your fertility journey? Book a free consultation with us today.</p>
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
                    <Link href="/Tried-Everything">
                        <div className="col-lg-4 col-10 article-col">
                            <img src="/img/blogpost-tried-everything/hero-image.png" className="img-fluid w-100" alt="Woman looking confused about unexplained infertility" />
                            <div className="d-flex align-items-center mt-4">
                                <img src="/img/pink-line-smallest.webp" className="pink-line-smallest" />
                                <p className="date mb-0">June 26, 2025</p>
                            </div>
                            <p className="lorem-ipsum-dolor-si">When You’ve Tried Everything — But Still No Baby</p>
                        </div>
                    </Link>                    
                </div>
            </div>
        </>
    )
}