import React, { useState } from "react";
import "../Components.css";

const Step8 = ({ formData, setFormData, prevStep, nextStep }) => {
  const [industry, setIndustry] = useState(formData.industry || "");

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      industry: e.target.value,
    }));
  };

  return (
    <div>
      <h1>Just one more thing…</h1>
      <p>
        Your personal data is safe with us. We’ll send the report with final
        cost estimations to your inbox, so you can access it at any time.
      </p>
      <p>What industry are you in? *</p>
      <select
        value={industry}
        onChange={handleIndustryChange}
        required
        className="dropdown"
      >
        <option value="">Please choose</option>
        <option value="Advertising">Advertising</option>
        <option value="Business Administration & Support Services">
          Business Administration & Support Services
        </option>
        <option value="Construction">Construction</option>
        <option value="Education">Education</option>
        <option value="Finance & Insurance">Finance & Insurance</option>
        <option value="Food & Beverages">Food & Beverages</option>
        <option value="Health">Health</option>
        <option value="Marketing & Communications">
          Marketing & Communications
        </option>
        <option value="Media">Media</option>
        <option value="Property">Property</option>
        <option value="Publishing">Publishing</option>
        <option value="Tourism & Leisure">Tourism & Leisure</option>
        <option value="Transport & Storage">Transport & Storage</option>
        <option value="Wholesale & Retail">Wholesale & Retail</option>
        <option value="Other">Other</option>
      </select>
      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step8;
