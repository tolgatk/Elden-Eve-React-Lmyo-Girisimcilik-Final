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
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import info from "../../data/info.json";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Daha Fazla Bilgi Al</h2>
              <p className="description">
                Merak ettiklerinizi sormak ve daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                onClick={() => window.open(`https://wa.me/${info.tel}`, '_blank')}
              >
                İletişime Geç
              </Button>
            </Col>
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
