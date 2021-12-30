import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import AddProducts from '../../../Admin/Admin/AddProducts';
import AdminRoute from '../../../userAccount/Login/AdminRoute/AdminRoute';
// import AdminRoute from '../../../userAccount/AdminRoute/AdminRoute';


import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import UserName from '../UserName/UserName';
import './Dashboard.css'

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin ,logout} = useAuth()
  return (
    <div>
      <div className="dashboard-container ">
        <h2 className="  dashboards">Dashboard</h2>
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard pt-3">
        
            <Link style={{textDecoration:'none',color:'blue'}} to='/home'> Home

            </Link>

              {
                admin &&

                <div>

                  <Link to={`${url}/makeAdmin`} style={{textDecoration:'none',color:'blue'}}>
                    <li className="dashboard-menu mt-5">Make Admin</li>
                  </Link>

                  <Link to={`${url}/manageOrder`} style={{textDecoration:'none',color:'blue'}}>
                <li className="dashboard-menu mt-5">Manage All Order</li>
              </Link>
                  <Link to={`${url}/addproducts`} style={{textDecoration:'none',color:'blue'}}>
                <li className="dashboard-menu mt-5">Add a Products</li>
              </Link>

              <Link to={`${url}/manageProduct`} style={{textDecoration:'none',color:'blue'}}>
                <li className="dashboard-menu mt-5">Manage Product</li>
              </Link>

              <Link to='/login'>
              <button className="mt-5" onClick={logout} color="inherit">Logout</button>
              </Link>
                </div>
              }


              {

                !admin &&

                <div>

<Link to={`${url}/myOrder`} style={{textDecoration:'none',color:'blue'}}>
                <li className="dashboard-menu mt-5">My Order</li>
              </Link>
             
              <Link to={`${url}/review`} style={{textDecoration:'none',color:'blue'}}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>

              <Link to={`${url}/pay`} style={{textDecoration:'none',color:'blue'}}>
                <li className="dashboard-menu ">pay</li>
              </Link>
               
               
           <Link to='/login'>
           
           <button className="mt-5" onClick={logout} color="inherit">Logout</button>

           </Link>

                </div>
              }



            </div>
          </div>
          <div className="col-md-9 tops mt-5" >
            <Switch>
              <Route exact path={path}>
                <UserName></UserName>
              </Route>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <Route exact path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <AdminRoute exact path={`${path}/manageOrder`}>
                <ManageAllProducts></ManageAllProducts>
              </AdminRoute>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <AdminRoute exact path={`${path}/manageProduct`}>
                <ManageProduct></ManageProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/addproducts`}>
                <AddProducts></AddProducts>
              </AdminRoute>


              {/* <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;