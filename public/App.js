import React from 'react';
import { Fragment } from "react/cjs/react.production.min";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyleReset, ThemeProvider, Div } from "atomize";
import axios from "axios";
import ScrollToTop from "../src/components/routerScroll";
import Navbar from '../src/components/Navbar';
import Topbar from '../src/components/Topbar';
import Home from '../src/pages/Home';
import Account from '../src/pages/Account';
import Sacco from '../src/pages/Sacco';
import Clubs from '../src/pages/Clubs';
import Withdraw from '../src/pages/Withdraw';
import Deposit from '../src/pages/Deposit';
import Loan from '../src/pages/Loan';
import ResHome from '../src/pages/ResHome';
import ResDeposit from '../src/pages/ResDeposit';
import Notification from '../src/pages/Notification';
import ResNotification from '../src/pages/ResNotification';
import ResSetting from '../src/pages/ResSetting';
import Wallet from '../src/pages/Wallet';
import Goal from '../src/pages/Goal';
import ResGoal from '../src/pages/ResGoal';
import Investment from '../src/pages/Investment';
import ResInvestment from '../src/pages/ResInvestment';
import ApiAccount from '../src/pages/ApiAccount';
import Api from '../src/pages/API';
import Ortus from '../src/pages/ortus';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
// 1. Create a client engine instance
const engine = new Styletron();


const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};


class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

   

    // MAKE AN AJAX REQUEST
    const MyID =  JSON.parse(localStorage.getItem("loginID"));
  
    const PATH = 'https://api.cyanase.com/api/home_test.php';
   
    axios({
      method: 'POST',
      url: `${PATH}`,
      headers: { 'content-type': 'application/json' },
      data: {id:MyID.qewwrueu}
  })
      .then(results => {

       
          localStorage.setItem("loginData",  JSON.stringify(results.data));

      })
      .catch(error =>{

       

      } );
   

  return (
    <>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          

          <Router>
          <Fragment>
            <Div  d="flex" textAlign="center"  className="top_bar">
              <Topbar />
            </Div></Fragment>
            <Fragment>
              <ScrollToTop />

              <Navbar />

              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Account' element={<Account />} />
                <Route path='/Sacco' element={<Sacco />} />
                <Route path='/Clubs' element={<Clubs />} />
                <Route path='/Loan' element={<Loan />} />
                <Route path='/Withdraw' element={<Withdraw />} />
                <Route path='/Deposit' element={<Deposit />} />
                <Route path='/ResSetting' element={<ResSetting />} />
                <Route path='/ResHome' element={<ResHome />} />
                <Route path='/ResDeposit' element={<ResDeposit />} />
                <Route path='/Notification' element={<Notification />} />
                <Route path='/ResNotification' element={<ResNotification />} />
                <Route path='/wallet' element={<Wallet/>} />
                <Route path='/Goal' element={<Goal/>} />
                <Route path='/ResGoal' element={<ResGoal/>} />
                <Route path='/Investment' element={<Investment/>} />
                <Route path='/ResInvestment' element={<ResInvestment/>} />
                <Route path='/ApiAccount' element={<ApiAccount/>} />
                <Route path='/Ortus' element={<Ortus/>} />
                <Route path='/API' element={<Api/>} />
              </Routes>

            </Fragment>
          </Router>

        </ThemeProvider>
      </StyletronProvider>
    </>
  );
}
}
export default App;
