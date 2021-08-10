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
    <title>Nine4 Logistics - Sign Up
    </title>
    <link rel="icon" href="/nine4-logo.png" />
  </Head>





  <h1 className="title">
          Nine4 <Link href = "/"><a>Logistics</a></Link>
          
        </h1>
        <p>
        <code className="noselect">Register Now</code>
        </p><br></br><br></br>


    <form onSubmit={handleSubmit}>
      <p>Sign Up</p>
      <label htmlFor="email">
        email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>

      <br />

      <label for="password">
        password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>

      <br />

      <input type="submit" value="Submit" />
      {signupError && <p style={{color: 'red'}}>{signupError}</p>}
    </form>
</div>




  );
};

export default Signup;
