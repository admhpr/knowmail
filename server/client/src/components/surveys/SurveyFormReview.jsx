import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { FIELDS } from "./formConsts";
const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button className="green white-text btn-flat right" onClick={onCancel}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);

  const {
    form: {
      surveyForm: { values }
    }
  } = state;
  return { formValues: values };
}
export default connect(mapStateToProps)(SurveyFormReview);
