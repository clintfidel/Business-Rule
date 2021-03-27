import React from 'react';
import ReactDOM from 'react-dom';
import './assests/main.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import reportWebVitals from './reportWebVitals';
import Overview from './components/Dashboard/Overview';
import Tasks from './components/Dashboard/Tasks';
import AddTasks from './components/Dashboard/AddTask';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={Home} exact /> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard/overview" component={Overview} />
        <Route path="/dashboard/tasks" component={Tasks} />
        <Route path="/dashboard/new-tasks" component={AddTasks} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
