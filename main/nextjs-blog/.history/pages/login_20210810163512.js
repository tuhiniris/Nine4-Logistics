import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import Head from 'next/head'
import Link from 'next/link'
import NextNprogress from 'nextjs-progressbar';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/posts/quickstep');
        }
      });
  }



  return (
    

    <div className="container">
      
      
      <NextNprogress
  color="orange"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
  showSpinner = {false}
  options={{ easing: 'ease', speed: 500, showSpinner: true }}
/>
      
      
      
      
      
      <Head>
      <title>Nine4 Logistics - Sign In
      </title>
      <link rel="icon" href="/nine4-logo.png" />
    </Head>
    
    <main>

   
 <h1 className="title">
          Nine4 <Link href = "/"><a>Logistics</a></Link>
        </h1>


    <form onSubmit={handleSubmit} className="myform2">
    
    
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />



        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Submit" />
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

      </form>
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


        
        .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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

        .logo2 {
          height: 15em;
          padding-top : 0.1rem;
          margin-top : -3em;
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




  
};

export default Login;
