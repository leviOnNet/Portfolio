import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';
import {Link} from 'react-scroll';
import './nav.css';


export default function Navi(){
    const [showNavRight, setShowNavRight] = useState(false);
    const [navBar,SetNavBar] = useState();
    const [Xnav,SetXnav] = useState();

    const changeBackground = () => {
        if (window.scrollY >= 90){
            SetNavBar(true);
        }
        else{
            SetNavBar(false);
        }
    };
      
    

    window.addEventListener('scroll',changeBackground);    
    return(
    <div  className='UpperNav'>
    <MDBNavbar  className={navBar ? 'NavBar active' : 'NavBar'}>
      <div className='innerNav'>
     

       //d-flex justify-content-center
          <MDBNavbarNav left fullWidth={false} className="CtrNav" >
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <h4 style={{color:'white'}} className="navp" >Home</h4>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <h4 style={{color:'white'}} className="navp"><Link  to="about" spy={true} smooth={true}>About Me</Link></h4>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <h4 style={{color:'white'}} className="navp"><Link  to="service" spy={true} smooth={true}>What I do?</Link></h4>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <h4 style={{color:'white'}} className="navp"><Link  to="contact" spy={true} smooth={true}>Contact</Link></h4>
              </MDBNavbarLink>
            </MDBNavbarItem>
            

          </MDBNavbarNav>
       
      
      </div>
    </MDBNavbar>
    </div>
    );
}

