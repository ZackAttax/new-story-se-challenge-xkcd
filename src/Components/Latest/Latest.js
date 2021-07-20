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
                title: result.alt,
                alt: result.title
                })
            })
            .catch(error => {
                throw(error);
            })
    }

    render() {
        return (
                <div>
                    <img className='latestImage' src={this.state.img} alt={this.state.alt} title={this.state.title}/>
                </div>
        );
    }
}

export default Latest;
