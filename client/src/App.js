import React from 'react';
import  {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import TranactionDetails from './Service/account';

class App extends React.Component{
   render(){
   return(
      <div className="App">
        <Router >
          <Route exact path='/'>
              <h1>Home</h1>
          </Route>


         <Route exact path='/account'>
          <TranactionDetails/>
          </Route>
          </Router>
      </div>
   );
   }
}

export default App;