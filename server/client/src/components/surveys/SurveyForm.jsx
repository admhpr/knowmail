import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
      </div>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "surveyForm" })(SurveyForm);
