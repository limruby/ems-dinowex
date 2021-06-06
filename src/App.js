import React,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import {isAuth, isAdmin} from './utils/isAuth'

=======
import {isAuth} from './utils/isAuth'

//
>>>>>>> a678ac2 (test)
import Landing from './components/site/landingPage';
import SignIn from './components/site/login/login';
import SignUp from './components/site/signUp'
import Payment_Success from './components/site/payment_success.js'
import Payment_Fail from './components/site/payment_fail'
import UserDashboard from './components/site/userDashboard';
import EditUserDetails from './components/site/userDashboard/edit';
import eventLobby from './components/site/eventLobby/eventLobby';
import sponsor_hall from './components/site/eventLobby/sponsor_hall/sponsor_hall';
import competition_hall from './components/site/eventLobby/competition_hall/competition_hall';
import Navbar from './components/site/navbar';
import Footer from './components/site/footer';
<<<<<<< HEAD
import AdminDashboard from './components/site/adminDashboard';
=======
// import AdminDashboard from './components/site/adminDashboard';
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
import PageNotFound from './components/PageNotFound.js';


import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

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
  )} />
)


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
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Route exact path='/upload'  component={uploadImage}/>  
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
>>>>>>> d6169f2 (sponsor edit profile can fetch data)

        <PrivateRoute exact path='/user_dashboard'  component={UserDashboard}/>  
        <PrivateRoute exact path='/user_dashboard/edit_account' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_password' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_profile' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_content' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_researchTeam' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_abstract' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_book_chapter' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_book_chapter_content' component={EditUserDetails}/>

        <AdminRoute exact path='/admin_dashboard'  component={AdminDashboard}/>

		    <Route exact path='/eventLobby'  component={eventLobby}/>  
        <Route exact path='/sponsor_hall'  component={sponsor_hall}/> 
        <Route exact path='/competition_hall'  component={competition_hall}/>

        <Route exact path='/page_not_found' component={PageNotFound} />
        <Route exact path='/payment_success'  component={Payment_Success}/>
        <Route exact path='/payment_fail'  component={Payment_Fail}/>
      </Switch>
	  <Footer/>
      

    </Router>
    </QueryClientProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
