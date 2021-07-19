import React, { Component } from 'react';

class Latest extends Component {
    state = {
        latestXKCDimg: null
    }
    componentDidMount() {
        fetch("https://xkcd.vercel.app/?comic=latest")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                latestXKCDimg: result.img
                })
            })
    }

    render() {
        return (
                <div>
                    <img src={this.state.latestXKCDimg} />
                </div>
        );
    }
}

export default Latest;
