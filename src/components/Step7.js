import React from "react";
import "../Components.css";

const Step7 = ({ formData, setFormData, prevStep, nextStep }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      finalization: {
        ...prevData.finalization,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <h1>Step 7</h1>
      <h2>End-of-year bonanza is just around that spreadsheet...</h2>
      <p>
        It’s still a long shot... but end-of-year tasks are super important and
        need to be taken into account early. A good start is half the battle!
      </p>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="FilingTaxReturns"
            checked={formData.finalization?.FilingTaxReturns || false}
            onChange={handleCheckboxChange}
          />
          Filing Tax Returns
        </label>
        <label>
          <input
            type="checkbox"
            name="FinancialAudit"
            checked={formData.finalization?.FinancialAudit || false}
            onChange={handleCheckboxChange}
          />
          Financial Audit
        </label>
        <label>
          <input
            type="checkbox"
            name="FilingCorporateReturns"
            checked={formData.finalization?.FilingCorporateReturns || false}
            onChange={handleCheckboxChange}
          />
          Filing Corporate Returns (Co House)
        </label>
        <label>
          <input
            type="checkbox"
            name="BusinessStrategy"
            checked={formData.finalization?.BusinessStrategy || false}
            onChange={handleCheckboxChange}
          />
          Business Strategy (Next 12 Months)
        </label>
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step7;
