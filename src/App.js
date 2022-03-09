import './App.css'
import { BrowserRouter,Route, Switch,NavLink,Redirect} from 'react-router-dom';

//page components
import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import About from './pages/About'
import Article from './pages/Article';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        {/* linking to each item after pressing button */}
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      
      <Switch>
        {/* checking by typing the slash on the search bar */}
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route> 
        <Route path='/articles/:id'>
          {/* Route step two */}
          <Article/>
        </Route> 
        <Route path="*">
          <Redirect to='/'></Redirect>
        </Route>

      </Switch>

     
      </BrowserRouter>
      
    </div>
  );
}

export default App