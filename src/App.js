import './App.css';
import Scroll from './components/Scroll-To-Top'
import Navbar from './components/Landing Page/Navbar/Navbar'
import Main from './components/Landing Page/Main/Main'
import Card from './components/Landing Page/Card/Card'
import Carousel from './components/Landing Page/Carousel/Carousel'
import Banner from './components/Landing Page/Banner/Banner'
import Accordion from './components/Landing Page/Accordion/Accordion'

function App() {
  return (
    <div className="App">
      <Scroll>
        <div>
          <Navbar />
          <Main />
          <Card />
          <Carousel />
          <Banner />
          <Accordion />
        </div>
      </Scroll>
    </div>
  );
}

export default App;
