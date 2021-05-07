import React, { Component } from "react";
import { createPortal } from "react-dom";
import style from "../modal/Modal.module.css";
import PropTypes from 'prop-types'

const modalRoot = document.querySelector("#modal-root");


class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillMount() {
   window.removeEventListener('keydown', this.handleKeyDown) 
  }


handleKeyDown = e => {
  if (e.code === "Escape") {
         console.log('Escape');
        this.props.onClose()  
    }
}
  handleOverlay = (e) => {
    console.log('bac');
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
      
  }
  

  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.handleOverlay}>
        <div className={style.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}
