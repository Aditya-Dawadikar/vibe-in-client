import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './views/Login/Login';
import UserDashboard from './views/UserDashBoard/UserDashBoard';
import ContentCreatorDashboard from './views/ContentCreatorDashBoard/ContentCreatorDashBoard';

function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/user' component={UserDashboard} />
              <Route path='/contentcreator' component={ContentCreatorDashboard} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
