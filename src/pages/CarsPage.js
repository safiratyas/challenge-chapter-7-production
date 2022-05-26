import React from "react";
import Header from '../components/Landing Page/Header/Header'
import Jumbotron from '../components/Cars Page/Jumbotron/JumbotronNoButton'
import Modal from '../components/Cars Page/Modal/Modal'
import Footer from '../components/Landing Page/Footer/Footer'

function CarsPage() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Modal />
      <Footer />
    </div>
  );
}

export default CarsPage;