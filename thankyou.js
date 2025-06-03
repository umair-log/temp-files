import Head from 'next/head';
import Script from 'next/script';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Fertility Avenues</title>
        <meta name="description" content="Thank you for booking your call with Fertility Avenues." />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />

      <div className="container px-0 pt-5">
        <div className="row mt-md-5 m-0 p-0">
          <h2>🌸 Thank You for booking your call!</h2>

          <p><strong>Your Fertility Journey Just Took a Powerful Step Forward.</strong></p>

          <p>We're honored you've chosen to meet with us. Your free consultation with Dr. Ka is confirmed, and we can’t wait to learn more about your story.</p>

          <h5>Here’s what happens next:</h5>

          <ul>
            <li>📅 <strong>Check your email</strong> for the confirmation and Zoom link.</li>
            <li>🧘🏽‍♀️ <strong>Prepare for a calm and nurturing conversation</strong> — we’ll go at your pace, and everything you share is confidential.</li>
            <li>❤️ <strong>This is your safe space.</strong> No pressure, no judgment — just clarity, care, and a custom path forward.</li>
          </ul>

          <h5>👇 While You Wait, Here’s How to Make the Most of Your Upcoming Session:</h5>

          <ul>
            <li>
              <strong>Watch our Success Stories</strong>: Hear from other women who started just where you are.  
              👉 <a href="https://www.fertilityavenues.com/#reviews" target="_blank" rel="noopener noreferrer">Watch Now</a>
            </li>
            <li>
              <strong>Follow us on Instagram</strong> for daily inspiration and fertility wisdom.  
              👉 <a href="https://www.instagram.com/fertilityavenues" target="_blank" rel="noopener noreferrer">Follow @fertilityavenues</a>
            </li>
          </ul>

          <p>🕊 <strong>You’re not alone anymore.</strong></p>

          <p>You’ve taken a brave first step, and we’re walking this journey with you.</p>

          <p>With care,<br /><strong>The Fertility Avenues Team 💗</strong></p>
        </div>
      </div>
    </>
  );
}
