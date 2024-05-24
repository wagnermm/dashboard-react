import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardTitle, CardBody } from 'reactstrap';

function Cards() {
  const [contacts, setContacts] = useState(0);
  const [campaign, setCampaign] = useState(0);
  const [notification, setNotification] = useState(0);
  const handleGetTotalCampaign = async () => {
    try {
      const res = {
        "broadcastList": 108,
        "offer": 45,
        "status": 40
    };
  
      let totalCampaign = 0;
  
      Object.keys(res).forEach(key => {
        totalCampaign += res[key];
      });

      const formattedTotal = totalCampaign.toFixed(0).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      setCampaign(formattedTotal);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetTotalContact = async () => {
    try {
      const res = {
        "total": 67
    };

      let totalContact = 0;

      Object.keys(res).forEach(key => {
        totalContact += res[key];
      });

      const formattedTotal = totalContact.toFixed(0).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      setContacts(formattedTotal);

    } catch (error) {
      console.error(error);
    }
  };

  const handleGetTotalNotification = async () => {
    try {
      const res = [
        {
            "channelName": "Sendio Demonstração",
            "totalList": 28,
            "totalNotifications": 4250,
            "channelId": "64de7bc475b1d48d567d7931"
        },
        {
            "channelName": "Sendio Canal 2",
            "totalList": 3,
            "totalNotifications": 2,
            "channelId": "65f1e08c990a0c40e72154db"
        }
    ];
    
      let totalNotification = 0;

      res.forEach(item => {
        totalNotification += item.totalNotifications;
      });
      
      const formattedTotal = totalNotification.toFixed(0).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      setNotification(formattedTotal);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetTotalCampaign();
    handleGetTotalContact();
    handleGetTotalNotification();
  }, []);

  return (
    <Container fluid>
        <Row style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            <Col>
                <Card style={{ width:'300px', padding:'20px', backgroundColor:'#00bf63', color:'#fff', borderRadius:'5px'}}>
                <CardTitle style={{fontSize:'20px'}} className='p-2 text-center'>
                    Contatos
                </CardTitle>
                <CardBody style={{fontSize:'52px', textAlign:'center', fontWeight:'600'}}>
                    {contacts}
                </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{ width:'300px', padding:'20px', backgroundColor:'#daa520', color:'#fff', borderRadius:'5px'}}>
                <CardTitle style={{fontSize:'20px'}} className='fs-5 p-2 text-center'>
                    Atendimentos
                </CardTitle>
                <CardBody style={{fontSize:'52px', textAlign:'center', fontWeight:'600'}}>
                    {campaign}
                </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{ width:'300px', padding:'20px', backgroundColor: '#008b8b',color:'#fff', borderRadius:'5px'}}>
                <CardTitle style={{fontSize:'20px'}} className='fs-5 p-2 text-center'>
                    Notificações
                </CardTitle>
                <CardBody style={{fontSize:'52px', textAlign:'center', fontWeight:'600'}}>
                    {notification}
                </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
  );
};

export default Cards