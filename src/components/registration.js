import React, { Component } from 'react';

import '../App.css';

//React MDL Components Import
import {Layout, Header, Navigation, Drawer, Content,
    Card, CardTitle, CardText, CardActions, CardMenu,
    Button, IconButton, Textfield, Grid, Cell,
    Footer, FooterSection, FooterDropDownSection,
    FooterLinkList, RadioGroup, Radio } from 'react-mdl';

// React Router Dom
import {Link} from 'react-router-dom';


class Registration extends Component{
    render(){
        return(
            <div>
                <div className="App">
                    <div className="demo-big-content">
                    <Layout>
                        <Header title="eSplitz" scroll>
                            <Navigation>
                                <a href="/">About</a>
                                <a href="/">Policies</a>
                                <a href="/#/register">Sign Up</a>
                                <a href="/#/">Login</a>
                            </Navigation>
                        </Header>
                        <Drawer title="eSplitz">
                            <Navigation>
                                <a href="/">About</a>
                                <a href="/">Policies</a>
                                <a href="/#/register">Sign Up</a>
                                <a href="/#/">Login</a>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content">
                                <Grid className="demo-grid-2">
                                    <Cell col={8} style={{textAlign:'center', height:'85vh'}} className="bgbanner">
                                        <img src={require("../assests/lp.jpg")} alt="banner" width="100%" height="100%" />
                                    </Cell>
                                    <Cell col={4} tablet={12}>
                                        <Card shadow={4} style={{width: '100%', height:'100%', margin: 'auto', textAlign:'center'}}>
                                            <CardTitle style={{justifyContent:'center'}}>
                                                <h3>Create Account</h3>
                                            </CardTitle>
                                            <CardText>
                                                Already a Member? <a href="/#/">Login</a>
                                            </CardText>
                                            <CardActions>
                                                <RadioGroup name="accountType" value="personal">
                                                    <Radio value="personal" ripple className="radios">Personal</Radio>
                                                    <Radio value="business" ripple>Business</Radio>
                                                </RadioGroup>
                                                <Textfield
                                                    onChange={() => {}}
                                                    label="Username"
                                                    floatingLabel
                                                    style={{width: '70%'}}
                                                />
                                                <Textfield
                                                    onChange={() => {}}
                                                    label="Email Address"
                                                    floatingLabel
                                                    style={{width: '70%'}}
                                                />
                                                <Textfield
                                                    onChange={() => {}}
                                                    label="Password"
                                                    type="password"
                                                    floatingLabel
                                                    style={{width: '70%'}}
                                                />
                                                <Textfield
                                                    onChange={() => {}}
                                                    label="Comfirm Password"
                                                    type="password"
                                                    floatingLabel
                                                    style={{width: '70%'}}
                                                />
                                                <p>
                                                    <Button colored color="primary" raised style={{width:'70%', marginTop:'25px'}}>Sign Up</Button>
                                                </p>
                                                <p style={{marginLeft:'70px', marginRight:'70px', textAlign:'left'}}>
                                                    By clicking on the Sign Up button, you agree to our Terms and Conditions and Privacy Policies
                                                </p>
                                            </CardActions>
                                            <CardMenu style={{color: '#fff'}}>
                                                <IconButton name="share" />
                                            </CardMenu>
                                        </Card>
                                    </Cell>
                                </Grid>
                            </div>
                            <Link id="regsitrationNav" to="/register" />
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
                            </Content>
                        </Layout>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;