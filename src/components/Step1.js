import React, { useEffect, useState } from "react";
import "../Components.css";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, selected } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      businessSetup: {
        ...prevData.businessSetup,
        [name]: selected,
      },
    }));
  };

  const handleSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    const newData = selectedOptions.reduce(
      (acc, option) => ({
        ...acc,
        [option]: true,
      }),
      {}
    );
    setFormData((prevData) => ({
      ...prevData,
      businessSetup: newData,
    }));

    // Check if any option is selected to enable the "Next" button
    setIsSelected(selectedOptions.length > 0);
  };

  return (
    <div className="com1">
      <h1>Beyond Visuals</h1>
      <p>
        At Blucom, we create valuable brands for your customers rather than just
        simple visuals. We exist to put all our effort into not only creating
        beautiful visuals but also strategic design driven by cultural
        aesthetics, putting brands into more known and culturally connected
        spaces. Let us know what your next idea is?
      </p>
      <h2>I Want to...</h2>
      <label htmlFor="business-setup">Launch a new product or service:</label>
      <select
        id="business-setup"
        name="businessSetup"
        multiple
        value={Object.keys(formData.businessSetup).filter(
          (key) => formData.businessSetup[key]
        )}
        onChange={handleSelectChange}
      >
        <option value="identityConcept">Identity Concept</option>
        <option value="uiUxDesign">UI/UX Design</option>
        <option value="brandPositioning">Brand Positioning</option>
        <option value="businessPlan">Business Plan</option>
        <option value="marketResearch">Market Research</option>
        <option value="digitalMarketing">Digital Marketing</option>
      </select>
      <button onClick={nextStep} disabled={!isSelected}>
        Next
      </button>
    </div>
  );
};

export default Step1;
