import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function BlogpostEmotionalInfertility(props) {
    const pageRedirect = () => {
        window.location.href = './freeconsult'
    }

    return (
        <>
            <Head>
                <title>The Emotional Weight of Infertility — And How to Lighten the Load | Fertility Avenues</title>
                <meta name="description" content="Discover emotional support strategies for infertility including stress reduction techniques, community building, and nervous system regulation to support your fertility journey." />
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
                                <p className="date mb-0">June 12, 2025</p>
                            </div>
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
                            <h1 className="how-to-increase mt-3 mb-0">The Emotional Weight of Infertility 💔 — And How to Lighten the Load</h1>
                            <img className="img-fluid my-2" src="/img/blogpost-emotional/hero-image.png" alt="Woman feeling emotional weight of infertility" />
                            <div className="custom-border-blogpost mt-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="para-blog-single-page table-of-content mb-0">Table of Contents</p>
                                    <button type="button" className='btn shadow-none hamburg-btn ms-3' data-bs-toggle="collapse" data-bs-target="#emotional-sections">
                                        <img src="/img/hamburg.svg" alt="" />
                                    </button>
                                </div>
                                <div id="emotional-sections" className="collapse show">
                                    <li className="list-group-item py-0">
                                        <a href='#introduction'>Introduction</a><br/>
                                    </li>
                                    <li className="list-group-item py-0"><a href="#why-emotions-matter">Why the Emotional Side Matters</a></li>
                                    <li className="list-group-item py-0"><a href="#stress-effects">How Stress Affects Fertility</a></li>
                                    <li className="list-group-item py-0"><a href="#healing-tools">Emotional Healing Tools 🌿</a>
                                        <ol className="list-group list-group-numbered py-0 ps-0">
                                            <li className="list-group-item py-0"><a href='#breathwork'>Breathwork & Nervous System Reset</a></li>
                                            <li className="list-group-item py-0"><a href='#journaling'>Journaling & Emotional Expression</a></li>
                                            <li className="list-group-item py-0"><a href='#community'>Community & Shared Stories</a></li>
                                            <li className="list-group-item py-0"><a href='#inner-child'>Inner Child & Somatic Work</a></li>
                                        </ol>
                                    </li>
                                    <li className="list-group-item py-0"><a href='#client-story'>Client Story: Roslyn</a></li>
                                    <li className="list-group-item py-0"><a href='#take-action'>What You Can Do Today</a></li>
                                    <li className="list-group-item py-0"><a href='#conclusion'>Conclusion</a></li>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="introduction">Introduction
                            <p className="para-blog-single-page mt-2">No one prepares you for the emotional toll of infertility. 😔</p>
                            <p className="para-blog-single-page">The hope, the heartbreak, the month-after-month guessing game. The feeling of being left behind. The social isolation. The grief that arrives with every negative test.</p>
                            <p className="para-blog-single-page">This isn't just about your body. It's about your heart. ❤️ And you deserve support for both.</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="why-emotions-matter">Why the Emotional Side Matters
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-emotional/emotional-toll.png" alt="Woman experiencing emotional toll of infertility" />
                            <p className="para-blog-single-page">Infertility is often treated as a purely medical issue—but it's also a profound emotional, psychological, and spiritual challenge. For many women, it brings:</p>
                            <ul className="para-blog-single-page">
                                <li>Anxiety and depression</li>
                                <li>Loss of identity and confidence</li>
                                <li>Strain on relationships and intimacy</li>
                                <li>Isolation from friends, family, or community</li>
                            </ul>
                            <p className="para-blog-single-page">These feelings are real. And if you're feeling them—you're not weak, dramatic, or alone. You're human. 🤗</p>
                        </li>
                        <li className="number-heading my-2" style={{ listStyle: 'None' }} id="stress-effects">How Stress Affects Fertility
                            <p className="para-blog-single-page">Chronic stress doesn't just affect your mood—it affects your hormones. When your nervous system is dysregulated:</p>
                            <ul className="para-blog-single-page">
                                <li>Cortisol rises 📈</li>
                                <li>Progesterone drops 📉</li>
                                <li>Ovulation may become delayed or disappear</li>
                                <li>The uterine lining may be less receptive to implantation</li>
                            </ul>
                            <p className="para-blog-single-page">Stress tells the body: now is not a safe time to conceive. That doesn't mean the stress is your fault—it means your body needs safety, calm, and care. 🧘‍♀️</p>
                        </li>
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="healing-tools">Emotional Healing Tools 🌿
                            <p className="para-blog-single-page">Emotional healing isn't about ignoring pain. It's about feeling safe enough to process it. Here are a few tools we use and recommend:</p>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="breathwork">1. Breathwork & Nervous System Reset
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-emotional/breathwork.png" alt="Woman practicing breathwork for stress relief" />
                                <p className="para-blog-single-page">Simple breathing techniques help calm the vagus nerve, reduce cortisol, and create a sense of emotional grounding. Try:</p>
                                <ul className="para-blog-single-page">
                                    <li>4-7-8 breathing (inhale 4 counts, hold 7, exhale 8)</li>
                                    <li>Alternate nostril breathing</li>
                                    <li>Daily 5-minute breath awareness practice</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="journaling">2. Journaling & Emotional Expression ✍️
                                <p className="para-blog-single-page">Getting feelings out of your head and onto paper is a powerful release. Try these prompts:</p>
                                <ul className="para-blog-single-page">
                                    <li>"What am I carrying today?"</li>
                                    <li>"What do I need to let go of?"</li>
                                    <li>"What would I say if I didn't have to be strong?"</li>
                                </ul>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="community">3. Community & Shared Stories
                                <p className="para-blog-single-page">Being part of a group where others understand your experience reduces shame and isolation. You realize: It's not just me. 🤝</p>
                            </div>
                            
                            <div className="number-heading my-2" style={{ listStyle: 'None' }} id="inner-child">4. Inner Child & Somatic Work
                                <img className="img-fluid my-2 w-100" src="/img/blogpost-emotional/somatic.png" alt="Woman practicing somatic healing" />
                                <p className="para-blog-single-page">Sometimes the fear or grief you feel isn't just about fertility—it's about old wounds being reopened. Gentle somatic tools can help your body release what your mind can't reason through.</p>
                            </div>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="client-story">Client Story: Roslyn
                            <p className="para-blog-single-page">Roslyn came to us after years of trying to conceive and feeling alone in her pain. She had done all the diets, supplements, and protocols—but hadn't yet felt seen. 👀</p>
                            <p className="para-blog-single-page">Through our group sessions and somatic healing work, Roslyn finally found space to grieve, to hope again, and to reconnect with her body—not just as a vessel, but as a partner.</p>
                            <p className="para-blog-single-page">Her words: "I didn't know how much I was holding in until I shared it out loud." 🗣️</p>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="take-action">What You Can Do Today
                            <img className="img-fluid my-2 w-100" src="/img/blogpost-emotional/action.png" alt="Action steps for emotional healing" />
                            <p className="para-blog-single-page">If the emotional weight feels heavy right now: 💪</p>
                            <ul className="para-blog-single-page">
                                <li>Give yourself permission to feel everything</li>
                                <li>Create a daily practice of self-connection (breath, music, stillness)</li>
                                <li>Reach out for support from someone who gets it</li>
                                <li>Remember: You are worthy, whole, and valuable—whether or not you're pregnant</li>
                            </ul>
                        </div>
                        
                        <div className="number-heading my-2" style={{ listStyle: 'None' }} id="conclusion">Conclusion
                            <p className="para-blog-single-page">You are not just a cycle, a number, or a diagnosis. You are a woman with a story, a heart, and a longing that deserves to be held with compassion. 🤲</p>
                            <p className="para-blog-single-page">Infertility is hard—but you don't have to carry it alone.</p>
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