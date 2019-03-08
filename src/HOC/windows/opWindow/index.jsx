import React from "react";
import ReactModal from "react-modal";
import MainWindow from "../MainWindow";
import style from "../windows.sass";

ReactModal.setAppElement("#root");

export default (Button, Component) => class OpWindow extends MainWindow {
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
          <Button {...this.props} openModal={this.openModal} />
          <ReactModal
            isOpen={this.state.showModal}
            className={style.window}
            overlayClassName={style.overlay}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick
          >
            <span id="delButton" className={style.closeButton} onClick={this.closeModal}>
              ×
            </span>
            <Component
              {...this.state}
              amountOp={this.props.amountOp}
              opId={this.props.opId}
              tag={this.props.tag}
              date={this.props.date}
              closeModal={this.closeModal}
            />
          </ReactModal>
        </>
      );
    }
};
