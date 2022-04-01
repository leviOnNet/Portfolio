import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import './hero.css'
import blue from './data/blue.png'
import what from './data/what.png'
import untitled from './data/Untitled.png'
import quote from './data/quote.png'
import dpic from './data/do.png'
import lab from './data/lab.png'

export default function Hero() {
  return (
    <>
      <MDBContainer fluid >
          <div className='picClass' id="about">
            
          </div>
          <div className='picCoverClass'>
            
            <div className='leftCover'>
              <img src={dpic} />
            
            </div>
            <div className='rightCover'>
            <img src={lab} />
              <div className='ImageText'>
                <h5>MicroSoft Certified Developer</h5>
                <h5>Code Fiend</h5>
                <h6>I believe data has been and can continue to be used for good and advance us as a species.</h6>
              </div>
            </div>
            
          </div>
      </MDBContainer>
    </>
  );
}