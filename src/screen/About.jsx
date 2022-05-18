import './About.css';
import Navbar from '../Components/Navbar/Navbar';
import AboutImage from '../Asset/AboutImage.webp';
import { useNavigate } from "react-router-dom"; 
import Footer from '../Components/Footer/Footer';
// import React, { useState } from 'react';


function App() {

  // const [count, setCount] = useState(0);
  const navigate = useNavigate();
  // Declare multiple state variables!
  return (
    // Declare a new state variable, which we'll call "count"   
    <div className="flex-container App">
      <Navbar />
      <div className='ABOUTS'>
        <div className="App-About">
          <img src={AboutImage} className='AboutImage'></img>
          <h1 className='AboutHeading'>HELLO, I'M PATRYCJA</h1>
          <p className='AboutPara'>I am a versatile graphic designer who can approach marketing projects from concept to implementation.</p>
        </div>
        <div className="App-About-Us">
          <h1 className='AboutMeHeading'>About Me</h1>
          <p className='AboutDesignPara'>
            The Design Blog features carefully selected good works from studios and designers from around the globe. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra.
          </p>
          <button type="button" className='btn-Contact' onClick={() => navigate('/contact') } >Contact Me</button><br/>
          <p className='AboutFreePik'>
          Image from <a href="https://freepik.com/photos/woman">Freepik</a>
          </p>
          {/* <div>
            <p className='times'>You clicked {count} times</p>
            <button className='btncount' onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div> */}
          
        </div>
      </div>
      <Footer />      
    </div>  
  );
 }






export default App;


