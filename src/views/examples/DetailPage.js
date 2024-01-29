import DemoFooter from 'components/Footers/DemoFooter';
import ProfilePageHeader from 'components/Headers/ProfilePageHeader';
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Col, Container, Row } from 'reactstrap';
import info from "../../data/info.json";
import SectionCarousel from 'views/index-sections/SectionCarousel';
import SectionDownload from 'views/index-sections/SectionDownload';
import data from "../../data/data.json"

export default function DetailPage() {
  let { id } = useParams();
  let [price,setPrice] = useState('');
  let onChangePrice = (e)=>{
    setPrice(e.target.value)
 //   alert(price)
    

  }
  console.log(data[id].images[0])
  return (
    <div>
        <ExamplesNavbar />
        <ProfilePageHeader imgLink={data[id].images[0]} />
        <Container>
            <Row>
                <Col md="6">
                    <SectionCarousel items={data[id].images} name={data[id].name} heightValue={"400px"}/>
                </Col>
                <Col md="6">
                    <p style={{fontWeight:"800",marginTop:"70px",fontSize:"24px"}}>{data[id].name}</p>
                    <p style={{fontWeight:"400",marginTop:"5px",fontSize:"15px",color:"green"}}>{data[id].user}</p>
                    <p style={{marginTop:"10px"}}>{data[id].description}</p>
                    <p style={{fontWeight:"800",marginTop:"10px"}}>{data[id].price}₺ / Gün</p>
                    <div><input placeholder='Teklif Fiyatı Girin' value={price} onChange={onChangePrice} ></input></div>
                    
                    <Button
                        color="success"
                        type="button"
                        style={{marginRight:"10px",marginTop:"10px"}}
                        onClick={() => window.open(`https://wa.me/${info.telorder}${data[id].user}%20Adlı%20kişinin%20${data[id].name}%20Ürününü%20Sipariş%20Vermek%20İstiyorum`, '_blank')}
                        >
                        Sipariş ver
                    </Button>
                    <Button
                        color="info"
                        type="button"
                        style={{marginTop:"10px"}}
                        onClick={() => window.open(`https://wa.me/${info.telorder}${data[id].user}%20Adlı%20kişinin%20${data[id].name}%20Ürününü%20${price}%20TL'ye%20Sipariş%20Vermek%20İstiyorum`, '_blank')}
                        >
                        Teklif Ver
                    </Button>
                </Col>
            </Row>
        </Container>
        <SectionDownload />
        <DemoFooter />
    </div>
  )
}
