import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Scroll from './components/Scroll-To-Top'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Banner from './components/Banner'
import Accordion from './components/Accordion'

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
