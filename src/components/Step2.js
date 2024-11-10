import React from "react";
import "../Components.css";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <h1>Step 1</h1>
      <h2>OK, you got a genius business idea. Now what?</h2>
      <p>
        Even the greatest ideas need to be tested. Consider these key tasks in
        the first stage of setting up a business.
      </p>
      <label>
        <input
          type="checkbox"
          name="BusinessConcept"
          checked={formData.skills.BusinessConcept || false}
          onChange={handleCheckboxChange}
        />
        Business Concept
      </label>
      <label>
        <input
          type="checkbox"
          name="MarketResearch"
          checked={formData.skills.MarketResearch || false}
          onChange={handleCheckboxChange}
        />
        Market Research
      </label>
      <label>
        <input
          type="checkbox"
          name="ChoosingaBusinessName"
          checked={formData.skills.ChoosingaBusinessName || false}
          onChange={handleCheckboxChange}
        />
        Choosing a Business Name
      </label>
      <label>
        <input
          type="checkbox"
          name="CompetitorAnalysis"
          checked={formData.skills.CompetitorAnalysis || false}
          onChange={handleCheckboxChange}
        />
        Competitor Analysis
      </label>
      <label>
        <input
          type="checkbox"
          name="BusinessPlan"
          checked={formData.skills.BusinessPlan || false}
          onChange={handleCheckboxChange}
        />
        Business Plan
      </label>
      <label>
        <input
          type="checkbox"
          name="ShareholderAgreements"
          checked={formData.skills.ShareholderAgreements || false}
          onChange={handleCheckboxChange}
        />
        Shareholder Agreements
      </label>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
