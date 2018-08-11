import React, { Component } from 'react';

import '../App.css';

//React MDL imports
import { Layout, Header, Navigation, Button, Checkbox, Textfield,
    Content, Drawer, Footer, FooterSection, FooterDropDownSection,
    FooterLinkList, DataTable, TableHeader, Dialog, DialogActions, DialogContent, DialogTitle } from 'react-mdl';

class settings extends Component {
    constructor(){
        super();
        this.state={
            openDialog:false
        };
    }

    handleOpenDialog(){
        this.setState({openDialog:true});
    }

    handleCloseDialog(){
        this.setState({openDialog:false});
    }

    handleAgree(){

    }

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
                        <div className="items">
                            <h3 style={{margin:'10px'}}>Add Items</h3>
                            <p className="border"></p>
                            <Button primary raised style={{margin:'10px'}} onClick={this.handleOpenDialog.bind(this)}>Add</Button>
                            <DataTable
                                shadow={0}
                                style={{width:'90%', margin:'10px'}}
                                rows={[
                                    {itemName: 'HDFC Master Card', itemDetail: '1544 6778 9056', action: <Button raised style={{backgroundColor:'#aa0d05', color:'#fff'}}>Delete</Button>},
                                    {itemName: 'Bank of America', itemDetail: '1544 6778 9056', action: <Button raised style={{backgroundColor:'#aa0d05', color:'#fff'}}>Delete</Button>},
                                    {itemName: 'ICICI International Credit Card', itemDetail: '1544 6778 9056', action: <Button raised style={{backgroundColor:'#aa0d05', color:'#fff'}}>Delete</Button>},
                                    {itemName: 'HDFC Master Card', itemDetail: '1544 6778 9056', action: <Button raised style={{backgroundColor:'#aa0d05', color:'#fff'}}>Delete</Button>},
                                    {itemName: 'Bank of America', itemDetail: '1544 6778 9056', action: <Button raised style={{backgroundColor:'#aa0d05', color:'#fff'}}>Delete</Button>},
                                    {itemName: 'ICICI International Credit Card', itemDetail: '1544 6778 9056', action: <Button raised style={{backgroundColor:'#aa0d05', color:'#fff'}}>Delete</Button>}
                                ]}
                            >
                                <TableHeader name="itemName" tooltip="Your Bank or Card Name">Item Name</TableHeader>
                                <TableHeader name="itemDetail" tooltip="Your Bank or Card Detail">Item Detail</TableHeader>
                                <TableHeader name="action" tooltip="Your Action">Action</TableHeader>
                            </DataTable>
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
                <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog} style={{width:'50%'}}>
                    <DialogTitle style={{margin:'10px'}}>Add Item Details</DialogTitle>
                    <p className="border"></p>
                    <DialogContent style={{overflowY:true}}>
                        <div class="toolbar">
                            <Checkbox label="Credit Card" ripple defaultChecked/>
                            <Checkbox label="Debit Card" ripple />
                            <Checkbox label="Bank Account" ripple />
                        </div>
                        <div className="content-form">
                            <Textfield label="Enter Card Number" floatingLabel style={{width:'100%'}} />
                            <Textfield label="Enter CVV Number" floatingLabel style={{width:'100%'}} />
                            <Textfield label="Enter Card Bank Name" floatingLabel style={{width:'100%'}} />
                            <Textfield label="Enter IFSC Code" floatingLabel style={{width:'100%'}} /> 
                        </div>
                    </DialogContent>
                    <p className="border"></p>
                    <DialogActions>
                        <Button type='button' onClick={this.handleAgree.bind(this)} primary raised>SAVE</Button>
                        <Button type='button' onClick={this.handleCloseDialog.bind(this)} raised>CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default settings;