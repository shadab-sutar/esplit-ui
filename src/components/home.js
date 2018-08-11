import React, { Component } from 'react';

import '../App.css';

//React MDL components import
import { Layout, Header, Navigation, Card, CardTitle, CardText, CardActions, Button,
         Content, Drawer, Footer, FooterSection, FooterDropDownSection,
         FooterLinkList } from 'react-mdl';

class home extends Component {
    render() {
        return (
            <div>
                <Layout fixedHeader>
                    <Header title="Welcome: User!" scroll>
                        <Navigation>
                            <a href="/#/home">Home</a>
                            <a href="/#/settings">Settings</a>
                            <a href="/#/payments">Payments</a>
                            <a href="/#/home">Help</a>
                        </Navigation>
                    </Header>
                    <Drawer />
                    <Content>
                    <div className="big-banner">
                        <div className="col-left">
                            <h3>Last Payment:300INR</h3>
                            <p>Towards : Amazon.com</p>
                        </div>
                        <div className="col-right">
                            <h3>Last Payment:300INR</h3>
                            <p>Towards : Amazon.com</p>
                        </div>
                    </div>
                    <div className="items">
                        <h3>Your Items</h3>
                        <p className="border"></p>
                        <Card shadow={0} style={{width: '320px', height: '120px', float:'left', margin:'10px'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Credit Card</CardTitle>
                            <CardText>
                                HDFC Master Card
                            </CardText>
                            <CardActions border>
                                <Button colored>Details</Button>
                            </CardActions>
                        </Card>
                        <Card shadow={0} style={{width: '320px', height: '120px', float:'left', margin:'10px'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Bank Account</CardTitle>
                            <CardText>
                                Bank of America
                            </CardText>
                            <CardActions border>
                                <Button colored>Details</Button>
                            </CardActions>
                        </Card>
                        <Card shadow={0} style={{width: '320px', height: '120px', float:'left', margin:'10px'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Credit Card</CardTitle>
                            <CardText>
                                ICICI International Credit Card
                            </CardText>
                            <CardActions border>
                                <Button colored>Details</Button>
                            </CardActions>
                        </Card>
                        <Card shadow={0} style={{width: '320px', height: '120px', float:'left', margin:'10px'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Credit Card</CardTitle>
                            <CardText>
                                HDFC Master Card
                            </CardText>
                            <CardActions border>
                                <Button colored>Details</Button>
                            </CardActions>
                        </Card>
                        <Card shadow={0} style={{width: '320px', height: '120px', float:'left', margin:'10px'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Bank Account</CardTitle>
                            <CardText>
                                Bank of America
                            </CardText>
                            <CardActions border>
                                <Button colored>Details</Button>
                            </CardActions>
                        </Card>
                        <Card shadow={0} style={{width: '320px', height: '120px', float:'left', margin:'10px'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Credit Card</CardTitle>
                            <CardText>
                                ICICI International Credit Card
                            </CardText>
                            <CardActions border>
                                <Button colored>Details</Button>
                            </CardActions>
                        </Card>
                    </div>
                    </Content>
                    <Footer size="mega">
                    <FooterSection type="middle">
                        <FooterDropDownSection title="Features">
                            <FooterLinkList>
                                <a href="/">About</a>
                                <a href="/">Terms</a>
                                <a href="/">Partners</a>
                                <a href="/">Updates</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Details">
                            <FooterLinkList>
                                <a href="/">Specs</a>
                                <a href="/">Tools</a>
                                <a href="/">Resources</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Technology">
                            <FooterLinkList>
                                <a href="/">How it works</a>
                                <a href="/">Patterns</a>
                                <a href="/">Usage</a>
                                <a href="/">Products</a>
                                <a href="/">Contracts</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="FAQ">
                            <FooterLinkList>
                                <a href="/">Questions</a>
                                <a href="/">Answers</a>
                                <a href="/">Contact Us</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                    </FooterSection>
                    <FooterSection type="bottom" logo="Title">
                        <FooterLinkList>
                            <a href="/">Help</a>
                            <a href="/">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
                </Layout>
            </div>
        );
    }
}

export default home;