import React, { Component } from 'react';

class Latest extends Component {
    state = {
        img: null
    }
    componentDidMount() {
        fetch("https://xkcd.vercel.app/?comic=latest")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                img: result.img
                })
            })
    }

    render() {
        return (
                <div>
                    <img className='latestImage' src={this.state.img} />
                </div>
        );
    }
}

export default Latest;
