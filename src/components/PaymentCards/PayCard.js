import React,{ useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import Example from '../payModal/payModal'
import Popup from 'reactjs-popup';

import { 
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function PayCard() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  
  return (
      <div className='pCards'>
          <div style={{margin:'5px'}}>
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Microsoft</MDBCardTitle>
        <MDBCardText>PowerApps, Power Automate flows, SharePoint environment, Azure Maintanance and PowerBI reports for your Organization.</MDBCardText>
        <MDBBtn href='#'>Begin</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>R 500 p/m</MDBCardFooter>
    </MDBCard>
        </div>
        <div style={{margin:'5px'}} >
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Full Stack Web App Development</MDBCardTitle>
        <MDBCardText>Declarative full stack websites with MySQL database, Python Backend, Django Admin Portal and React FrontEnd</MDBCardText>
        <MDBBtn href='#'>Begin</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>R 2 500</MDBCardFooter>
    </MDBCard>
        </div>
        <div style={{margin:'5px'}}>
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Simple Websites</MDBCardTitle>
        <MDBCardText>Simple and minimallly beautifully designed static Website </MDBCardText>
        <MDBBtn id='now' onClick={toggleShow}>Begin Now</MDBBtn>
<div>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Modal title</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>...</MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </div>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>R 1 600</MDBCardFooter>
      
    </MDBCard>
    
         </div>
         
    </div>
  );
}