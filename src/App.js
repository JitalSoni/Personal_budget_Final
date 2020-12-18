/* import React, { useState, useEffect } from 'react'
// import Form from './budget/Form'
// import List from './budget/List'
import './App.css';
//import { Button, Container, Jumbotron } from 'reactstrap'
import { Navbar, Nav } from 'react-bootstrap'
// import Budget from './budget/Budget';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard' */
// import { BudgetProvider } from './data';





/* const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [] */


  
/* const [expenses, setExpenses] = useState(ALL_EXPENSES)
  

  
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses]) */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import withAuth from './withAuth';
//import Home from './Home';
import HomePage from './HomePage/HomePage';
import Secret from './Secret';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li> 
        </ul>

        <Switch>
          <Route path="/">
            <HomePage/>
            </Route>
          <Route path="/secret" component={ withAuth(Secret) } />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
    /* <Container className="text-center">
      <Jumbotron fluid>
        <h3 className="display-6">
          Expense Tracker React App
        </h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className="text-success">
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        <Form />
        <List expenses={expenses} />
      </Jumbotron>
    </Container>
  )
} */

