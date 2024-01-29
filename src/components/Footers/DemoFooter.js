/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
import info from "../../data/info.json";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  onClick={() => window.open(`https://wa.me/${info.tel}`, '_blank')}
                >
                  Klu
                </a>
              </li>
              <li>
                <a
                onClick={() => window.open(`https://wa.me/${info.tel}`, '_blank')}
                >
                  Bilgisayar Programcılığı
                </a>
              </li>
              <li>
                <a
                onClick={() => window.open(`https://wa.me/${info.tel}`, '_blank')}
                >
                  Girişimcilik
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto" onClick={() => window.open(`https://wa.me/${info.tel}`, '_blank')}>
            <span className="copyright">
              © {new Date().getFullYear()}, Girişimcilik{" "}
              <i className="fa fa-heart heart" />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
