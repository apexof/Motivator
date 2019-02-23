import { connect } from "react-redux";
import EditWindow from "./EditWindow";
import { editItem } from "../../../../AC";

const mapDispatchToProps = { editItem };

const ConnectedEditWindow = connect(
  null,
  mapDispatchToProps
)(EditWindow);

export default ConnectedEditWindow;
