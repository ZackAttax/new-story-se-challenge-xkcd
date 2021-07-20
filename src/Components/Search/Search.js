import React, { Component } from 'react';

class Search extends Component {
    state = {
        num: "",
        img: "",
        alt: "",
        title: "",
        max: "2219"
    }
    componentDidMount() {
        fetch("https://xkcd.vercel.app/?comic=latest")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                max: result.num
                })
            })
            .catch(error => {
                throw(error);
            })
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
                className='searchInput'
                type="number"
                id="search-bar"
                name='num' 
                min="1" max={this.state.max}
                value={this.state.num} onChange={this.handleFormChange}
            />
            <button type="submit" className='searchSubmit'>Search</button>
        </form>
            <h3>{this.state.title}</h3>
        <img src={this.state.img} className='searchImage' alt={this.state.alt} />
        </div>
        );
    }
}

export default Search;
