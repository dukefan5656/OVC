import React from "react";
import { connect } from "react-redux";
import Table from "./Table";
import { getUserPayload } from "../actions/index";

export class Landing extends React.Component {
  componentDidMount() {
    this.props.getUserPayload();
  }

  render() {
    return <Table users={this.props.user} />;
  }
}

export default connect(
  state => {
    return {
      user: state.users.users
    };
  },
  dispatch => {
    return { getUserPayload: () => dispatch(getUserPayload()) };
  }
)(Landing);
