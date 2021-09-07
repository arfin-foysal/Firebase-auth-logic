
import './App.css';
import Signin from './components/Signin';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';




function App() {
  return (
    <div >
      
      <Router>
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route path="/signin">
            <Container className="d-flex align-item-center justify-content-center"
              style={{ minHeight: "100vh" }}>
              <div className="w-100" style={{ maxWidth: '400px' }}>
                <Signin />
              </div>
            </Container>
          </Route>
          <Route path="/login">
            <Container className="d-flex align-item-center justify-content-center"
              style={{ minHeight: "100vh" }}>
              <div className="w-100" style={{ maxWidth: '400px' }}>
            <Login/>
              </div>
            </Container>
          </Route>
         <Route exact path="/home" component={Home}/>
          
        </Switch>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
