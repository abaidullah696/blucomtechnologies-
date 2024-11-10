import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
import Step8 from "./components/Step8";
import UserInfo from "./components/UserInfo";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessSetup: {},
    skills: {},
    preferences: {},
    branding: {},
    onlinePresence: {},
    marketingStrategy: {},
    budgetPlanning: {},
    userInfo: {
      industry: "",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleFormSubmit = () => {
    // sendEmail(formData);
    alert("Form submitted! Check your email for details.");
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Step5
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 6:
      return (
        <Step6
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          // submitForm={handleFormSubmit}
        />
      );
    case 7:
      return (
        <Step7
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          // submitForm={handleFormSubmit}
        />
      );
    case 8:
      return (
        <Step8
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          // submitForm={handleFormSubmit}
        />
      );
    case 9:
      return (
        <UserInfo
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submitForm={handleFormSubmit}
        />
      );
    default:
      return (
        <div>
          <h2>Review and Submit</h2>
          <button onClick={prevStep}>Back</button>
          <button onClick={handleFormSubmit}>Submit Form</button>
        </div>
      );
  }
};

export default MultiStepForm;
