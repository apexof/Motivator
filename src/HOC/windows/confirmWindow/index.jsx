import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import ConfirmContent from "./ConfirmContent";
import windows from "../windows.sass";
import MainWindow from "../MainWindow";
import style from "./ConfirmContent.sass";

export default DeleteButton => class ConfirmWidwow extends MainWindow {
    static propTypes = {
      confirm: PropTypes.func.isRequired,
      sass: PropTypes.string
    };

    static defaultProps = { sass: "" };

    render() {
      const { sass, title, confirmText, confirm, cancelText, cancel } = this.props;
      return (
        <>
          <DeleteButton sass={sass} openModal={this.openModal} />
          <ReactModal
            isOpen={this.state.showModal}
            className={`${style.window} ${windows.window}`}
            overlayClassName={windows.overlay}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick
          >
            <span className={windows.closeButton} onClick={this.closeModal}>
              ×
            </span>
            <ConfirmContent
              title={title}
              confirmText={confirmText}
              confirm={confirm}
              cancelText={cancelText}
              cancel={cancel || this.closeModal}
            />
          </ReactModal>
        </>
      );
    }
};
