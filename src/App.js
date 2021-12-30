
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
// import AddProducts from './Pages/Admin/Admin/AddProducts';
import MoreProducts from './Pages/MoreProducts/MoreProducts';
import DetailsProducts from './Pages/DetailsProducts/DetailsProducts';
// import Register from './Pages/userAccount/Register/Register';
import Login from './Pages/userAccount/Login/Login';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import Register from './Pages/userAccount/Register/Register';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard/Dashboard';
// import ExtraNav from './Pages/ExtraNav/ExtraNav';
// import PrivetRoute from './PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/moreproducts'>
        <MoreProducts></MoreProducts>
      </Route>
      <Route path='/register'>
        <Register></Register>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
     
      <PrivetRoute path='/serviceDetails/:id'>
        <DetailsProducts></DetailsProducts>
      </PrivetRoute>
      {/* <Route path='/addproducts'>
        <AddProducts></AddProducts>
      </Route> */}
      <Route path='/dashboard'>
        <Dashboard></Dashboard>
      </Route>
    </Switch>
    </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
