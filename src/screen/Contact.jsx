import './Home.css';
import Navbar from '../Components/Navbar/Navbar';
import Form from '../Components/Form/Form';
import Footer from '../Components/Footer/Footer';

function App() {
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
          <Form formLabel={'Enter your Address:'} />
          <Form style={{marginTop:15}} formLabel={'Subject:'} />
          <Form style={{marginTop:15}} formLabel={'How can you Help?'} />
            <button type="button" className='button'>Send</button><br/>
            <a href="https://moz.com/blog/category/whiteboard-friday">Privacy Policy</a>
          </form>
        </div>
      </div>
      <Footer />      
    </div>  
  );
}


export default App;
