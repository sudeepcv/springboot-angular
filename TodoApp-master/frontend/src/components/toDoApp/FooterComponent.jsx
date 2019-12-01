import React, { Component } from 'react';
export class FooterComponent extends Component {
    render() {
        return (

            <footer className="footer">
               
                <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
          <a href="https://basics-in-java.blogspot.com/"> basics-in-java.blogspot.com</a>
                </div>
              
            </footer>


        );
    }
}
export default FooterComponent;