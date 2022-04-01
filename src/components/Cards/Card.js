import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Card() {
  return (
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardImage position='top' alt='...' src='https://scontent.fpry1-1.fna.fbcdn.net/v/t1.6435-9/84743240_710587516137573_1865864300258656256_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeG6DMU8zLSaJ-erGhs4qYnbYIfOzz3rTWFgh87PPetNYS5SV43G5d1paAnY2dwnjW_UCjnmV4sppDxInLs0tQG-&_nc_ohc=uNZ_nHcqKGMAX-eyS6z&_nc_pt=5&_nc_eh=8ee8d35b14587754ccc47e689461a231&_nc_ht=scontent.fpry1-1.fna&oh=00_AT_He2N3T3p6EVyr3uujlFfVI6p0Kg2_UKEi2dVr8TonUA&oe=62528308' />
      <MDBCardBody>
        
        <MDBCardText>
          Microsoft Certified and Self taught developer.
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> <i className='fas fa-male me-3'></i>Levis Masonde</MDBListGroupItem>
        <MDBListGroupItem><i className='fas fa-home me-3'></i>Pretoria</MDBListGroupItem>
        <MDBListGroupItem></MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href='#'>Twitter</MDBCardLink>
        <MDBCardLink href='#'>Instagram</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
}