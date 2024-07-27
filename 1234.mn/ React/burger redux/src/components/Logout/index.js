import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import { Navigate } from "react-router-dom";

class Logout extends React.Component {
  componentDidMount = () => {
    this.props.logout();
  };

  render() {
    return <Navigate to="/login" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
