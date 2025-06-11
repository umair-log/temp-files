import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export default function Blog(props) {
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
      <div className="container hero-head">
        <div className="row">
          
          <div className="col-lg-3 col-10 hero-blank-head">
            <img src="/img/blogpost-emotional/hero-image.png" alt="" className="blog-hero-img" />
          </div>
          <div className="col-lg-9 col-12 hero-pink-head">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-8 col-10 hero-content-head">
                <div className="d-flex align-items-center">
                  <img src="/img/pink-line-smallest.webp" className="white-line mb-2" />
                  <p className="hero-head-date ms-3">June 12, 2025</p>
                </div>
                <h1 className="hero-big-head">The Emotional Weight of Infertility — And How to Lighten the Load</h1>
                <p className="hero-small-head mt-4 mb-3"></p>
                <Link href="/Emotional-Weight-of-Infertility"><button className="btn read-article shadow-none float-end rounded-0 mt-lg-4">READ ARTICLE</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-0">      
        <div className="row mt-md-5 m-0 p-0">


        <div className="col-lg-4 col-10 article-col">
            <Link href="/Emotional-Weight-of-Infertility"><a><img src="/img/blogpost-emotional/hero-image.png" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">June 12, 2025</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">The Emotional Weight of Infertility — And How to Lighten the Load</p>
          </div> 

          <div className="col-lg-4 col-10 article-col">
            <Link href="/Why-Youre-Not-Ovulating"><a><img src="/img/blogpost-ovulation/hero-image.png" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">June 04, 2025</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">Why You're Not Ovulating — And What You Can Do About It</p>
          </div> 

          <div className="col-lg-4 col-10 article-col">
            <Link href="/pcos-and-pregnancy"><a><img src="img/blogpost-pcos/hero-image.png" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">May 29, 2025</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">PCOS and Pregnancy — A Holistic Path When Nothing Else Works</p>
          </div> 

           <div className="col-lg-4 col-10 article-col">
            <Link href="/Unexplained-Infertility"><a><img src="img/blogpost-unexplained/hero-image.png" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">May 21, 2025</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">Unexplained Infertility — Why It's More Common Than You Think | Fertility Avenues</p>
          </div>     

          <div className="col-lg-4 col-10 article-col">
            <Link href="/imp-fertility-factors"><a><img src="/img/blogpost-7/hero-image.jpg" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">January 25, 2024</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">5 Important Fertility Factors and How You Can Actually Improve Them</p>
          </div>   

          <div className="col-lg-4 col-10 article-col">
            <Link href="/pregnancy-detox"><a><img src="/img/blogpost-6/pregnancy-detox-blog.jpg" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">August 08, 2023</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">Pregnancy Detox the Right Way: How to do it Safely and Effectively</p>
          </div>

          <div className="col-lg-4 col-10 article-col">
            <Link href="/unborn-baby"><a><img src="/img/blogpost-5/joy-new.png" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">July 03, 2023</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">Am I Stressing Out My Unborn Baby?</p>
          </div>
          <div className="col-lg-4 col-10 article-col">
            <Link href="/conquer-pregnancy-dark-triad"><a><img src="/img/blogpost-4/hero-img-new.png" alt="" className="w-100 img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">June 01, 2023</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">Stress, Anxiety, and PPD: How You Can Conquer Pregnancy’s Dark Triad</p>
          </div>
          <div className="col-lg-4 col-10 article-col">
            <Link href="/7-creative-ways-coped"><a><img src="/img/Introduction-new.jpg" alt="" className="img-fluid w-100" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">March 24, 2023</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">7 Creative Ways I Coped While Waiting for My Rainbow Baby</p>
          </div>
          <div className="col-lg-4 col-10 article-col">
            <Link href="/7-ways-to-conquer-anxiety"><a><img src="/img/blog-2.png" alt="" className="img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">December 28, 2022</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">7 Strong Ways to Conquer Anxiety and Improve Your Fertility</p>
          </div>

          <div className="col-lg-4 col-10 article-col">
            <Link href="/10-powerful-ways-to-boost"><a><img src="/img/blogpost-img-1.jpg" alt="" className="img-fluid" /></a></Link>
            <div className="d-flex align-items-center mt-3">
              <img src="/img/pink-line-smallest.webp" alt="" className="pink-line-smallest" />
              <p className="date mb-0">August 16, 2022</p>
            </div>
            <p className="lorem-ipsum-dolor-si2">10 Powerful Ways to Boost Your Chances of Getting Pregnant Fast</p>
          </div>


        </div>
        {/* <div className="row mt-md-5 m-0 p-0">    

     

        </div> */}

      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-load-more-articles shadow-none rounded-0 my-5">LOAD MORE ARTICLES</button>
      </div>
    </>
  )
}
