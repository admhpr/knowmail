import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormNew from "./SurveyFormReview";
class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    const { showFormReview } = this.state;
    return showFormReview ? (
      <SurveyFormNew />
    ) : (
      <SurveyForm onSubmit={() => this.setState({ showFormReview: true })} />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
