import React, { useState } from 'react';
import { 
    Container, 
    Row, 
    Col,
    Collapse,
    Card,
    CardBody,
    Button
} from 'reactstrap';
import axios from 'axios';
import Clicked from '../../assets/images/touch.png';
import '../../assets/styles/Menu.css';

class AllTeams extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/raissadt-xapiens/Xapiens-Refactory/main/Week-4/Day20/developing-web/src/data/about.json")
        .then(res => {
            const data = res.data;
            this.setState({ data })
        })
        .catch(res => {
            this.setState({
                data: {
                    text: "Can't load data!"
                }
            });
        });
    };

        render() {
            console.log(this.state);
            return (
                <div>
                    <Container>
                        <Row>
                            {this.state.data.map(data => {
                                return (
                                    <div key={data.id}>
                                        <h1 className="continent-headline">{data.headline}</h1>
                                        <h3 className="continent-description" style={{fontWeight: "900"}}>{data.description}</h3>
                                        <h3 className="continent-description">{data.text1}</h3>
                                        <br/>
                                        <h3 className="continent-description">{data.text2}</h3>
                                        <br/>
                                        <h3 className="continent-description">{data.text3}</h3>
                                        <br/>
                                    </div>
                                );
                            })}
                        </Row>
                        <Row>
                            <Col>
                                <h4 className="continent-join">
                                    JOIN OIPA
                                    <br/>
                                    <img src={Clicked} alt="Click here" style={{width: "35px", height: "35px"}} />
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

    
    // return (
    //     <div>
    //         <Container>
    //             <Row>
    //                 <Col>
    //                     <h1 className="continent-headline">
    //                         Around The World
    //                     </h1>
    //                     <h3 className="continent-description">
    //                         <span><strong>OIPA has 222 member leagues, in 5 continents and 61 countries</strong></span>
    //                         <br/>
    //                         OIPA, International Organization for Animal Protection, is an International Confederation of associations for the animal protection and for the defence of animal rights all over the world.
    //                         <br/>
    //                         OIPA is composed by member leagues: affiliated associations which support OIPA campaigns and projects. The member leagues are authonomous and indipendent associations, they cooperate with OIPA on achieveing common objective on animal issues.
    //                         <br/>
    //                         Furthermore, OIPA International has 6 delegations: in Cameroon, in India, in Nepal, in Tanzania, in Mexico and the headquarters in Italy. The delegations act as detached offices and focus on local campaigns, they rely on the headquarters for the main international campaigns. Each delegation has a national representative. See the list below.
    //                     </h3>
    //                 </Col>
    //             </Row>
    //             <Row>
    //                 <Col>
    //                     <h4 className="continent-join">
    //                         JOIN OIPA
    //                         <br/>
    //                         <img src={Clicked} alt="Click here" style={{width: "35px", height: "35px"}} />
    //                     </h4>

    //                 </Col>
    //             </Row>
    //             <h2 className="continent-tagline">Africa</h2>
    //             <Row className="continent-row">
    //                 <Button className="continent-button" onClick={toggle}>Kenya</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Kenya have been already take actions for 12 years since 1992. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Nigeria</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Nigeria have been already take actions for 8 years since 1998. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Tanzania</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Tanzania have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //             </Row>
    //             <hr/>
    //             <h2 className="continent-tagline">America</h2>
    //             <Row className="continent-row">
    //                 <Button className="continent-button" onClick={toggle}>Argentina</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Argentina have been already take actions for 15 years since 2005. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Brazil</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Brazil have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Chile</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Chile have been already take actions for 4 years since 2016. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Mexico</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Mexico have been already take actions for 8 years since 2012. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //             </Row>
    //             <hr/>
    //             <h2 className="continent-tagline">Asia</h2>
    //             <Row className="continent-row">
    //                 <Button className="continent-button" onClick={toggle}>India</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA India have been already take actions for 20 years since 1984. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Nepal</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Nepal have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Myanmar</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Myanmar have been already take actions for 3 years since 2017. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Turkey</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Turkey have been already take actions for 12 years since 1992. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //             </Row>
    //             <hr/>
    //             <h2 className="continent-tagline">Australia</h2>
    //             <Row className="continent-row">
    //                 <Button className="continent-button" onClick={toggle}>Melbourne</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Melbourne have been already take actions for 10 years since 2010. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>Vanuatu</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Vanuatu have been already take actions for 5 years since 2015. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //             </Row>
    //             <hr/>
    //             <h2 className="continent-tagline">Europe</h2>
    //             <Row className="continent-row">
    //                 <Button className="continent-button" onClick={toggle}>Italy</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA Italy have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //                 <Button className="continent-button" onClick={toggle}>UK</Button>
    //                 <Collapse isOpen={isOpen}>
    //                     <Card>
    //                         <CardBody>
    //                             OIPA United Kingdom have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
    //                             <br/>
    //                             <br/>
    //                             <a className="continent-link" href="!#" noreferer noopener>Contact</a>
    //                         </CardBody>
    //                     </Card>
    //                 </Collapse>
    //             </Row>
    //             <hr/>
    //             <br/>
    //             <br/>
    //             <br/>
    //         </Container>
    //     </div>
    

export default AllTeams;




// import React, { useState } from 'react';
// import { 
//     Container, 
//     Row, 
//     Col,
//     Collapse,
//     Card,
//     CardBody,
//     Button
// } from 'reactstrap';
// import Clicked from '../../assets/images/touch.png';
// import '../../assets/styles/Menu.css';

// function AllTeams(props) {

//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);

    
//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Col>
//                         <h1 className="continent-headline">
//                             Around The World
//                         </h1>
//                         <h3 className="continent-description">
//                             <span><strong>OIPA has 222 member leagues, in 5 continents and 61 countries</strong></span>
//                             <br/>
//                             OIPA, International Organization for Animal Protection, is an International Confederation of associations for the animal protection and for the defence of animal rights all over the world.
//                             <br/>
//                             OIPA is composed by member leagues: affiliated associations which support OIPA campaigns and projects. The member leagues are authonomous and indipendent associations, they cooperate with OIPA on achieveing common objective on animal issues.
//                             <br/>
//                             Furthermore, OIPA International has 6 delegations: in Cameroon, in India, in Nepal, in Tanzania, in Mexico and the headquarters in Italy. The delegations act as detached offices and focus on local campaigns, they rely on the headquarters for the main international campaigns. Each delegation has a national representative. See the list below.
//                         </h3>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <h4 className="continent-join">
//                             JOIN OIPA
//                             <br/>
//                             <img src={Clicked} alt="Click here" style={{width: "35px", height: "35px"}} />
//                         </h4>

//                     </Col>
//                 </Row>
//                 <h2 className="continent-tagline">Africa</h2>
//                 <Row className="continent-row">
//                     <Button className="continent-button" onClick={toggle}>Kenya</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Kenya have been already take actions for 12 years since 1992. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Nigeria</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Nigeria have been already take actions for 8 years since 1998. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Tanzania</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Tanzania have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                 </Row>
//                 <hr/>
//                 <h2 className="continent-tagline">America</h2>
//                 <Row className="continent-row">
//                     <Button className="continent-button" onClick={toggle}>Argentina</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Argentina have been already take actions for 15 years since 2005. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Brazil</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Brazil have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Chile</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Chile have been already take actions for 4 years since 2016. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Mexico</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Mexico have been already take actions for 8 years since 2012. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                 </Row>
//                 <hr/>
//                 <h2 className="continent-tagline">Asia</h2>
//                 <Row className="continent-row">
//                     <Button className="continent-button" onClick={toggle}>India</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA India have been already take actions for 20 years since 1984. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Nepal</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Nepal have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Myanmar</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Myanmar have been already take actions for 3 years since 2017. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Turkey</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Turkey have been already take actions for 12 years since 1992. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                 </Row>
//                 <hr/>
//                 <h2 className="continent-tagline">Australia</h2>
//                 <Row className="continent-row">
//                     <Button className="continent-button" onClick={toggle}>Melbourne</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Melbourne have been already take actions for 10 years since 2010. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>Vanuatu</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Vanuatu have been already take actions for 5 years since 2015. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                 </Row>
//                 <hr/>
//                 <h2 className="continent-tagline">Europe</h2>
//                 <Row className="continent-row">
//                     <Button className="continent-button" onClick={toggle}>Italy</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA Italy have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                     <Button className="continent-button" onClick={toggle}>UK</Button>
//                     <Collapse isOpen={isOpen}>
//                         <Card>
//                             <CardBody>
//                                 OIPA United Kingdom have been already take actions for 22 years since 1982. Some of them are campaigns from many issues from strays and hunting animals. 
//                                 <br/>
//                                 <br/>
//                                 <a className="continent-link" href="!#" noreferer noopener>Contact</a>
//                             </CardBody>
//                         </Card>
//                     </Collapse>
//                 </Row>
//                 <hr/>
//                 <br/>
//                 <br/>
//                 <br/>
//             </Container>
//         </div>
//     )
// }

// export default AllTeams;