import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CrudDemo from './CrudDemo';
import PersonDetails from './PersonDetails';
import UpdateThePerson from './UpdateThePerson';

const DemoRouter = () => {

    return (
        <Fragment>
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/home" component={Home} />
                        <Route path="/person" component={Person} />
                        <Route path="/about" component={About} />
                        <Route path="/crud" component={CrudDemo} />
                        <Route path="/details/:id" component={PersonDetails} />
                        <Route path="/updates/:id" component={UpdateThePerson} />

                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );

};

const Welcome = () => <b>Welcome Page</b>;
const Home = () => <b>Home Page</b>;
const About = () => <b>About Us Page</b>;
const Person = () => <b>Person Page</b>;
const NotFound = () => <b>Page Not Found</b>;

const Header = () => {
return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/">Welcome</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/person">Person</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/crud">CRUD</Link>
                </li>
            </ul>
            <form>
                <Link className="btn btn-primary" to="/person">Sign Up</Link>
            </form>
        </div>

    </nav>
)
};

export default DemoRouter;