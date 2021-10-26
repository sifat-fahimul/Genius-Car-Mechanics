import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivetRoute from './Pages/Login/PrivateRoute/PrivetRoute';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import UpdateService from './Pages/UpdateService/UpdateService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivetRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivetRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <Route path='/manageServices'>
              <ManageServices></ManageServices>
            </Route>
            <Route path='/updateService'>
              <UpdateService></UpdateService>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
