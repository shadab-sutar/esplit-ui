import React, { Component } from 'react';
import './App.css';

//React MDL Components Import
import {Layout, Header, Navigation, Drawer, Content,
        Card, CardTitle, CardText, CardActions, CardMenu,
        Button, IconButton, Textfield, Grid, Cell,
        Footer, FooterSection, FooterDropDownSection,
        FooterLinkList } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
              <Header title="eSplitz" scroll>
                  <Navigation>
                      <a href="/">About</a>
                      <a href="/">Policies</a>
                      <a href="/">Sign Up</a>
                      <a href="/">Login</a>
                  </Navigation>
              </Header>
              <Drawer title="eSplitz">
                  <Navigation>
                      <a href="/">About</a>
                      <a href="/">Policies</a>
                      <a href="/">Sign Up</a>
                      <a href="/">Login</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content">
                    <Grid className="demo-grid-2">
                        <Cell col={8} style={{textAlign:'center'}}>
                            <h1>Welcome to eSplitz</h1>
                            <h5 style={{textAlign:'justify'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </h5>
                            <h5 style={{textAlign:'justify'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </h5>
                            <h5 style={{textAlign:'justify'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </h5>
                            <h5 style={{textAlign:'justify'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </h5>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={0} style={{width: '70%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '200px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Textfield
                                        onChange={() => {}}
                                        label="Username"
                                        floatingLabel
                                        style={{width: '100%'}}
                                    />
                                    <Textfield
                                        onChange={() => {}}
                                        label="Password"
                                        floatingLabel
                                        style={{width: '100%'}}
                                    />
                                    <Button colored color="primary" raised>Login</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>
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
    </div>
    );
  }
}

export default App;
