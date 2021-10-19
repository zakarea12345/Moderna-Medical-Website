import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Header from './Component/Shared/Header';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Footer from './Component/Shared/Footer';
import Contact from './Component/Contact/Contact';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        
        <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/services">
              <Header></Header>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/contact">
              <Header></Header>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Header></Header>
              <LogIn></LogIn>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/servicedetail/:serviceID">
              <Header></Header>
              <ServiceDetail></ServiceDetail>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
