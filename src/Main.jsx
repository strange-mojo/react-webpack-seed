import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import About from './About';
import User from './User';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/user' component={User}/>
                </Switch>
            </main>
        );
    }
}