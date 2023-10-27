import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    ss(i) {
		this.setState({count: this.state.count +i})
	}
    render() {
        return (
					<div>
						<h1>{this.state.count}</h1>
						<button onClick={() => this.ss(1)}>+1</button>
						<button onClick={() => this.ss(-1)}>-1</button>
					</div>
				)
    }
}

export default ClassCounter;