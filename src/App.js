import React from 'react';
import Navi from './components/NavBar/Navbar';
import Caro from './components/Carousel/Caro';
import Card from './components/Cards/Card';
import PayCard from './components/PaymentCards/PayCard';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/Hero';
import ContactPage from './components/contact/contact';
import Pricing from './components/Pricing/Pricing';
import Intro from './components/Intro/Intro';
import FeaturesPage from './components/Feature/Feature';
import Services from './components/Services/Services';


function App() {


  return (
    <div className='Mainpage'>
      <Intro />

      <Navi  />
      
      <Hero />
      
      <div className='Feature' >
      <FeaturesPage />
      </div>
      
      
      <div className='Service'>
      <Services />
      </div>
      <div className='pCards'>
        <Pricing />
      </div>

     
      <div className='Contact'>
        <div className='Cards'>
          
      
        </div>
        <div className='Msg'>
          <ContactPage />
        </div>
      </div>
      <Footer />

    </div>
   
  );
}

export default App;
