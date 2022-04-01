import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const Services = () => {
  return (
    <section className="text-center my-5" id="service">
      <h2 className="h1-responsive font-weight-bold my-5">
        Services
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Services Offered by me include but not limited to
      </p>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/58.webp"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Bespoke websites</h4>
            <p className="grey-text">
              Get a Website made for your specific user-case and functionality, From Front-End websites to Data (Server) driven websites.
            </p>
            
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/project4.webp"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Business tools</h4>
            <p className="grey-text">
              Get PowerApps, PowerBI, Teams and Power Automate intergrated into your Microsoft Work Environment. Link up your team, work faster and more efficiently.
              Create and manage your internal 2022 sql server and databases.
            </p>
            
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/88.webp"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Tutoring</h4>
            <p className="grey-text">
              Entry Level Programming in C++, React JS, Phython, APIs.
            </p>
            
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Services;