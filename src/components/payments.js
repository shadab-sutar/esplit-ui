import React, { Component } from 'react';

import '../App.css';

//React MDL imports
import { Layout, Header, Navigation, Button, Checkbox, Textfield,
    Content, Drawer, Footer, FooterSection, FooterDropDownSection,
    FooterLinkList, DataTable, TableHeader, Dialog, DialogActions, DialogContent, DialogTitle } from 'react-mdl';

class payments extends Component {
    constructor(){
        super();
        this.state={
            total:'00.00',
            openDialog:false
        };
    }

    handlePay(){
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
                            <h3 style={{margin:'10px'}}>Payments</h3>
                            <p className="border"></p>
                            <div class="toolbar-alt">
                                <Textfield label="Total Amount" value={this.state.total} disabled floatingLabel className="totalAmountField" />
                                <Button primary raised style={{margin:'10px'}} onClick={this.handlePay.bind(this)}>Pay</Button>
                            </div>
                            <DataTable
                                selectable
                                shadow={0}
                                style={{width:'90%', margin:'10px'}}
                                rows={[
                                    {itemName: 'HDFC Master Card', itemDetail: '1544 6778 9056', amount: <Textfield label="Amount" value='00.00' />},
                                    {itemName: 'Bank of America', itemDetail: '1544 6778 9056', amount: <Textfield label="Amount" value='00.00' />},
                                    {itemName: 'ICICI International Credit Card', itemDetail: '1544 6778 9056', amount: <Textfield label="Amount" value='00.00' />},
                                    {itemName: 'HDFC Master Card', itemDetail: '1544 6778 9056', amount: <Textfield label="Amount" value='00.00' />},
                                    {itemName: 'Bank of America', itemDetail: '1544 6778 9056', amount: <Textfield label="Amount" value='00.00' />},
                                    {itemName: 'ICICI International Credit Card', itemDetail: '1544 6778 9056', amount: <Textfield label="Amount" value='00.00' />}
                                ]}
                            >
                                <TableHeader name="itemName" tooltip="Your Bank or Card Name">Item Name</TableHeader>
                                <TableHeader name="itemDetail" tooltip="Your Bank or Card Detail">Item Detail</TableHeader>
                                <TableHeader name="amount" tooltip="Your Amount">Enter Amount</TableHeader>
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
                <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog} >
                    <DialogTitle style={{margin:'10px'}}>Confirmation</DialogTitle>
                    <p className="border"></p>
                    <DialogContent>
                        <b>Do you want to continue to Pay {this.state.total} ?</b>
                    </DialogContent>
                    <p className="border"></p>
                    <DialogActions>
                        <Button type='button' onClick={this.handleAgree.bind(this)} primary raised>YES</Button>
                        <Button type='button' onClick={this.handleCloseDialog.bind(this)} raised>NO</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default payments;