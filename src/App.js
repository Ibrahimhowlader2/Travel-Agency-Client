
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddNew from './Pages/AddNew/AddNew';
import BookNow from './Pages/BookNow/BookNow';
import Contact from './Pages/Contact/Contact';
import DestinationDetails from './Pages/DestinationDetails/DestinationDetails';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageAll from './Pages/ManageAll/ManageAll';
import MyBooking from './Pages/MyBooking/MyBooking';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/myBooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute path="/manageBooking">
            <ManageAll></ManageAll>
          </PrivateRoute>
          <PrivateRoute path="/addBooking">
            <AddNew></AddNew>
          </PrivateRoute>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/book">
            <BookNow></BookNow>
          </PrivateRoute>
          <PrivateRoute exact path="/details/:detailsId">
            <DestinationDetails></DestinationDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
