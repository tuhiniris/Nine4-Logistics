import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import Head from 'next/head'
import Link from 'next/link'
import NextNprogress from 'nextjs-progressbar';
import fetch from 'isomorphic-unfetch';

const Signup = () => {
  const [signupError, setSignupError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          setSignupError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
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
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
    <title>Nine4 Logistics - Sign Up
    </title>
    <link rel="icon" href="/nine4-logo.png" />
  </Head>


<main>


  <h1 className="title">
          Nine4 <Link href = "/"><a>Logistics</a></Link>
          
        </h1>
        <p>
        <code className="noselect">Register Now | <Link href = "/"><a2>Login Now</a2></Link></code>
        </p><br></br><br></br>


    <form onSubmit={handleSubmit} className="myform2">
      
      <label htmlFor="email">
        
        <input
          value={email}
          placeholder = "Email-ID"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>     

      <label for="password">
        
        <input
          value={password}
          placeholder = "Password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>

      <br />

      <input type="submit" value="Submit" />
      {signupError && <p style={{color: 'red'}}>{signupError}</p>}
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


          background:linear-gradient(0deg, rgba(255, 0, 0, 0.3), rgba(89, 0, 255, 0.3)), url("https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?crop=entropy&cs=srgb&dl=pexels-trace-hudson-2529973.jpg&fit=crop&fm=jpg&h=1536&w=1920");
          
          background-size: 1920px 1080px;
          background-blend-mode:soft-light;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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

        .myform2{
          font-family: monospace;
          padding-left: 5px;
        }

        nand{
          color:white;
          margin-right: 5px;
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

        a2:hover{
          transition: 0.3s;
          color: red;
          background: white;
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

export default Signup;
