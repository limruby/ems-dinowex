<<<<<<< HEAD
<<<<<<< HEAD
import React,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {isAuth, isAdmin} from './utils/isAuth'
=======
import React from 'react';
=======
import React,{useState, useEffect} from 'react';
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {isAuth} from './utils/isAuth'

>>>>>>> 2dbc05f (sponsor sign up updated)

import Landing from './components/site/landingPage';
import SignIn from './components/site/login/login';
import SignUp from './components/site/signUp'
<<<<<<< HEAD
import Payment_Success from './components/site/payment_success.js'
import Payment_Fail from './components/site/payment_fail'
=======
>>>>>>> 2dbc05f (sponsor sign up updated)
import UserDashboard from './components/site/userDashboard';
import EditUserDetails from './components/site/userDashboard/edit';
import eventLobby from './components/site/eventLobby/eventLobby';
import sponsor_hall from './components/site/eventLobby/sponsor_hall/sponsor_hall';
import competition_hall from './components/site/eventLobby/competition_hall/competition_hall';
<<<<<<< HEAD
<<<<<<< HEAD
import Navbar from './components/site/navbar';
import Footer from './components/site/footer';
import AdminDashboard from './components/site/adminDashboard';
=======
=======
import Navbar from './components/site/navbar';
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
// import AdminDashboard from './components/site/adminDashboard';
>>>>>>> 2dbc05f (sponsor sign up updated)
import PageNotFound from './components/PageNotFound.js';


import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

<<<<<<< HEAD
const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      isAdmin()
        ?  <Component {...props} />     //true
        :  <Redirect to='/page_not_found' />
    )} />
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (

    isAuth() === false
          ? <Redirect to='/sign_in' />
          : <Component {...props} />
=======
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuth() === false
      ? <Redirect to='/sign_in' />
      : <Component {...props} />
>>>>>>> 2dbc05f (sponsor sign up updated)
  )} />
)


<<<<<<< HEAD
function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
    <Navbar isAuth={loggedIn} />
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/sign_in'  component={SignIn}/>
        <Route exact path='/sign_up'  component={SignUp}/>  
=======

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
    <Navbar isAuth={loggedIn} />
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/sign_in'  component={SignIn}/>
        <Route exact path='/sign_up'  component={SignUp}/>   
>>>>>>> 2dbc05f (sponsor sign up updated)

        <PrivateRoute exact path='/user_dashboard'  component={UserDashboard}/>  
        <PrivateRoute exact path='/user_dashboard/edit_account' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_password' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_profile' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_content' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_researchTeam' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_abstract' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_book_chapter' component={EditUserDetails}/>

<<<<<<< HEAD
        <AdminRoute exact path='/admin_dashboard'  component={AdminDashboard}/>

		    <Route exact path='/eventLobby'  component={eventLobby}/>  
        <Route exact path='/sponsor_hall'  component={sponsor_hall}/> 
        <Route exact path='/competition_hall'  component={competition_hall}/>

        <Route exact path='/page_not_found' component={PageNotFound} />
        <Route exact path='/payment_success'  component={Payment_Success}/>
        <Route exact path='/payment_fail'  component={Payment_Fail}/>
      </Switch>
	  <Footer/>
=======
        {/* <Route exact path='/admin_dashboard'  component={AdminDashboard}/>   */}

		<Route exact path='/eventLobby'  component={eventLobby}/>  
        <Route exact path='/sponsor_hall'  component={sponsor_hall}/> 
        <Route exact path='/competition_hall'  component={competition_hall}/>

        <Route component={PageNotFound} />
      </Switch>

>>>>>>> 2dbc05f (sponsor sign up updated)
      

    </Router>
    </QueryClientProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

>>>>>>> 2dbc05f (sponsor sign up updated)
