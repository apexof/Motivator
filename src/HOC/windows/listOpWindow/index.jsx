import React from "react";
import ReactModal from "react-modal";
import windows from "../windows.sass";
import style from "./listOpWindow.sass";
import MainWindow from "../MainWindow";

ReactModal.setAppElement("#root");

export default (Item, List) => class listOpWindow extends MainWindow {
    state = { _id: null };

    openModal = _id => () => {
      document.body.style.overflow = "auto";
      this.setState({ showModal: true, _id });
    };

    render() {
      return (
        <>
          <Item {...this.props} openListOp={this.openModal} />
          <ReactModal
            isOpen={this.state.showModal}
            className={`${windows.window} ${style.window}`}
            overlayClassName={windows.overlay}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick
          >
            <span className={windows.closeButton} onClick={this.closeModal}>
              ×
            </span>
            <List {...this.props} closeListOp={this.closeModal} />
          </ReactModal>
        </>
      );
    }
};
