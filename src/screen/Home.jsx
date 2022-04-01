import './Home.css';
import happy from '../Asset/happy-mozzers.webp';
import gold from '../Asset/gold-roger-1.webp';
import year from '../Asset/10-years-of-moz-1.webp';
import vacation from '../Asset/vacation-2.svg';
import paid from '../Asset/paid-3.svg';
import plans from '../Asset/four-4.svg';
import med from '../Asset/med-1.svg';
import charitable from '../Asset/charitable-5.svg';
import internet from '../Asset/internet-6.svg';
import transit from '../Asset/transit-7.svg';
import tuition from '../Asset/tuition-8.svg';
import snacks from '../Asset/snacks-9.svg';
import young from '../Asset/youngstar.webp';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BenefitsCard from '../Components/BenefitsCard/BenefitsCard';
import FoundingComponents from '../Components/Founding/FoundingComponets';

function App() {
  return (
    <div className="flex-container App">
      <Navbar />
      <div className="App-header">
        <h1 className='heading'>The Moz Story</h1>
        <p className='para'>We know SEO.In fact, We wrote the blog on it</p>
      </div>
      <div className="App-header1">
        <p className='para'>
          At Moz, we believe there is a better way to do marketing. 
          A more valuable way where customers are earned rather than bought. 
          We're obsessively passionate about it, and our mission is to help people achieve it. 
          We focus on search engine optimization. 
          It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. 
          We're excited to simplify SEO for everyone through our software, education, and community.
        </p>
      </div>
      <div className="flex-container App1">
        {FoundingData.map((dt,i)=><FoundingComponents style={i%2 === 0 ? {backgroundColor:'#dfeeee'} :  {backgroundColor:'white',flexDirection:'row-reverse'}}  youngstar={dt.image} youngText={dt.heading} youngerText={dt.text} />)}
      </div>  
      <div className="flex-container App6">
        <h1 className='heading'>Benefits</h1>
        <div className="App-header8">
          {benfitsData.map(dt=><BenefitsCard cardImage={dt.image} cardText={dt.text} />)}
        </div>
      </div>
      <Footer />      
    </div>  
  );
}

const FoundingData = [
  {
    image:young,
    heading:'Our founding',
    text:'Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started as a blog and an online community where some of the worlds first SEO experts shared their research and ideas. We launched the Beginners Guide to SEO and our first Search Ranking Factors study, and that hub of industry expertise transformed into a small consulting firm and led us to create some of our first SEO tools.'
  },
  {
    image:happy,
    heading:'Early growth & funding',
    text:'After a glimpse of the demand, we our focus from consulting to our software, taking our first round of funding in 2007 to power the development of new tools and ideas. By 2009, we tallied our first 5,000 subscribers and codified our core values in the acronym TAGFEE, continuing to lead the industry with our educational content in an effort to demystify SEO (this is also when we started filming <a href="https://moz.com/blog/category/whiteboard-friday">Whiteboard Fridays</a>!).'
  },
  {
    image:gold,
    heading:'Series B Funding',
    text:'A series B investment from The Foundry Group propelled our efforts into the broader realm of inbound marketing,a concept that rejects pushy sales in favor of attracting customers with real value.We acquired a Twitter analytics tool called Followerwonk as well as GetListed, a local SEO tool that has evolved into todays Moz Local.'
  },
  {
    image:year,
    heading:'A new leaf',
    text:'With our broader marketing efforts in full swing, we rebranded from SEOmoz to Moz in 2013.We released a suite of campaign-based tools called Moz Analytics that included features for content,social media, and brand management in addition to links and rankings.We also celebrated 10 years in search and welcomed long-time Mozzer Sarah Bird as our new CEO.'
  },
]

const benfitsData = [
  {
    image:med,
    text:'Generous medical, dental and vision coverage'
  },
  {
    image:vacation,
    text:'Open PTO policy with the expectation that you take at least 1 week off per quarter'
  },
  {
    image:paid,
    text:'10-16 weeks of fully paid parental, medical, or family leave'
  },
  {
    image:plans,
    text:'Company matches to retirement plans'
  },
  {
    image:charitable,
    text:'Volunteer time off and matching donations'
  },
  {
    image:internet,
    text:'Stipends for home internet'
  },
  {
    image:transit,
    text:'Remote-friendly culture, with the option to be in office in Ottawa, Raleigh-Durham, Seattle or Vancouver.'
  },
  {
    image:tuition,
    text:'Training through Mozzer U,reimbursement for conferences'
  },
  {
    image:snacks,
    text:'Cereal bar, healthy (and not-so-healthy)snacks, & beverages'
  },
]

export default App;
