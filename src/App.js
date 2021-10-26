import React,{Route,Switch} from 'react-router-dom'
import './index.css';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './NavBar';
import Products from './components/Products';

function App() {
  return (
    <>
    <div className='main-menu'>
    <NavBar></NavBar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path='/products'component={Products} />
      </Switch>
    </div>
    </>
  );
}

export default App;
