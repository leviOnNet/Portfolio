import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Pricing plans
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        I cater for different IoT business needs
      </p>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text blue rounded-top">
              <h2 className="number">From R 1 650</h2>
              <div className="version">
                <h5 className="mb-0">Bespoke Websites</h5>
              </div>
            </div>
            <MDBCardBody className="striped mb-1">
              <ul>
                <li>
                  <p className="mt-2">
                   
                    Custom domain
                  </p>
                </li>
                <li>
                  <p>
                    FrontEnd website
                  </p>
                </li>
                <li>
                  <p>
                    FUll Stack and data-driven Website
                    
                  </p>
                </li>
                <li>
                  <p>
                  24h Tech Support
                  </p>
                </li>
                <li>
                  <p>
                    
                    User Management{" "}
                  </p>
                </li>
              </ul>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text indigo rounded-top">
              <h2 className="number">From R500/pm</h2>
              <div className="version">
                <h5 className="mb-0">Office tools</h5>
              </div>
            </div>
            <MDBCardBody className="striped mb-1">
              <ul>
                <li>
                  <p className="mt-2">
                    
                    Microsoft office apps
                  </p>
                </li>
                <li>
                  <p>
                  Unlimited Users
                  </p>
                </li>
                <li>
                  <p>
                    
                  Tech Support
                  </p>
                </li>
                <li>
                  <p>
                    
                  Office Apps Training
                  </p>
                </li>
                
              </ul>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text deep-purple rounded-top">
              <h2 className="number">R150/hr</h2>
              <div className="version">
                <h5 className="mb-0">Tutoring</h5>
              </div>
            </div>
            <MDBCardBody className="striped mb-1">
              <ul>
                <li>
                  <p className="mt-2">
                    C++
                  </p>
                </li>
                <li>
                  <p>
                    React
                  </p>
                </li>
                <li>
                  <p>
                    Phython
                  </p>
                </li>
                <li>
                  <p>
                    Physics
                  </p>
                </li>
                <li>
                  <p>
                    Mathematics
                  </p>
                </li>
              </ul>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default EcommercePage;