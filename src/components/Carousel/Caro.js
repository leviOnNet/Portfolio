import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import flow from './data/images/Flowpic.png'
import fullstack from './data/images/fulldev.jpeg'
import './Caro.css'

export default function Caro() {
  return (
   
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner className='Pic'>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={flow} alt='...' className='Pic' />
          <MDBCarouselCaption>
            <h5 style={{color:'black'}}>Microsoft</h5>
            <p style={{color:'black'}}>PowerApps, Sharepoint, Forms, Power Automate and PowerBI</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={fullstack} alt='...' />
          <MDBCarouselCaption>
            <h5>Full Stack Wep App Development
            </h5>
            <p>SQL databases, Django framework, Python APIs and ReactJs</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        
      </MDBCarouselInner>
    </MDBCarousel>
  
  );
}