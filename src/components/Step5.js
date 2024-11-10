import React from "react";
import "../Components.css";

const Step5 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      marketingStrategy: {
        ...prevData.marketingStrategy,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <h1>Step 5</h1>
      <h2>Take your brand for a test drive!</h2>
      <p>
        Now that you’re pretty much set up, it’s time to get out there and make
        yourself seen. Let’s do some marketing!{" "}
      </p>
      {/* <label>
        <input
          type="checkbox"
          name="EmailMarketing"
          checked={formData.marketingStrategy.EmailMarketing || false}
          onChange={handleCheckboxChange}
        />
        Email Marketing
      </label>
      <label>
        <input
          type="checkbox"
          name="SEO"
          checked={formData.marketingStrategy.SEO || false}
          onChange={handleCheckboxChange}
        />
        SEO Optimization
      </label>
      <label>
        <input
          type="checkbox"
          name="SocialMediaCampaigns"
          checked={formData.marketingStrategy.SocialMediaCampaigns || false}
          onChange={handleCheckboxChange}
        />
        Social Media Campaigns
      </label> */}
      <div className="flex">
        <div className="left">
          <label>
            <input
              type="checkbox"
              name="PRPressReleaseWriting"
              checked={
                formData.marketingStrategy.PRPressReleaseWriting || false
              }
              onChange={handleCheckboxChange}
            />
            PR & Press Release Writing
          </label>
          <label>
            <input
              type="checkbox"
              name="SocialMediaGraphics"
              checked={formData.marketingStrategy.SocialMediaGraphics || false}
              onChange={handleCheckboxChange}
            />
            Social Media Graphics
          </label>
          <label>
            <input
              type="checkbox"
              name="NewsletterDesign"
              checked={formData.marketingStrategy.NewsletterDesign || false}
              onChange={handleCheckboxChange}
            />
            Newsletter Design
          </label>
          <label>
            <input
              type="checkbox"
              name="LeadGenerationSales"
              checked={formData.marketingStrategy.LeadGenerationSales || false}
              onChange={handleCheckboxChange}
            />
            Lead Generation/Sales
          </label>
          <label>
            <input
              type="checkbox"
              name="GoogleAdWords"
              checked={formData.marketingStrategy.GoogleAdWords || false}
              onChange={handleCheckboxChange}
            />
            Google AdWords
          </label>
        </div>
        <div className="right">
          <label>
            <input
              type="checkbox"
              name="ExplainerVideo"
              checked={formData.marketingStrategy.ExplainerVideo || false}
              onChange={handleCheckboxChange}
            />
            Explainer Video
          </label>
          <label>
            <input
              type="checkbox"
              name="SocialMediaManagement"
              checked={
                formData.marketingStrategy.SocialMediaManagement || false
              }
              onChange={handleCheckboxChange}
            />
            Social Media Management
          </label>
          <label>
            <input
              type="checkbox"
              name="EmailMarketing"
              checked={formData.marketingStrategy.EmailMarketing || false}
              onChange={handleCheckboxChange}
            />
            Email Marketing
          </label>
          <label>
            <input
              type="checkbox"
              name="CustomersContactAcquisition"
              checked={
                formData.marketingStrategy.CustomersContactAcquisition || false
              }
              onChange={handleCheckboxChange}
            />
            Customers Contact Acquisition
          </label>
          <label>
            <input
              type="checkbox"
              name="FlyerDesign"
              checked={formData.marketingStrategy.FlyerDesign || false}
              onChange={handleCheckboxChange}
            />
            Flyer Design
          </label>
        </div>
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step5;
