import { connect } from "react-redux";
import WindowContent from "./AddWindow";
import { addItem } from "../../../../AC";

const mapDispatchToProps = { addItem };

const ConnectedWindowContent = connect(
  null,
  mapDispatchToProps
)(WindowContent);

export default ConnectedWindowContent;
