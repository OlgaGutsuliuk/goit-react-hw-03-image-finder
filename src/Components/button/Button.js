import React from "react";
import style from '../button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ fetchArticles }) => {
  return (
    <button className={style.Button} type="button" onClick={fetchArticles}>
     Load more
    </button>
  );
};

export default Button;


Button.propTypes = {
  fetchArticles: PropTypes.func.isRequired
}