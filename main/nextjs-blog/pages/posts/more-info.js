import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <div className = "container">
      <Head>
        <title>Nine4 Logistics - Kolkata's First E-Commerce Friendly Shipping Company
        </title>
        <link rel="icon" href="/nine4-logo.png" />
      </Head>
<main>
      <description>        
        <h1 className="title">
        Connecting <a>Kolkata</a>
        </h1>
        

        <p className="description">
        <code><Link href = "/"><a>Book your Shipment</a></Link></code>
        
        </p>
        <firstpostcx><center>More Regions Unlocking Soon</center></firstpostcx>
      </description>

      <div className="grid">
          <a href="#" className="card">
            <h3>{'< '}24Hr Delivery  &rarr;</h3>
            <p>For low & medium weight personal consignments</p>
          </a>
          <a href="#" className="card">
            <h3>Safe & Reliable  &rarr;</h3>
            <p>For low & medium weight personal consignments</p>
          </a> 
        
    </div>
</main>

    <footer>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Powered by React{' '}
          <img src="/react-logo.svg" alt="React" className="logo" />
        </a>
      </footer>








      <style jsx>{`
        .container {
          min-height: 100vh;
          /* padding: 0 0.5rem; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;  
        }
        
        firstpostcx{
          
            color : lightgrey;
            text-decoration: none;
            transition: 0.3s;
            //padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;        
            
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          background-color: black;
          justify-content: center;
          align-items: center;
          color : white;
          transition: 0.2s;
        }

        footer:hover {
          background-color: #4267B2;
          color : white;
          font-weight: bold;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
          transition: 0.5s;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
         // text-decoration: underline;
          color : #4267B2;  
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #0095ff;
          color:white;
          border-radius: 5px;
          transition: 0.5s;
          padding: 0.90rem;
          margin-top : 2px;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        code:hover{
            color : black;
            background : yellow;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          background-color:white;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            scrollbar-width: thin;          /* "auto" or "thin" */
            scrollbar-color: blue orange;   /* scroll thumb and track */

            
        }

        * {
          box-sizing: border-box;
        }
        
        


      `}</style>

    </div>
  )
}