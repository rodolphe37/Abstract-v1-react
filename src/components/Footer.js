import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="footer-main">
          <div className="row">  
            <div className="col-four tab-full mob-full footer-info">            
              <h4>About Our Site</h4>
              <p>
                Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu magna Duis cillum dolor officia esse mollit proident Excepteur exercitation nulla. Lorem ipsum In reprehenderit commodo aliqua irure labore.
              </p>
            </div> {/* end footer-info */}
            <div className="col-two tab-1-3 mob-1-2 site-links">
              <h4>Site Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div> {/* end site-links */}  
            <div className="col-two tab-1-3 mob-1-2 social-links">
              <h4>Social</h4>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Google+</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div> {/* end social links */} 
            <div className="col-four tab-1-3 mob-full footer-subscribe">
              <h4>Subscribe</h4>
              <p>Keep yourself updated. Subscribe to our newsletter.</p>
              <div className="subscribe-form">
                <form id="mc-form" className="group" noValidate="true">
                  <input type="email" defaultValue name="dEmail" className="email" id="mc-email" placeholder="Type & press enter" required /> 
                  <input type="submit" name="subscribe" />
                  <label htmlFor="mc-email" className="subscribe-message" />
                </form>
              </div>	      		
            </div> {/* end subscribe */}         
          </div> {/* end row */}
        </div> {/* end footer-main */}
        <div className="footer-bottom">
          <div className="row">
            <div className="col-twelve">
              <div className="copyright">
                <span>© Copyright Abstract 2020</span> 
                <span>Created by <a href="#">Rodolphe Augusto</a></span>		         	
              </div>
              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon icon-arrow-up" /></a>
              </div>         
            </div>
          </div> 
        </div> {/* end footer-bottom */}  
      </footer>
        
    )
}

export default Footer;
