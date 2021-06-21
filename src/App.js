import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Home'
import NotFound from './NotFound'
import BlogDetail from './BlogDetails'
import Create from './Create'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
          <Route path="/blogs/:id">
          <BlogDetail/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
        </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
