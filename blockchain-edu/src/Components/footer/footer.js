import React, { Component } from 'react';

class Foot extends Component {
    render () {
        return (
            <>
            <footer id="footer">
            <a href="https://www.instagram.com/?hl=en" id="insta" className="fab fa-instagram"></a>
            <a href="https://www.linkedin.com" className="fab fa-linkedin" id="linked"></a>
            <a href="https://www.facebook.com" className="fab fa-facebook-square" id="face"></a>
            <br></br>
            <i id="copyright">© 2019 Elliot POC</i>
          </footer>
          </>
        )
    }
}

export default Foot;