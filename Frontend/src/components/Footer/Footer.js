import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedinIn, faGoogle, faGooglePay, faAmazonPay, faCcMastercard, faCcVisa, faCcDinersClub, faCcAmex, faCcPaypal, faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink} from 'react-router-dom';

export default function App() {
  return (
    <MDBFooter bgColor='none'  style={{ backgroundColor: '#b4eaed' }} className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: '#eef4ff' }}>
      <div className='me-5 d-none d-lg-block' >
        <span>Get connected with us on social networks:</span>
      </div>
        <div >
  
  <NavLink to='https://www.facebook.com/' className='me-4 text-reset'>
  <FontAwesomeIcon icon={faFacebook} />
  </NavLink>
  <NavLink to='https://www.twitter.com/' className='me-4 text-reset'>
  <FontAwesomeIcon icon={faTwitter} />
  </NavLink>
  <NavLink to='https://www.google.com/' className='me-4 text-reset'>
  <FontAwesomeIcon icon={faGoogle} />
  </NavLink>
  <NavLink to='https://www.instagram.com/' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faInstagram} />
  </NavLink>
  <NavLink to='https://www.linkedin.com/' className='me-4 text-reset'>
  <FontAwesomeIcon icon={faLinkedinIn} />
  </NavLink>
  <NavLink to='https://www.github.com/' className='me-4 text-reset'>
  <FontAwesomeIcon icon={faGithub} />
  </NavLink>
</div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
              Company name
              </h6>
              <p><NavLink to='#!' className='text-reset'>About Us</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Careers</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Blog</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Partner with PharmaFirst</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Sell at PharmaFirst</NavLink></p>
             
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Featured Categories
              </h6>
              <p><NavLink to='#!' className='text-reset'>Most Loved Brands</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Mega Clearance Sale</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Personal Care</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Healthcare Devices</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Health Food and Drinks</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Home Care</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Mother and Baby Care</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Diabetic Care</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Fitness Supplements</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Skin Care</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Sexual Wellness</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Accessories & Wearables</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Health Condition</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Ayurvedic Care</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Elderly Care</NavLink></p>
              <p><NavLink to='#!' className='text-reset'>Top Products</NavLink></p>
          
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Need Help</h6>
              <p>
                <NavLink to='#!' className='text-reset'>
                Browse All Medicines
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Browse All Molecules
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Browse All Cities
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Browse All Areas
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Browse All Stores
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                FAQs
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Policy Info
                </NavLink>
              </p> 
               <p>
                <NavLink to='#!' className='text-reset'>
                Browse All Areas
                </NavLink>
              </p>  
              <p>
                <NavLink to='#!' className='text-reset'>
                Editorial Policy
                </NavLink>
              </p> 
              
            </MDBCol>
            
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Policy Info</h6>
              
              <p>
                <NavLink to='#!' className='text-reset'>
                Vulnerability Disclosure Policy
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Terms and Conditions
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Customer Support Policy
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Return Policy
                </NavLink>
              </p>
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <p>
                <NavLink to='#!' className='text-reset'>
                Order Medicine
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Healthcare Products
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Lab Tests
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Find Nearest Collection Centre
                </NavLink>
              </p>
              <p>
                <NavLink to='#!' className='text-reset'>
                Surgeries
                </NavLink>
              </p>
            </MDBCol>

       
          </MDBRow>
        </MDBContainer>
      </section>
      
      <div className='p-2' style={{ backgroundColor: '#eef4ff' }}>
      <div>
        <h6>Our Payment Partners</h6>
          <NavLink to='https://www.facebook.com/' className='me-4 text-reset'>

  <FontAwesomeIcon icon={faGooglePay} />
 
  </NavLink>
  <NavLink to='https://www.facebook.com/' className='me-4 text-reset'>
  {/* <img src={} alt="Item2" />  */}

<FontAwesomeIcon icon={faAmazonPay} />
</NavLink>      
<NavLink to='https://www.facebook.com/' className='me-4 text-reset'>

<FontAwesomeIcon icon={faCcMastercard} />

</NavLink>      
<NavLink to='https://www.facebook.com/' className='me-4 text-reset'>

  <FontAwesomeIcon icon={faCcVisa} />
 
  </NavLink>     
   <NavLink to='https://www.facebook.com/' className='me-4 text-reset'>

<FontAwesomeIcon icon={faCcDinersClub} />

</NavLink>     
 <NavLink to='https://www.facebook.com/' className='me-4 text-reset'>

  <FontAwesomeIcon icon={faCcAmex} />
 
  </NavLink>     
   <NavLink to='https://www.facebook.com/' className='me-4 text-reset'>

  <FontAwesomeIcon icon={faCcPaypal} />
 
  </NavLink>      
  <NavLink to='https://www.facebook.com/' className='me-4 text-reset'>

  <FontAwesomeIcon icon={faCcStripe} />
 
  </NavLink>       
        
        </div>
    
      <div className='text-center p-4' style={{ backgroundColor: '#eef4ff' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://phamafirst.com/'>
        PharmaFirst.com
        </a>
      </div>
      </div>
    </MDBFooter>
  );
}