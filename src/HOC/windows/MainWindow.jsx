import React from "react";
import { bodyScroll } from "../../helpers";

class MainWindow extends React.Component {
  state = { showModal: false };

  openModal = () => {
    bodyScroll(false);
    this.setState({ showModal: true });
  };

  closeModal = () => {
    bodyScroll(true);
    this.setState({ showModal: false });
  };
}

export default MainWindow;
