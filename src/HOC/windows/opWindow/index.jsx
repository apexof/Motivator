import React from "react";
import ReactModal from "react-modal";
import MainWindow from "../MainWindow";
import style from "../windows.sass";

ReactModal.setAppElement("#root");

export default (Item, AddOp) => class addOpWindow extends MainWindow {
    state = {
      from: {},
      to: {}
    };

    openModal = (from, to) => {
      document.body.style.overflow = "auto";
      this.setState({
        showModal: true,
        from,
        to
      });
    };

    render() {
      return (
        <>
          <Item {...this.props} openModal={this.openModal} />
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
            <AddOp {...this.state} closeModal={this.closeModal} />
          </ReactModal>
        </>
      );
    }
};
