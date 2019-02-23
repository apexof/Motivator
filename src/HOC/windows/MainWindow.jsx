import React from "react";

class MainWindow extends React.Component {
  state = { showModal: false };

  openModal = () => {
    document.body.style.overflow = "hidden";
    this.setState({ showModal: true });
  };

  closeModal = () => {
    document.body.style.overflow = "auto";
    this.setState({ showModal: false });
  };
}

export default MainWindow;
