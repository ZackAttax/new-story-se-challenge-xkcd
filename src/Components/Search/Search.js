import React, { Component } from 'react';

class Search extends Component {
    state = {
        num: "",
        img: "",
        alt: ""
    }
    findComic= (number) => {
        fetch(`https://xkcd.vercel.app/?comic=${number}`)
        .then(res => res.json())
        .then((result) => {
            this.setState({
            img: result.img
            })
        })
    }
    handleFormChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event, num) => {
        console.log(num)
        event.preventDefault()
        this.findComic(this.state.num)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Search Bar
            </label>
            <input
                type="number"
                id="search-bar"
                name='num'
                value={this.state.num} onChange={this.handleFormChange}
            />
            <button type="submit">Search</button>
        </form>
        { this.state.img && <img src={this.state.img} className='latestImage' alt={this.state.alt} /> }
        </div>
        );
    }
}

export default Search;
