import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys(list) {
    return list.reverse().map(survey => (
      <div key={survey._id} className="card darken-1">
        <div className="card-content">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <div className="right">
            Sent On: {new Date(survey.dateSent).toLocaleString()}
          </div>
        </div>
        <div className="card-action">
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
      </div>
    ));
  }
  render() {
    const { surveys } = this.props;
    return <div>{this.renderSurveys(surveys)}</div>;
  }
}

// property from state that this component wants in props
function mapStateToProps({ surveys }) {
  return { surveys };
}

// mapper, action, component
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
