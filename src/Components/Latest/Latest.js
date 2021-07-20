import React, { Component } from 'react';

class Latest extends Component {
    state = {
        img: null,
        alt: ""
    }
    componentDidMount() {
        fetch("https://xkcd.vercel.app/?comic=latest")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                img: result.img,
                alt: result.alt
                })
            })
    }

    render() {
        return (
                <div>
                    <img className='latestImage' src={this.state.img} alt={this.state.alt} />
                </div>
        );
    }
}

export default Latest;
