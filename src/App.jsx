import React from 'react';
import Header from './Header';
import Main from './Main';
import User from './User';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}