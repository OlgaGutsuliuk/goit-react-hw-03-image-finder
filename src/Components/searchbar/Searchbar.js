import React, { Component } from "react";
import style from '../searchbar/Searchbar.module.css';
import PropTypes from 'prop-types'

class Searchbar extends Component {
  state = {
    query: ""
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onChangeQuery(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_label}>Search</span>
          </button>

          <input
            className={style.SearchForm_input}
            type="text"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
}

