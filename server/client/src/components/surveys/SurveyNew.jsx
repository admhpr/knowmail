import React, { useState } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormNew from "./SurveyFormReview";

const renderContent = () => {
  const [showFormReview, setShowFormReview] = useState(false);
  console.log(showFormReview);
  return showFormReview ? (
    <SurveyFormNew onCancel={() => setShowFormReview(false)} />
  ) : (
    <SurveyForm onSubmit={() => setShowFormReview(true)} />
  );
};

const SurveyNew = () => {
  return <div>{renderContent()}</div>;
};

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
