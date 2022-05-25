import './App.css';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
      <Scroll>
        <div>
          <Navbar />
          <Main />
          <div class="title">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <Card />
          <Carousel />
          <Banner />
          <Accordion />
        </div>
      </Scroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
