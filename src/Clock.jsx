import React from 'react';
import Rx from 'rxjs';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        console.log("clock component constructor");
    }

    componentDidMount() {
        this.timerSub = Rx.Observable.timer(100,1000).subscribe(x => {
            this.tick();
        });
    }

    componentWillUnmount() {
        this.timerSub.unsubscribe();
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>

        );
    }
}