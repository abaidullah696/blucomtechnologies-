import React from "react";
import "../Components.css";

const Step6 = ({ formData, setFormData, prevStep, nextStep }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      onlinePresence: {
        ...prevData.onlinePresence,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <h1>Step 6</h1>
      <h2>The not-so-exciting stuff you need to do.</h2>
      <p>
        To ensure smooth running of daily operations and take your venture to
        the next level, you need to fine-tune every aspect of the business and
        plan in advance.
      </p>
      <div className="flex">
        <div className="left">
          <label>
            <input
              type="checkbox"
              name="CRMImplementation"
              checked={formData.onlinePresence.CRMImplementation || false}
              onChange={handleCheckboxChange}
            />
            CRM Implementation
          </label>
          <label>
            <input
              type="checkbox"
              name="SalesAnalysisForecasting"
              checked={
                formData.onlinePresence.SalesAnalysisForecasting || false
              }
              onChange={handleCheckboxChange}
            />
            Sales Analysis & Forecasting
          </label>
          <label>
            <input
              type="checkbox"
              name="CustomerSupport"
              checked={formData.onlinePresence.CustomerSupport || false}
              onChange={handleCheckboxChange}
            />
            Customer Support
          </label>
          <label>
            <input
              type="checkbox"
              name="QuarterlyVATReturns"
              checked={formData.onlinePresence.QuarterlyVATReturns || false}
              onChange={handleCheckboxChange}
            />
            Quarterly VAT Returns
          </label>
          <label>
            <input
              type="checkbox"
              name="AccountingSoftwareSetup"
              checked={formData.onlinePresence.AccountingSoftwareSetup || false}
              onChange={handleCheckboxChange}
            />
            Accounting Software Setup
          </label>
        </div>
        <div className="right">
          <label>
            <input
              type="checkbox"
              name="EmployeeContracts"
              checked={formData.onlinePresence.EmployeeContracts || false}
              onChange={handleCheckboxChange}
            />
            Employee Contracts
          </label>
          <label>
            <input
              type="checkbox"
              name="VirtualPhoneAnswering"
              checked={formData.onlinePresence.VirtualPhoneAnswering || false}
              onChange={handleCheckboxChange}
            />
            Virtual Phone Answering
          </label>
          <label>
            <input
              type="checkbox"
              name="MonthlyBookkeeping"
              checked={formData.onlinePresence.MonthlyBookkeeping || false}
              onChange={handleCheckboxChange}
            />
            Monthly Bookkeeping
          </label>
          <label>
            <input
              type="checkbox"
              name="VirtualPersonalAssistant"
              checked={
                formData.onlinePresence.VirtualPersonalAssistant || false
              }
              onChange={handleCheckboxChange}
            />
            Virtual Personal Assistant
          </label>
        </div>
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step6;
