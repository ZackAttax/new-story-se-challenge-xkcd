import React, { Component } from 'react';

class Latest extends Component {
    state = {
        img: null,
        alt: "",
        title: ""
    }
    componentDidMount() {
        fetch("https://xkcd.vercel.app/?comic=latest")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                img: result.img,
                alt: result.alt,
                title: result.title
                })
            })
            .catch(error => {
                throw(error);
            })
    }

    render() {
        return (
                <div>
                    <h3>{this.state.title}</h3>
                    <img className='latestImage' src={this.state.img} alt={this.state.alt} />
                </div>
        );
    }
}

export default Latest;
