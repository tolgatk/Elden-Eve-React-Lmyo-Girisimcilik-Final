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
import React, { useEffect, useRef, useState } from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import data from "../data/data.json";
import categories from "../data/categories.json";
import info from "../data/info.json";
import { useHistory } from "react-router-dom/cjs/react-router-dom";



//css sıkıntısı dolayısıyla program calıştığında body deki index classını siliyor
function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  useEffect(() => {
    console.log(data)
  },[])

  const history = useHistory();
  let [selectedCategory,setSelectedCategory] = useState("");
  let ref = useRef();


  //jsx
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Ev Lezzetleri Kapınızda, Ev Hanımları İçin Yeni Bir İş Kapısı!</h2>
                <h5 className="description">
                <p>Elden Eve: Lezzeti Evden Eve Taşıyoruz!</p>

                <p>Elden Eve, ev hanımlarının mutfaklarından sofranıza özenle hazırlanan lezzetleri sunan bir online yemek platformudur. Sadece bir tık uzağınızda, ev hanımlarımızın elinden çıkan sağlıklı ve ev yapımı yemekleri keşfedin.</p>

                <p>Neden Elden Eve?</p>

                <p>🏡 Ev Hanımlarının Dokunuşu: Satıcılarımız sadece mükemmel yemekler yapmakla kalmıyor, aynı zamanda bir iş kapısını da aralıyor. Elden Eve, ev hanımlarına kendi mutfağından para kazanma fırsatı sunuyor.</p>

                <p>🌿 Sağlıklı ve Taze: Her bir yemek, en kaliteli malzemelerle hazırlanır. Sağlığınıza önem verenler için ideal bir tercih!</p>

                <p>🚀 Kolay ve Hızlı: Elden Eve ile yemek siparişi vermek çok kolay! Sadece seç, sipariş ver ve lezzetin kapına gelsin.</p>

                <p>Nasıl Çalışır?</p>

                <p>Sipariş Ver: Çeşitli ev yapımı yemekler arasından favorinizi seçin.
Satıcı Seçin: Hangi ev hanımının ellerinden çıkan lezzeti denemek istediğinizi seçin.
Teslimatı Bekleyin: Kapınıza kadar gelen sağlıklı ve lezzetli yemeğin keyfini çıkarın.
Elden Eve ailesine katılın, geleneksel lezzetleri modern bir şekilde yaşayın!</p>

<p>Şimdi Sipariş Vermeye Hazır mısınız?</p>
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  onClick={() => window.open(`https://wa.me/${info.tel}`, '_blank')}
                >
                  İLETİŞİM
                </Button>
              </Col>
            </Row>
            {/* // KATAGORİLER EKRANA LİSTELENİR */}
            <br />
            <br />
            <Row>
              
              {categories.map((category) => {
                return (
                  <Col md="3">
                    <div className="info">
                      <div className="description">
                        <h4 className="info-title">{category.name}</h4>
                        <p className="description">
                          {category.description}
                        </p>
                        <Button className="btn-link" color="info" onClick={() => {
                          setSelectedCategory(category.name);
                          window.scrollTo(0,ref.current.offsetTop)
                          }}>
                          Görüntüle
                        </Button>
                      </div>
                    </div>
                  </Col>
                )
              })}
              
            </Row>
          </Container>
        </div>
      </div>
      <div>
        {/* SECİME GÖRE FİLTRE */}
        <Container>
          {selectedCategory && <p ref={ref} id="#kategori" style={{textAlign:"center",fontSize:"24px",fontWeight:"800"}}>{selectedCategory}</p>}
          <Row>
            {data.map((item,index) => {
              if(selectedCategory === item.category || selectedCategory === ""){
                return (
                  <Col style={{cursor:"pointer"}} key={index} md="4" onClick={(e) => {
                    if(!e.target.className.includes("fa fa-angle-")){
                      window.scrollTo(0, 0);
                      history.push(`/detay/${index}`)
                    }else {
                      console.log("girme")
                    }
                    }}>
                    <SectionCarousel items={item.images} name={item.name} heightValue={"200px"}/>
                  </Col>
                )
              }
            })}
            {/* <Col md="4">
              <SectionCarousel />
            </Col>
            <Col md="4">
              <SectionCarousel />
            </Col>
            <Col md="4">
              <SectionCarousel />
            </Col>
            <Col md="4">
              <SectionCarousel />
            </Col> */}
          </Row>
        </Container>
        
      </div>
      <div className="main">
        {/* <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples /> */}
        <SectionDownload />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
