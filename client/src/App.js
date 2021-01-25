import React, { Component,lazy,Suspense} from "react";
import { Switch, Route, Redirect,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurentUser } from "../src/redux/user/user-selector";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-action";

import { GlobelStyles, AppConatiner } from "./global.styles";
import Header from "./component/header/header-comp";
import Footer from "./component/footer/footer-comp";
import Spinner from "./component/spinner/spinner-comp";
import ErrorBoundary from "./component/error-boundary/error-boundary-comp"




const  HomePage = lazy(()=>import("./pages/homepage/homepage-comp"));
const  Shop= lazy(()=>import("./pages/shop/shop-comp"));
const  CheckoutPage =lazy(()=>import("./pages/checkoutpage/checkout-comp")) ;
const  SignInSignUp = lazy(()=>import("./pages/sign-in-sign-up/sign-in-sign-up-comp"));
const  ErrorPage = lazy(()=>import ("./component/404errorpage/404page-comp"));
const  FAQPage =lazy(()=>import ("./pages/faqpage/faq-comp"));
const AboutPage=lazy(()=>import ("./pages/aboutpage/about-comp"));
const ContactPage=lazy(()=>import ("./pages/contactpage/contactpage-comp"));



class App extends Component {

   
  
  
  unsbscribeFormAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
  
    
    this.unsbscribeFormAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        setCurrentUser(user);
      }
    });
  }
  componentDidUpdate(){
 
   window.scrollTo(0,0)  ;
  }
  componentWillUnmount() {
    this.unsbscribeFormAuth();
  }
  render() {
    const {  location } = this.props
   
  
    return (
      <div>
        <GlobelStyles />
        <AppConatiner home={location.pathname==="/"}>
        <Header />
         <main>
          
            <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
            <Switch>
    
            <Route exact path="/" component={HomePage} />
           
            <Route  path="/shop" component={Shop} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            /> 
            <Route exact path="/faq" component={FAQPage} />
            <Route exact path="/contactUs" component={ContactPage} />
            <Route exact path="/aboutus" component={AboutPage} />
            <Route component={ErrorPage} />
           
             </Switch>
            </Suspense>
            </ErrorBoundary>
            </main>
            </AppConatiner>
      
         
        
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
 
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
