import React, { Component } from 'react';

class Search extends Component {
    state = {
        num: "",
        img: "",
        alt: "",
        title: ""
    }
    findComic= (number) => {
        fetch(`https://xkcd.vercel.app/?comic=${number}`)
        .then(res => res.json())
        .then((result) => {
            this.setState({
            img: result.img,
            alt: result.alt,
            title: result.title
            })
        })
    }
    handleFormChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.findComic(this.state.num)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Search Bar for Comic by Number
            </label>
            <input
                type="number"
                id="search-bar"
                name='num'
                value={this.state.num} onChange={this.handleFormChange}
            />
            <button type="submit">Search</button>
        </form>
            <h3>{this.state.title}</h3>
        <img src={this.state.img} className='latestImage' alt={this.state.alt} />
        </div>
        );
    }
}

export default Search;
