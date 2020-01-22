import React, {Component, Fragment, Suspense } from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

// /import Posts from '../src/components/containers/Posts/Posts';
import Users from '../src/components/containers/Users/Users';
import Welcome from '../src/components/containers/Welcome/Welcome';

const Posts = React.lazy(() => import('../src/components/containers/Posts/Posts'))

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <NavLink to='/users' style={{margin: '10px'}}>Users Page</NavLink> 
            <NavLink to='/posts'>Posts Page</NavLink>
          </nav>  
          <Route path='/' exact component={Welcome}/>
          <Route path='/users' component={Users}/>
          <Route path='/posts' render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>
          )}/>
      </Fragment>
      </BrowserRouter>
    
    );
    
  }
}

export default App;
