import './News.css';
import Navbar from '../Components/Navbar/Navbar';
import image1 from '../Asset/image1.webp';
import image2 from '../Asset/image2.webp';
import image3 from '../Asset/image3.webp';
import image4 from '../Asset/image4.webp';
import image5 from '../Asset/image5.webp';
import image6 from '../Asset/image6.webp';
import image7 from '../Asset/image7.webp';
import image8 from '../Asset/image8.webp';
import Footer from '../Components/Footer/Footer';
import Sheffield from '../Components/Sheffield/Sheffield';

function App() {
  return (
    <div className="flex-container App">
      <Navbar />
      <div className="App-News">
        <h1 className='Heading'>Cricket News and Editorials</h1>
      </div>
      <div className="App-Sheffield">
          {SheffieldData.map(dt=>(
          <div className='Sheffieldpad'>
          <Sheffield SheffieldImage={dt.image} SheffieldText1={dt.text1} SheffieldHeading={dt.heading} SheffieldText={dt.text} SheffieldText2={dt.text2}/>
          </div>))}
      </div>
      <Footer />      
    </div>  
  );
}

const SheffieldData = [
  {
    image:image1,
    text1:'REPORTS • SHEFFIELD SHIELD, 2021-22',
    heading:'Sheffield Shield Final: Will Sutherland leads Victorias fightback',
    text:'From 290/3, Western Australia were bowled out for just 386 before picking up three wickets in Victorias inning',
    text2:'12m ago',
  },
  {
    image:image2,
    text1:'NEWS • RETIREMENT NEWS',
    heading:'Former Australia wicketkeeper Peter Nevill announces retirement',
    text:'The 36-year-old played 17 Tests and 9 T20Is for Australia with his final appearance coming in November 2016',
    text2:'8h ago',
  },
  {
    image:image3,
    text1:'REPORTS • BANGLADESH TOUR OF SOUTH AFRICA, 2022',
    heading:'Bavuma falls short of ton as Bangladesh chip away',
    text:'The hosts were 314/8 when lunch was taken',
    text2:'49m ago',
  },
  {
    image:image4,
    text1:'MATCH FEATURES • LSG VS CSK, IPL 2022',
    heading:'An evening of two halves for Shivam Dube',
    text:'In T20 cricket, its a quick turnaround from a hero to a zero. Dube realised it the hard way against LSG at Brabourne',
    text2:'10h ago',
  },
  {
    image:image5,
    text1:'MATCH FEATURES • LSG VS CSK, IPL 2022',
    heading:'Out of place, not out of sight is Evin Lewis',
    text:'A spot lower down the order at LSG? It didnt matter for Lewis who scored 23-ball 55* in a record chase against CSK',
    text2:'10h ago',
  },
  {
    image:image6,
    text1:'NEWS • RECORD CHASE',
    heading:'Babar, Imam hit centuries in Pakistans record chase',
    text:'The pair nullified Ben McDermotts maiden ODI hundred as Pakistan overcame Australias 348/8 - their highest successful chase in ODIs',
    text2:'17h ago',
  },
  {
    image:image7,
    text1:'FEATURES • SOUTH AFRICA VS BANGLADESH, 2022',
    heading:'Good start and a fumble in SAs quest to end bad habit',
    text:'South Africa have lost the first match of their previous 15 series, regardless of format, 11 times',
    text2:'17h ago',
  },
  {
    image:image8,
    text1:'REPORTS • AUSTRALIA TOUR OF PAKISTAN, 2022',
    heading:'Ben McDermotts maiden ton fires Australia to 348',
    text:'Labuschagne struck a half-century while Stoinis got 49 to help the visitors dominate against Pakistan',
    text2:'21h ago',
  },
]

export default App;
