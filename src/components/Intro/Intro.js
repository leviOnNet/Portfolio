import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './ParallaxIntro.css';

class ParallaxIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <div id='parallaxintro'>
        
        <MDBView
          src={'https://user-images.githubusercontent.com/43012445/105452071-411e4880-5c43-11eb-8ae2-4de61f310bf9.gif'}
          fixed
          height = '20px'
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center' style={{color:'white'}}>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold' >
                 <p style={{color:'white'}}> Hi, I am Levis Masonde</p><br />
                  <span className='indigo-text font-weight-bold' >This is my freelence site</span>
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                  Check out what I have to offer.
                </h5>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className='py-5'>
              <MDBCol md='12' className='text-center'>
               
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default ParallaxIntro;