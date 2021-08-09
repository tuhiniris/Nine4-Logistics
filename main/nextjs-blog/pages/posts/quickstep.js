import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';

function Home() {
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1></h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (

    
    <div className="container">
      <Head>
        <title>Nine4 Logistics - Book Your Consignment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
      <h1 className="title">Login &rarr; <Link href = "/posts/more-info"><a>Step 2</a></Link>
        </h1>

               


      {loggedIn && (
        <>
          <p>Welcome {data.email}!</p>
          <button
            onClick={() => {
              cookie.remove('token');
              revalidate();
            }}>
            Logout
          </button>
        </>
      )}
      {!loggedIn && (
        <>

<div className="grid"> 
                 
                 <a className="card-priority">
                   <Link href = "/login"><h3>Sign In &rarr;</h3></Link>
                   <p>For regular visitors</p>
                 </a>

                 <a className="card">
                   <Link href = "/signup"><h3>Sign Up &rarr;</h3></Link>
                   <p>For new visitors</p>
                 </a>

                 <a className="card">
                   <Link href = "/signup"><h3>Privacy &rarr;</h3></Link>
                   <p>For new visitors</p>
                 </a>

            


        </div>
        </>
        
      )}
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
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          transition: color 0.35s ease, border-color 0.35s ease;
          transition : 0.4s;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          background-color:white;
          color : blue;
          transform: scale(1.02);
          
        }

        .card-priority {
          margin: 1rem;
          flex-basis: 95%;
          padding: 1.5rem;
          text-align: center;
          color: white;
          
          background-image: linear-gradient(to bottom right, blue, #4267B2);
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.35s ease, border-color 0.35s ease;
          transition : 0.4s;
        }

        .card-priority:hover,
        .card-priority:focus,
        .card-priority:active {
          color: #0070f3;
          border-color: black;
          background-color:#4267B2;
          background-image: linear-gradient(to bottom right, blue, black);
          color : white;
          transform: scale(1.01);
          
        }

        .card-priority h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card-priority p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
             -khtml-user-select: none; /* Konqueror HTML */
               -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                          supported by Chrome, Edge, Opera and Firefox */
            
        }

        * {
          box-sizing: border-box;
        }
        
        


      `}</style>



    </div>
  );
}

export default Home;