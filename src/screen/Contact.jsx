import React,{useState} from 'react'
import './Home.css';
import Navbar from '../Components/Navbar/Navbar';
import Form from '../Components/Form/Form';
import Footer from '../Components/Footer/Footer';

function App() {

  const [address,setAddress] = useState('')
  const [subject,setsubject] = useState('')
  const [help,sethelp] = useState('')

  function onClick(){
    console.log(address,subject,help)
  }

  return (
    <div className="flex-container App">
      <Navbar />
      <div className="flex-container App5">
        <div className="App-header6">
        <h1 className='heading'>Contact Us</h1>
        <p className='para'>
          At Moz, we believe there is a better way to do marketing. 
          A more valuable way where customers are earned rather than bought.<a href="https://moz.com/blog/category/whiteboard-friday">Sign in</a>!). 
          We're obsessively passionate about it, and our mission is to help people achieve it. 
          We focus on search engine optimization. 
        </p>
        </div>
        <div className="App-header7">
          <form className='form'><br/>
          <Form formLabel={'Enter your Address:'} value={address} onChange={(e)=>setAddress(e.target.value)} />
          <Form style={{marginTop:15}} formLabel={'Subject:'} value={subject} onChange={(e)=>setsubject(e.target.value)}/>
          <Form style={{marginTop:15}} formLabel={'How can you Help?'} value={help} onChange={(e)=>sethelp(e.target.value)} />
            <button type="button" className='button' onClick={onClick}>Send</button><br/>
            <a href="https://moz.com/blog/category/whiteboard-friday">Privacy Policy</a>
          </form>
        </div>
      </div>
      <Footer />      
    </div>  
  );
}


export default App;
