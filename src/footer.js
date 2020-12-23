import React from 'react';
const Footer = () => {
    return (       <footer>
        <div>
            <p className="footer-heading">Edyoda</p>
            <a href="/" className="footer-link">About Us</a>
            <a href="/" className="footer-link">Contact Us</a>
            <a href="/" className="footer-link">Term of Use</a>
            <a href="/" className="footer-link">Privacy Policy</a>
        </div>
        <div>
            <p className="footer-heading">Resources</p>
            <a href="/" className="footer-link">Courses</a>
            <a href="/" className="footer-link">Learning Video</a>
            <a href="/" className="footer-link">Educators</a>
            <a href="/" className="footer-link">Edyoda Stories</a>
            <a href="/" className="footer-link">University</a>

        </div>
        <div>
            <p className="footer-heading">For Enterprises</p>
            <a href="/" className="footer-link">Train Your Employees</a>
            <p className="footer-heading">Quick Links</p>
            <a href="/" className="footer-link">Learn and Earn</a>
            <a href="/" className="footer-link">Become a Learning-Enabler</a>
            <a href="/" className="footer-link">Tips for Learing-Enabler</a>
            <a href="/" className="footer-link">Request New Topic</a>
        </div>
        <div>
            <p className="footer-heading">Connect</p>
            <a href="/" className="footer-link">2nd Floor #188, Survey No. - 123/1,<br/>Incubes Building Next to McDonalds,<br/>ITPL Main Rd, Brookefield,<br/>Bengaluru, Karnataka-560037,<br/>India<br/></a>
          <div className="email_wrapper">  <a href="/" className="footer-link"><i className="far fa-envelope email"></i>hello@edyoda.com</a></div>
          <div className="social_icon footer-link"><i className="fas fa-map-marker-alt"></i><i className="fab fa-twitter"></i><i className="fab fa-facebook-f"></i><i className="fab fa-linkedin-in"></i></div> 
            <a href="/" className="footer-link">© 2020 <br/>zekeLabs Technologies Private Limited</a>
        </div>

    </footer>
 );
}
 
export default Footer;