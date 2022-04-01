import './About.css';
import Navbar from '../Components/Navbar/Navbar';

import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className="flex-container App">
      <Navbar />
      <div className='ABOUTS'>
        <div>
          <image href=''></image>
        </div>
        <div className="App-About">
          <h1 className='AboutHeading'>HELLO, I'M PATRYCJA</h1>
          <p className='AboutPara'>I am a versatile graphic designer who can approach marketing projects from concept to implementation.</p>
        </div>
        <div className="App-About-Us">
          <h1 className='AboutMeHeading'>About Me</h1>
          <p className='AboutDesignPara'>
            The Design Blog features carefully selected good works from studios and designers from around the globe. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra.
          </p>
          <button type="button" className='btn-Contact'>Contact Me</button><br/>
          <p className='AboutFreePik'>
          Image from FreePik
          </p>
        </div>
      </div>
      <Footer />      
    </div>  
  );
}

// const AboutData = [
//   {
//     image:med,
//     text:'Generous medical, dental and vision coverage'
//   },
//   {
//     image:vacation,
//     text:'Open PTO policy with the expectation that you take at least 1 week off per quarter'
//   },
//   {
//     image:paid,
//     text:'10-16 weeks of fully paid parental, medical, or family leave'
//   },
//   {
//     image:plans,
//     text:'Company matches to retirement plans'
//   },
//   {
//     image:charitable,
//     text:'Volunteer time off and matching donations'
//   },
//   {
//     image:internet,
//     text:'Stipends for home internet'
//   },
//   {
//     image:transit,
//     text:'Remote-friendly culture, with the option to be in office in Ottawa, Raleigh-Durham, Seattle or Vancouver.'
//   },
//   {
//     image:tuition,
//     text:'Training through Mozzer U,reimbursement for conferences'
//   },
//   {
//     image:snacks,
//     text:'Cereal bar, healthy (and not-so-healthy)snacks, & beverages'
//   },
// ]
export default App;
