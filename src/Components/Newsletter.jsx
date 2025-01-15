import { Col, Container, Row } from "react-bootstrap"
import News from '../assets/Group 37 (1).png'

function Newsletter() {
    return (
        <div className="my-5">
            <Container >
                <Row>
                    
                    
                    <div >
                            <img src={News} alt="Newlater image" className="news-container"/>
                        </div>
                  
                </Row>
            </Container>
        </div>
    )
}

export default Newsletter