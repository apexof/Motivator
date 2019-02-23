import React from "react";
import ReactModal from "react-modal";
import style from "../windows.sass";
import MainWindow from "../MainWindow";

export default (Button, Component, div) => class ModalWindow extends MainWindow {
  render() {
    ReactModal.setAppElement(div);
    return (
      <>
        <Button {...this.props} openModal={this.openModal} />
        <ReactModal
          isOpen={this.state.showModal}
          className={style.window}
          overlayClassName={style.overlay}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick
        >
          <span className={style.closeButton} onClick={this.closeModal}>
              ×
          </span>
          <Component {...this.props} closeModal={this.closeModal} />
        </ReactModal>
      </>
    );
  }
};
