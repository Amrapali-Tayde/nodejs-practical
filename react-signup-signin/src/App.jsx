import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("count:", count);
  }, [count])

  async function postData() {
    try {


      alert('Hi');
      // Default options are marked with *
      //var url = "https://silver-space-dollop-jj45wqwx47jgfqwj9-8000.app.github.dev/user";
      var url = "https://silver-space-dollop-jj45wqwx47jgfqwj9-8000.app.github.dev/page2";

      console.log(email, password);

      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email: email, password: password })
      });
      alert(response.json());
      return response.json();
    } catch (error) {

      alert(error);
    }

    // return response.json(); // parses JSON response into native JavaScript objects
    // console.log(response.json());
  }



  return (
    <>
      <div>
        {count}
        <input type="email" name='email' placeholder='Enter email ID' onChange={e => setEmail(e.target.value)} />

        <input type="password" name='password' placeholder='Enter password' onChange={e => { setPassword(e.target.value) }} />

        <hr />

        <button type='button' onClick={async () => { setCount(count + 1) }}>Submit</button>
      </div>
    </>
  )   //    //(value)=>{ setEmail(value); console.log(value); }
}

export default App
