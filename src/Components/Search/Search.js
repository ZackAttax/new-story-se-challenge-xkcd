import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: null,
        img: null
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

    render() {
        return (
            <form>
            <label>
                Search Bar
            </label>
            <input
                type="text"
                id="search-bar"
            />
            <button type="submit">Search</button>
        </form>
        );
    }
}

export default Search;
