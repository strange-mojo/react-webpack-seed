import React from 'react'
import Link from 'react-router-dom'

import Clock from './Clock';

export default class Home extends React.Component {
    render() {
        return (
            <div>
            <h1>Home Component! This is a change!!!</h1>
            <Clock />
            </div>
        );
    }
}