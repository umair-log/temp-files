import Head from 'next/head';
import React, { useState, useEffect } from "react";
import Testimonial from "../components/Testimonial";
import Success from "../components/Success";
import CountUp from 'react-countup';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Stickypopup from '../components/Stickypopup';
import Script from 'next/script';
import axios from 'axios';

export default function Home(props) {
  const [showStickypopup, setShowStickyPopup] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        var displayStickyPopup = false;
        AOS.init({ duration: 1500 });
        const handleScroll = event => {
          if (window.scrollY >= 1850) {
            displayStickyPopup = true;
            setShowStickyPopup(displayStickyPopup);
          } else {
            displayStickyPopup = false;
            setShowStickyPopup(displayStickyPopup);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
      catch (error) {
        console.log(error);
      }
    })();
    axios.get(`/api/testimonials`).then((res) => {
      if (res.data.result === "Success") {
        let testimonials_fa = res.data.testimonialData;
        setTestimonials(testimonials_fa);
      }
    }).catch((errorResp) => {
      console.log(errorResp);
    });
  }, [])
  const ifDisplayPopup = (ifDisplay) => {
    setShowStickyPopup(ifDisplay);
  }
  const pageRedirect = () => {
    window.location.href = './freeconsult'
  }

  return (
    <>
      <Head>
        <title>Fertility Avenues</title>
        <meta name="description" content="Fertility Avenues" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <meta name="facebook-domain-verification" content="22pzg18n6zf3mkxhzsqyp84odcuw0t" />

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
            fbq('track', "PageView");`}}
        />
        <noscript>
          <img height="1" width="1" src="https://www.facebook.com/tr?id=722676669519092&ev=PageView&noscript=1" />
        </noscript>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>

      <div className="container-fluid hero-section"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xxl-6 col-10 overlap-group24">
            <h1 className="start-your-fertility-journey">Pregnancy Is Possible...  <br className="d-none d-sm-block" />We Promise.</h1>
            <p className="join-our-self-care">Trying to get pregnant for months—or years—and feel like your body is failing you? We can help.</p>
            <button className="rounded-0 claim-your-spot" onClick={pageRedirect}>GET A FREE CONSULTATION</button>
          </div>
        </div>
      </div>

      <div className="container mt-md-2 mt-0">
        <div className="row ms-lg-5 ps-lg-3 sec-1 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-10 mt-lg-5 pt-lg-5 voted-best-subscription-div">
            <div className="row">
              <div className="col-lg-2 col-2 px-lg-0">
                <img src="/img/badge-best-choice.webp" alt="" />
              </div>
              <div className="col-lg-10 col-10 ps-0 mt-lg-1">
                <p className="voted-best-subscription">VOTED &ldquo;BEST SUBSCRIPTION SERVICE FOR ONLINE DOCTORS BY CONSUMER&apos;S ADVOCATE IN 2020 AND 2021</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-10 it-is-so-effective-div">
            <div className="row custom-shadow ms-lg-2">
              <div className="col-lg-4 col-12">
                <img src="/img/sarah.jpg" alt="" className="user-image" />
                <img src="/img/sarah-mob.jpg" alt="" className="user-image-mob" />
              </div>
              <div className="col-lg-8 col-12">
                <div className="overlap-group14">
                  <p className="it-is-so-effective">I am now 27 weeks pregnant with the baby boy. Highly highly highly recommend Fertility Avenues and Antonia!</p>
                  <img src="/img/”.webp" alt="" className="image" />
                </div>
                <div className="flex-row-1 mt-lg-4 vec-tou-div">
                  <img src="/img/pink-line-small.webp" alt="" className="pink-line-small" />
                  <p className="touria mb-0">Sarah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-lg-1">
              <img src="/img/vertical-logo.webp" alt="" className="vertical-logo" />
            </div>
            <div className="col-lg-5 col-md-8 col-10 order-2 what-we-offer-div">
              <div className="group-75">
                <h2 className="what-we-offer">Transforming your frustration into calm to help you get pregnant easily</h2>
                <p className="at-fertility-avenues">At Fertility Avenues, we’re passionate about boosting your fertility while nurturing your femininity, and have helped over 1,000 women just like you on their journey to pregnancy.</p>
                <p className="by-combining-function">By combining functional medicine, holistic modalities, and ancient midwife traditions from across the globe, we offer step-by-step guidelines guaranteed to get you pregnant in 6 months or less.</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 col-10 mt-lg-5 order-4 stats-div">
              <div className="group-87">
                <div className="group-79">
                  <h2 className="number-count"><CountUp end={10} duration={3} suffix="%" /></h2>
                  <p className="number-count-text mb-0">of women in the United States have difficulty getting pregnant or staying pregnant</p>
                </div>
                <div className="group-77">
                  <h2 className="number-count"><CountUp end={1000} duration={3} separator="," /></h2>
                  <p className="number-count-text mb-0">women we have already helped to get pregnant in 6 months or less</p>
                </div>
                <div className="group-78">
                  <h2 className="number-count"><CountUp end={28} duration={3} /></h2>
                  <p className="number-count-text mb-0">years of experience spent traveling the world to investigate the science of female fertility.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-10 col-12 flow-div order-3">
              <img src="/img/Flow.webp" alt="" className="flow" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className='row justify-content-center'>
          <div className="col-md-6 col-10">
            <iframe className="w-100 how-to-get-pregnant-video" src="https://www.youtube.com/embed/KkhTxat_83w" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4 col-10"></div>
          <div className="col-lg-1 col-1"></div>
          <div className="col-lg-6 col-12">
            <div className="row struggles-row">
              <div className="struggles-list col-lg-10 col-md-8 col-10">
                <div className="d-flex align-items-start py-2">
                  <img src="/img/Wholeness.webp" alt="" className="wholeness" />
                  <p className="struggle-text">You&apos;ve researched vitamin supplements, fertility treatments, and dietary guidelines with no success.</p>
                </div>
                <div className="d-flex align-items-start py-2">
                  <img src="/img/Wholeness.webp" alt="" className="wholeness" />
                  <p className="struggle-text">You&apos;ve consulted with your doctor about your options, but still got no results.</p>
                </div>
                <div className="d-flex align-items-start py-2">
                  <img src="/img/Wholeness.webp" alt="" className="wholeness" />
                  <p className="struggle-text">You feel lost among all the information and you&apos;ve tried to look for the right answer.</p>
                </div>
                <div className="d-flex align-items-start py-2">
                  <img src="/img/Wholeness.webp" alt="" className="wholeness" />
                  <p className="struggle-text">You feel frustrated and afraid of how to move forward on your path forward to pregnancy.</p>
                </div>
              </div>
              <div className="col-lg-2" style={{ marginTop: 58 }}>
                <img src="/img/Flow 2.webp" width="107" className="flow-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section-struggle">
        <div className="row">
          <div className="col-lg-1 ">&nbsp;</div>
          <div className="col-lg-4 col-md-8 col-10 d-flex flex-column justify-content-around align-items-baseline were-here-div">
            <h1 className="were-here-to-change-that">Finally. A program<br />that simplifies fertility</h1>
            <p className="we-understand-the mt-4">We understand the stress, frustration, and fear that comes with trying to get pregnant. As so we offer a different approach where you will learn how strong fertility is a product of a healthy body, but also a strong &amp; clear mind. You’ll get to explore invaluable ways to regulate the energy centers involved in a healthy pregnancy.</p>
          </div>
          <div className="col-lg-1  d-flex flex-column justify-content-around align-items-center mt-lg-5 pt-lg-4">
            <p className="title">struggles</p>
          </div>
          <div className="col-lg-6  col-12"></div>
        </div>
      </div>

      <div className="container video-testm">
        <div className="row">
          <div className="col-lg-6 col-12 play-btn-div" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-once="true">
            <div className="row justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="overlap-group7">
                  <iframe width="316" height="480" src="https://www.youtube.com/embed/KLtt6WDa2rQ" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
              <div className="col-10 mt-lg-5 pt-lg-4 dr-nadine-div">
                <div className="overlap-group26">
                  <div className="text-1">
                    <img src="/img/“.webp" alt="" width="85" />
                  </div>
                  <p className="at-fertility-avenues-1 mt-lg-4">At Fertility Avenues, we are passionate about boosting your fertility while nurturing your femininity, and have helped over 1,000 women just like you on their journey to pregnancy.</p>
                </div>
                <div className="d-flex flex-row justify-content-end mt-lg-4 nadine-div">
                  <img src="/img/peach-line.webp" alt="" className="peach-line me-4 mt-3" />
                  <p className="dr-nadine-graven">Dr. Nadine Graven</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 play-btn-div" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-once="true">
            <div className="row justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="overlap-group7 overlap-group7-new">
                  <iframe width="316" height="480" src="https://www.youtube.com/embed/M7RYk8aKf5A" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
              <div className="col-10 mt-lg-5 pt-lg-4 dr-nadine-div">
                <div className="overlap-group26">
                  <div className="text-1">
                    <img src="/img/“.webp" alt="" width="85" />
                  </div>
                  <p className="at-fertility-avenues-1 mt-lg-4">At Fertility Avenues, we address the root cause of infertility through our comprehensive process and customized fertility journey. I highly recommend the program, the pregnancy cases that has generated speak for themselves.</p>
                </div>
                <div className="d-flex flex-row justify-content-end mt-lg-4 nadine-div">
                  <img src="/img/peach-line.webp" alt="" className="peach-line me-4 mt-3" />
                  <p className="dr-nadine-graven">Kimberly S. Carter, MS,<br /> MSN, APRN, FNP-C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid ps-0">
        <img src="/img/Flow-watermark-2.webp" alt="" className="group-141" />
      </div>
      <div className="container mt-lg-5">
        <div className="row">
          <div className="col-xxl-9 col-lg-8 col-10 what-to-expect-div">
            <h2 className="what-to-expect">A well-rounded approach for a multi-faceted journey:</h2>
          </div>
          <div className="col-xxl-3 col-lg-4 col-10 d-flex justify-content-lg-end get-free-consultation-div order-3 order-xl-0">
            <button className="rounded-0 get-free-consultation" onClick={pageRedirect}>GET FREE CONSULTATION</button>
          </div>
          <div className="row benefit-container">
            <div className="col-lg-3 col-10 benefit">
              <img src="/img/Growth.webp" alt="" className="growth mb-lg-4" />
              <p className="benefit-text text-lg-center">Natural &amp; science-proven techniques to conceive with no side effects</p>
            </div>
            <div className="col-lg-3 col-10 benefit">
              <img src="/img/Balance 2.webp" alt="" className="growth mb-lg-4" />
              <p className="benefit-text text-lg-center">Theory, practice and tips that you can follow in the perinatal &amp; preconception stage</p>
            </div>
            <div className="col-lg-3 col-10 benefit">
              <img src="/img/Avenues.webp" alt="" className="growth mb-lg-4" />
              <p className="benefit-text text-lg-center">Detailed explanations of every aspect of your fertility provided by a team of experts</p>
            </div>
            <div className="col-lg-3 col-10 benefit">
              <img src="/img/Circulation 2.webp" alt="" className="growth mb-lg-4" />
              <p className="benefit-text text-lg-center">Customized approach to addressing your unique infertility issue</p>
            </div>
          </div>
        </div>
      </div>

      <Testimonial testimonials={testimonials} />

      <div className="container-fluid ps-0" id="program">
        <div className="row">
          <div className="col-lg-6 col-12 d-lg-flex pe-0">
            <div className="group-76">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2">&nbsp;</div>
                  <div className="col-lg-10 col-10 mt-lg-5 our-program-div">
                    <h2 className="our-program">The Fertility Avenues’<br /> Self-Care Program</h2>
                    <p className="this-program">This program will train you to eat better, be calmer, and love yourself wholeheartedly so you can conceive and nurture others. Learn about the physiology, psychology and philosophy of your fecundity and experience the many natural ways of jumpstarting your fertility.</p>
                  </div>
                </div>
                <div className="row my-lg-5">
                  <div className="col-lg-2 col-10">&nbsp;</div>
                  <div className="col-lg-10 col-10 stats-div">
                    <div className="d-lg-flex flex-row">
                      <h2 className="number-1 col-lg-2 col-10">52</h2>
                      <p className="private-weekly-session">private weekly sessions with our fertility experts, including our founder Antonia Ka, PhD, Dsc</p>
                    </div>
                    <div className="d-lg-flex flex-row mt-4 achievement-row">
                      <h2 className="number-2 col-lg-2 col-10">9h</h2>
                      <p className="of-online-content">of online content, accessible from your home or on-the-go</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-8 col-12 philosophy-box">
            <div className="group-84" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-once="true">
              <div className="container">
                <div className="row slide">
                  <p className="the-physiology col-lg-5 ">The physiology</p>
                  <p className="the-science-function-of-your-body col-lg-7 col-xxl-7">The science &amp; function of your body</p>
                  <img src="/img/pink-thin-line.webp" alt="" className="pink-thin-line" />
                </div>
                <div className="row slide">
                  <p className="the-physiology col-lg-5 ">The energy flow</p>
                  <p className="the-science-function-of-your-body col-lg-7 col-xxl-7">Function of Breath &amp; Energy</p>
                  <img src="/img/pink-thin-line.webp" alt="" className="pink-thin-line" />
                </div>
                <div className="row slide">
                  <p className="the-physiology col-lg-5 ">The neuroplasticity of the mind</p>
                  <p className="the-science-function-of-your-body col-lg-7 col-xxl-7">Thoughts, beliefs, perceptions, visualizations and affirmations</p>
                  <img src="/img/pink-thin-line.webp" alt="" className="pink-thin-line" />
                </div>
                <div className="row slide">
                  <p className="the-physiology col-lg-5 ">The feelings &amp; emotions</p>
                  <p className="the-science-function-of-your-body col-lg-7 col-xxl-7">Emotional stability of an  embodied Soul</p>
                  <img src="/img/pink-thin-line.webp" alt="" className="pink-thin-line" />
                </div>
                <div className="row slide pb-3">
                  <p className="the-physiology col-lg-5 ">The divine flow &amp; natural wisdom</p>
                  <p className="the-science-function-of-your-body col-lg-7 col-xxl-7">Unleashing of one&apos;s creativity <br /> and connection to Spirit</p>
                </div>
              </div>
            </div>
            <div className="text-lg-end text-center mt-5">
              <button className="rounded-0 join-the-program" onClick={pageRedirect}>JOIN THE PROGRAM</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="experts">
        <div className="row">
          <div className="col-lg-4 col-10 our-experts-div order-lg-1">
            <h2 className="our-experts">Our Experts</h2>
            <p className="lorem-ipsum-dolor-si-1">World-renowned fertility experts and doctors with over 50 years experience, caring for women in all phases of their reproductive life.</p>
          </div>
          <div className="col-lg-3 col-10 dr-lorem-ipsum-div">
            <img src="/img/Antonia.webp" alt="" className="expert-img" />
            <div className="overlap-group-4">
              <p className="dr-lorem-ipsum">Dr. Antonia Ka Ph.D.; <br /> D.Sc – holistic scholar &amp; therapist</p>
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest-new" />
            </div>
            <p className="lorem-ipsum-dolor-sit-amet mt-5 pt-lg-3">Co-founder and course creator with over 30 years experience as a holistic scholar and fertility expert</p>
          </div>
          <div className="col-lg-3 col-10 dr-lorem-ipsum-div">
            <img src="/img/Nadine.webp" alt="" className="expert-img" />
            <div className="overlap-group-4">
              <p className="dr-lorem-ipsum">Dr. Nadine Graven</p>
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest-new" />
            </div>
            <p className="lorem-ipsum-dolor-sit-amet">Dr.Graven has been in the OB/GYN industry for the last 32+ years, she delivered over 5,250 babies during her tenure, handled all of her own billing and was the first in her area to computerize her practice. She is well versed in all OBGYN office phases, such as IUD Placement, complex colonoscopy, difficult menopause patients, and urogynecology</p>
          </div>
          <div className="col-lg-1 col-xxl-1"></div>
        </div>
      </div>

      <Success text="BOOK A FREE CONSULTATION" url="freeconsult" />

      {showStickypopup &&
        (<Stickypopup ifDisplayPopup={ifDisplayPopup} />)
      }

      <div className="container-fluid text-end pe-0">
        <div className="circular-img">
          <img src="/img/Circulation.webp" alt="" className="group-145" />
        </div>
      </div>
    </>
  )
}
