import React, { Component } from 'react';
import './App.css';

//React MDL Components Import
import {Layout, Header, Navigation, Drawer, Content,
        Card, CardTitle, CardText, CardActions, CardMenu,
        Button, IconButton, Textfield } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
              <Header title="eSplitz" scroll>
                  <Navigation>
                      <a href="#">About</a>
                      <a href="#">Policies</a>
                      <a href="#">Sign Up</a>
                      <a href="#">Login</a>
                  </Navigation>
              </Header>
              <Drawer title="eSplitz">
                  <Navigation>
                      <a href="#">About</a>
                      <a href="#">Policies</a>
                      <a href="#">Sign Up</a>
                      <a href="#">Login</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content">
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
                          <Button colored>Login</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" />
                      </CardMenu>
                  </Card>
                  </div>
              </Content>
          </Layout>
      </div>
      </div>
    );
  }
}

export default App;
